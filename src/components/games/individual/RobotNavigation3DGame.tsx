'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

// Block Types for the 3D world
export const BLOCK_TYPES = {
  AIR: { id: 0, color: 0x000000, transparent: true, name: 'Air' },
  STONE: { id: 1, color: 0x808080, name: 'Stone' },
  GRASS: { id: 2, color: 0x00ff00, name: 'Grass' },
  WATER: { id: 3, color: 0x0066ff, transparent: true, name: 'Water' },
  OBSTACLE: { id: 4, color: 0x654321, name: 'Obstacle' },
  TARGET: { id: 5, color: 0xffff00, name: 'Target' },
  START: { id: 6, color: 0x00ff88, name: 'Start' }
} as const;

type BlockType = typeof BLOCK_TYPES[keyof typeof BLOCK_TYPES];

// 3D World Position interface
interface Position3D {
  x: number;
  y: number;
  z: number;
}

interface Block {
  type: BlockType;
  position: Position3D;
  mesh: THREE.Mesh;
}

interface RobotNavigation3DGameProps {
  gameData?: unknown;
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
}

// Game Level Definitions
const GAME_LEVELS = [
  {
    id: 1,
    name: 'Basic Navigation',
    description: 'Simple path from start to goal',
    start: { x: -3, y: 0, z: -3 },
    goal: { x: 3, y: 0, z: 3 },
    obstacles: [
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 0, z: 1 },
      { x: -1, y: 0, z: -1 }
    ]
  },
  {
    id: 2,
    name: 'Maze Challenge',
    description: 'Navigate through a complex maze',
    start: { x: -4, y: 0, z: -4 },
    goal: { x: 4, y: 0, z: 4 },
    obstacles: [
      { x: -2, y: 0, z: -2 }, { x: -1, y: 0, z: -2 }, { x: 0, y: 0, z: -2 },
      { x: 2, y: 0, z: -1 }, { x: 2, y: 0, z: 0 }, { x: 2, y: 0, z: 1 },
      { x: -2, y: 0, z: 2 }, { x: -1, y: 0, z: 2 }, { x: 0, y: 0, z: 2 },
      { x: 1, y: 0, z: -3 }, { x: 3, y: 0, z: -1 }
    ]
  },
  {
    id: 3,
    name: '3D Vertical Navigation',
    description: 'Navigate in 3D space with height differences',
    start: { x: -3, y: 0, z: -3 },
    goal: { x: 3, y: 2, z: 3 },
    obstacles: [
      { x: 0, y: 0, z: 0 }, { x: 0, y: 1, z: 0 },
      { x: 1, y: 0, z: 1 }, { x: 1, y: 1, z: 1 },
      { x: -1, y: 0, z: -1 }, { x: 2, y: 1, z: 2 },
      { x: 3, y: 0, z: 3 }, { x: 3, y: 1, z: 3 } // Platform stairs
    ]
  }
];

type GameMode = 'menu' | 'auto' | 'manual';
type GameState = 'playing' | 'completed' | 'paused';

// Core 3D World Structure
class BlockWorld {
  public dimensions: { width: number; height: number; depth: number };
  public blocks: Map<string, Block>;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private ambientLight: THREE.AmbientLight;
  private directionalLight: THREE.DirectionalLight;

  constructor(width: number, height: number, depth: number, container: HTMLElement) {
    this.dimensions = { width, height, depth };
    this.blocks = new Map();
    
    // Clear container first to prevent multiple canvases
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Initialize Three.js scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); // Sky blue background
    
    // Setup camera
    this.camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    this.camera.position.set(15, 20, 15);
    this.camera.lookAt(0, 0, 0);
    
    // Setup renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.style.display = 'block';
    container.appendChild(this.renderer.domElement);
    
    // Setup lighting
    this.ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(this.ambientLight);
    
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    this.directionalLight.position.set(20, 20, 10);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.camera.near = 0.1;
    this.directionalLight.shadow.camera.far = 100;
    this.directionalLight.shadow.camera.left = -20;
    this.directionalLight.shadow.camera.right = 20;
    this.directionalLight.shadow.camera.top = 20;
    this.directionalLight.shadow.camera.bottom = -20;
    this.scene.add(this.directionalLight);
    
    // Create ground plane
    this.createGround();
    
    // Add coordinate helper
    this.addCoordinateHelper();
  }

  // Convert 3D coordinates to unique key
  coordsToKey(x: number, y: number, z: number): string {
    return `${x},${y},${z}`;
  }

  // Create block mesh based on type
  createBlockMesh(blockType: BlockType): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2); // Increased size for better visibility on desktop
    const material = new THREE.MeshLambertMaterial({
      color: blockType.color,
      transparent: 'transparent' in blockType ? blockType.transparent : false,
      opacity: ('transparent' in blockType && blockType.transparent) ? 0.7 : 1.0
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    return mesh;
  }

  // Add block at position
  setBlock(x: number, y: number, z: number, blockType: BlockType): void {
    const key = this.coordsToKey(x, y, z);
    
    // Remove existing block if present
    if (this.blocks.has(key)) {
      const existingBlock = this.blocks.get(key);
      if (existingBlock) {
        this.scene.remove(existingBlock.mesh);
      }
    }
    
    // Create new block
    const mesh = this.createBlockMesh(blockType);
    mesh.position.set(x, y, z);
    
    this.blocks.set(key, {
      type: blockType,
      position: { x, y, z },
      mesh: mesh
    });
    
    this.scene.add(mesh);
  }

  // Remove block
  removeBlock(x: number, y: number, z: number): void {
    const key = this.coordsToKey(x, y, z);
    const block = this.blocks.get(key);
    if (block) {
      this.scene.remove(block.mesh);
      this.blocks.delete(key);
    }
  }

  // Check if position is walkable
  isWalkable(pos: Position3D): boolean {
    // Check bounds
    if (pos.x < -6 || pos.x > 6 || pos.z < -6 || pos.z > 6 || pos.y < 0 || pos.y > 5) {
      return false;
    }
    
    const blockKey = this.coordsToKey(pos.x, pos.y, pos.z);
    const block = this.blocks.get(blockKey);
    
    // If no block, it's walkable (air)
    if (!block) return true;
    
    // Check for non-walkable blocks
    const isBlocked = block.type.id === BLOCK_TYPES.STONE.id || 
                     block.type.id === BLOCK_TYPES.OBSTACLE.id ||
                     block.type.id === BLOCK_TYPES.WATER.id;
    
    return !isBlocked;
  }

  // Clear all blocks
  clearLevel(): void {
    this.blocks.forEach(block => {
      this.scene.remove(block.mesh);
    });
    this.blocks.clear();
  }

  // Load level configuration
  loadLevel(level: typeof GAME_LEVELS[0]): void {
    this.clearLevel();
    
    // Create boundary walls
    for (let x = -6; x <= 6; x++) {
      this.setBlock(x, 0, -6, BLOCK_TYPES.STONE);
      this.setBlock(x, 0, 6, BLOCK_TYPES.STONE);
    }
    
    for (let z = -5; z <= 5; z++) {
      this.setBlock(-6, 0, z, BLOCK_TYPES.STONE);
      this.setBlock(6, 0, z, BLOCK_TYPES.STONE);
    }
    
    // Add level obstacles
    level.obstacles.forEach(pos => {
      this.setBlock(pos.x, pos.y, pos.z, BLOCK_TYPES.OBSTACLE);
    });
    
    // Add start and goal
    this.setBlock(level.start.x, level.start.y, level.start.z, BLOCK_TYPES.START);
    this.setBlock(level.goal.x, level.goal.y, level.goal.z, BLOCK_TYPES.TARGET);
  }

  // Create ground plane
  private createGround(): void {
    const groundGeometry = new THREE.PlaneGeometry(60, 60);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  // Add coordinate helper
  private addCoordinateHelper(): void {
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  dispose(): void {
    // Clean up all resources
    this.blocks.forEach(block => {
      this.scene.remove(block.mesh);
      block.mesh.geometry.dispose();
      if (block.mesh.material instanceof THREE.Material) {
        block.mesh.material.dispose();
      }
    });
    this.blocks.clear();
    
    // Clean up scene
    while (this.scene.children.length > 0) {
      const child = this.scene.children[0];
      this.scene.remove(child);
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (child.material instanceof THREE.Material) {
          child.material.dispose();
        }
      }
    }
    
    this.renderer.dispose();
  }
}

// Robot Character System
class Robot {
  public position: Position3D;
  public isMoving: boolean = false;
  public mesh: THREE.Group;
  public path: Position3D[] = [];
  private world: BlockWorld;

  constructor(scene: THREE.Scene, startPosition: Position3D, world: BlockWorld) {
    this.position = { ...startPosition };
    this.world = world;
    
    // Create 3D robot model
    this.mesh = this.createRobotMesh();
    this.mesh.position.set(startPosition.x, startPosition.y + 0.5, startPosition.z);
    scene.add(this.mesh);
  }

  private createRobotMesh(): THREE.Group {
    const group = new THREE.Group();
    
    // Robot body (blue cube) - Increased size for better visibility
    const bodyGeometry = new THREE.BoxGeometry(0.8, 1.0, 0.6); // Increased size
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x0066ff });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.5; // Adjusted position
    body.castShadow = true;
    group.add(body);
    
    // Robot head (smaller cube) - Increased size
    const headGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5); // Increased size
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0x0088ff });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.2; // Adjusted position
    head.castShadow = true;
    group.add(head);
    
    // Eyes (glowing spheres) - Slightly larger
    const eyeGeometry = new THREE.SphereGeometry(0.08); // Increased size
    const eyeMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xffffff,
      emissive: 0x444444
    });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.1, 1.05, 0.15);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.1, 1.05, 0.15);
    group.add(rightEye);
    
    return group;
  }

  // Move robot to specific direction
  move(direction: 'forward' | 'backward' | 'left' | 'right' | 'up' | 'down'): boolean {
    if (this.isMoving) return false;
    
    const newPosition = { ...this.position };
    
    switch (direction) {
      case 'forward': newPosition.z -= 1; break;
      case 'backward': newPosition.z += 1; break;
      case 'left': newPosition.x -= 1; break;
      case 'right': newPosition.x += 1; break;
      case 'up': newPosition.y += 1; break;
      case 'down': newPosition.y -= 1; break;
    }
    
    // Check if new position is walkable
    if (!this.world.isWalkable(newPosition)) {
      console.log('❌ Cannot move to position:', newPosition);
      return false;
    }
    
    this.moveTo(newPosition);
    return true;
  }

  // Move robot to target position with animation
  moveTo(targetPosition: Position3D): void {
    if (this.isMoving) return;
    
    console.log('🎯 Robot moving to:', targetPosition);
    this.isMoving = true;
    
    const targetPos = { ...targetPosition };
    
    // Smooth animation
    const animate = () => {
      const dx = targetPos.x - this.position.x;
      const dy = targetPos.y - this.position.y;
      const dz = targetPos.z - this.position.z;
      
      const speed = 0.15;
      
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05 || Math.abs(dz) > 0.05) {
        this.position.x += dx * speed;
        this.position.y += dy * speed;
        this.position.z += dz * speed;
        
        this.mesh.position.set(this.position.x, this.position.y + 0.5, this.position.z);
        requestAnimationFrame(animate);
      } else {
        this.position = { ...targetPos };
        this.mesh.position.set(this.position.x, this.position.y + 0.5, this.position.z);
        this.isMoving = false;
        console.log('✅ Robot reached position:', this.position);
      }
    };
    
    animate();
  }

  // Follow path step by step
  followPath(path: Position3D[]): void {
    if (path.length === 0) return;
    
    console.log('🛤️ Robot following path with', path.length, 'steps');
    this.path = [...path];
    this.moveAlongPath();
  }

  private moveAlongPath(): void {
    if (this.path.length === 0) {
      console.log('✅ Robot finished following path');
      return;
    }
    
    const nextPosition = this.path.shift()!;
    this.moveTo(nextPosition);
    
    const checkAndContinue = () => {
      if (!this.isMoving && this.path.length > 0) {
        this.moveAlongPath();
      } else if (this.isMoving) {
        setTimeout(checkAndContinue, 100);
      }
    };
    
    setTimeout(checkAndContinue, 300);
  }

  // Reset robot position
  reset(position: Position3D): void {
    this.position = { ...position };
    this.mesh.position.set(position.x, position.y + 0.5, position.z);
    this.isMoving = false;
    this.path = [];
  }
}

// 3D Pathfinding using A* Algorithm
class Pathfinding3D {
  private world: BlockWorld;

  constructor(world: BlockWorld) {
    this.world = world;
  }

  findPath(start: Position3D, goal: Position3D): Position3D[] {
    console.log('🔍 Starting A* pathfinding from', start, 'to', goal);
    
    const openSet: Position3D[] = [start];
    const closedSet = new Set<string>();
    const gScore = new Map<string, number>();
    const fScore = new Map<string, number>();
    const cameFrom = new Map<string, Position3D>();
    
    gScore.set(this.coordKey(start), 0);
    fScore.set(this.coordKey(start), this.heuristic(start, goal));
    
    let iterations = 0;
    const maxIterations = 1000; // Prevent infinite loops
    
    while (openSet.length > 0 && iterations < maxIterations) {
      iterations++;
      
      // Find node with lowest fScore
      const current = openSet.reduce((a, b) => 
        (fScore.get(this.coordKey(a)) || Infinity) < (fScore.get(this.coordKey(b)) || Infinity) ? a : b
      );
      
      if (this.coordsEqual(current, goal)) {
        const path = this.reconstructPath(cameFrom, current);
        console.log('🎉 Path found after', iterations, 'iterations, length:', path.length);
        return path;
      }
      
      const currentIndex = openSet.findIndex(node => this.coordsEqual(node, current));
      openSet.splice(currentIndex, 1);
      closedSet.add(this.coordKey(current));
      
      // Check all neighbors (6 directions in 3D)
      const neighbors = this.getNeighbors(current);
      
      for (const neighbor of neighbors) {
        const neighborKey = this.coordKey(neighbor);
        
        if (closedSet.has(neighborKey)) continue;
        if (!this.world.isWalkable(neighbor)) continue;
        
        const tentativeGScore = (gScore.get(this.coordKey(current)) || 0) + 1;
        
        if (!openSet.some(node => this.coordsEqual(node, neighbor))) {
          openSet.push(neighbor);
        } else if (tentativeGScore >= (gScore.get(neighborKey) || Infinity)) {
          continue;
        }
        
        cameFrom.set(neighborKey, current);
        gScore.set(neighborKey, tentativeGScore);
        fScore.set(neighborKey, tentativeGScore + this.heuristic(neighbor, goal));
      }
    }
    
    console.log('❌ No path found after', iterations, 'iterations');
    console.log('Final openSet size:', openSet.length);
    console.log('Final closedSet size:', closedSet.size);
    return []; // No path found
  }

  private getNeighbors(pos: Position3D): Position3D[] {
    return [
      { x: pos.x + 1, y: pos.y, z: pos.z },
      { x: pos.x - 1, y: pos.y, z: pos.z },
      { x: pos.x, y: pos.y + 1, z: pos.z },
      { x: pos.x, y: pos.y - 1, z: pos.z },
      { x: pos.x, y: pos.y, z: pos.z + 1 },
      { x: pos.x, y: pos.y, z: pos.z - 1 }
    ];
  }

  private heuristic(a: Position3D, b: Position3D): number {
    // Manhattan distance in 3D
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
  }

  private coordsEqual(a: Position3D, b: Position3D): boolean {
    return a.x === b.x && a.y === b.y && a.z === b.z;
  }

  private coordKey(pos: Position3D): string {
    return `${pos.x},${pos.y},${pos.z}`;
  }

  private reconstructPath(cameFrom: Map<string, Position3D>, current: Position3D): Position3D[] {
    const path: Position3D[] = [current];
    let currentKey = this.coordKey(current);
    
    while (cameFrom.has(currentKey)) {
      current = cameFrom.get(currentKey)!;
      path.unshift(current);
      currentKey = this.coordKey(current);
    }
    
    return path;
  }
}

// Main Game Component
export function RobotNavigation3DGame({ onComplete, timeLeft }: RobotNavigation3DGameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setWorld] = useState<BlockWorld | null>(null);
  const [robot, setRobot] = useState<Robot | null>(null);
  const [pathfinding, setPathfinding] = useState<Pathfinding3D | null>(null);
  const [gameMode, setGameMode] = useState<'menu' | 'auto' | 'manual' | 'hybrid'>('menu');
  const [gameState, setGameState] = useState<'playing' | 'completed' | 'paused'>('playing');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [currentPath, setCurrentPath] = useState<Position3D[]>([]);
  const animationRef = useRef<number | null>(null);

  // Initialize the 3D world
  useEffect(() => {
    if (!containerRef.current || gameMode === 'menu') return;

    let isMounted = true;

    try {
      const blockWorld = new BlockWorld(12, 6, 12, containerRef.current);
      const level = GAME_LEVELS[currentLevel];
      blockWorld.loadLevel(level);
      
      const robotInstance = new Robot(blockWorld.scene, level.start, blockWorld);
      const pathfindingInstance = new Pathfinding3D(blockWorld);

      if (isMounted) {
        setWorld(blockWorld);
        setRobot(robotInstance);
        setPathfinding(pathfindingInstance);

        // Animation loop
        const animate = () => {
          blockWorld.render();
          if (isMounted) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        animate();

        // Handle window resize
        const handleResize = () => {
          if (containerRef.current && isMounted) {
            blockWorld.resize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          isMounted = false;
          window.removeEventListener('resize', handleResize);
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          blockWorld.dispose();
        };
      }
    } catch (error) {
      console.error('Error initializing 3D world:', error);
    }

    return () => {
      isMounted = false;
    };
  }, [gameMode, currentLevel]);

  // Global keyboard event prevention to stop page scrolling for arrow keys
  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      // Always prevent arrow keys from scrolling the page when this game component is active
      const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      
      if (arrowKeys.includes(event.code)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    // Use passive: false to ensure preventDefault works
    document.addEventListener('keydown', handleGlobalKeyDown, { passive: false });
    
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []); // No dependencies - always active when component is mounted

  // Keyboard controls for manual mode
  useEffect(() => {
    if (gameMode !== 'manual' && gameMode !== 'hybrid') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!robot || robot.isMoving) return;

      // Prevent default for ALL navigation keys to stop page scrolling
      const navigationKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE',
        'Space', 'Home', 'End', 'PageUp', 'PageDown'
      ];
      
      if (navigationKeys.includes(event.code)) {
        event.preventDefault();
        event.stopPropagation();
      }

      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          event.preventDefault();
          robot.move('forward');
          break;
        case 'KeyS':
        case 'ArrowDown':
          event.preventDefault();
          robot.move('backward');
          break;
        case 'KeyA':
        case 'ArrowLeft':
          event.preventDefault();
          robot.move('left');
          break;
        case 'KeyD':
        case 'ArrowRight':
          event.preventDefault();
          robot.move('right');
          break;
        case 'KeyQ':
          event.preventDefault();
          robot.move('up');
          break;
        case 'KeyE':
          event.preventDefault();
          robot.move('down');
          break;
      }
      
      // Check if reached goal
      if (robot) {
        const level = GAME_LEVELS[currentLevel];
        const distance = Math.abs(robot.position.x - level.goal.x) + 
                        Math.abs(robot.position.y - level.goal.y) + 
                        Math.abs(robot.position.z - level.goal.z);
        if (distance < 1) {
          setGameState('completed');
          const finalScore = 1000 + Math.max(0, timeLeft * 10);
          setScore(finalScore);
          onComplete(true, finalScore);
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // Also prevent default on key up for navigation keys
      const navigationKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE'
      ];
      
      if (navigationKeys.includes(event.code)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    // Use capture phase to ensure we catch events before they bubble
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
    };
  }, [gameMode, robot, currentLevel, timeLeft, onComplete]);

  // Auto pathfinding
  const findPath = useCallback(() => {
    if (!robot || !pathfinding) return;

    const level = GAME_LEVELS[currentLevel];
    const start = robot.position;
    const goal = level.goal;

    const path = pathfinding.findPath(start, goal);
    
    if (path.length > 0) {
      setCurrentPath(path);
      robot.followPath(path.slice(1)); // Skip current position
      
      setTimeout(() => {
        const distance = Math.abs(robot.position.x - goal.x) + 
                        Math.abs(robot.position.y - goal.y) + 
                        Math.abs(robot.position.z - goal.z);
        if (distance < 1) {
          setGameState('completed');
          const finalScore = 1000 + Math.max(0, timeLeft * 10);
          setScore(finalScore);
          onComplete(true, finalScore);
        }
      }, path.length * 400);
    }
  }, [robot, pathfinding, currentLevel, timeLeft, onComplete]);

  // Manual robot movement controls
  const moveRobot = useCallback((direction: 'forward' | 'backward' | 'left' | 'right' | 'up' | 'down') => {
    if (!robot || (gameMode !== 'manual' && gameMode !== 'hybrid')) return;
    
    const moved = robot.move(direction);
    if (moved) {
      const level = GAME_LEVELS[currentLevel];
      const distance = Math.abs(robot.position.x - level.goal.x) + 
                      Math.abs(robot.position.y - level.goal.y) + 
                      Math.abs(robot.position.z - level.goal.z);
      if (distance < 1) {
        setGameState('completed');
        const finalScore = 1000 + Math.max(0, timeLeft * 10);
        setScore(finalScore);
        onComplete(true, finalScore);
      }
    }
  }, [robot, gameMode, currentLevel, timeLeft, onComplete]);

  // Reset game
  const resetGame = useCallback(() => {
    if (!robot) return;
    
    const level = GAME_LEVELS[currentLevel];
    robot.reset(level.start);
    setGameState('playing');
    setCurrentPath([]);
    setScore(0);
  }, [robot, currentLevel]);

  // Start level
  const startLevel = useCallback((levelIndex: number, mode: 'auto' | 'manual' | 'hybrid') => {
    setCurrentLevel(levelIndex);
    setGameMode(mode);
    setGameState('playing');
    setScore(0);
    setCurrentPath([]);
  }, []);

  // Render level selection menu
  if (gameMode === 'menu') {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">🤖 3D Robot Navigation</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {GAME_LEVELS.map((level, index) => (
              <div key={level.id} className="bg-black bg-opacity-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-2 text-blue-300">Level {level.id}</h2>
                <h3 className="text-lg font-semibold mb-3">{level.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{level.description}</p>
                
                <div className="space-y-2">
                  <button
                    onClick={() => startLevel(index, 'auto')}
                    className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                  >
                    🎯 Auto Navigation
                  </button>
                  <button
                    onClick={() => startLevel(index, 'manual')}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                  >
                    🎮 Manual Control
                  </button>
                  <button
                    onClick={() => startLevel(index, 'hybrid')}
                    className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                  >
                    🔄 Hybrid Mode
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-black bg-opacity-50 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-bold mb-3 text-yellow-300">Game Modes</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">🎯 Auto Navigation</h4>
                  <p className="text-gray-300">Watch the robot use A* pathfinding algorithm to navigate automatically to the goal.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">🎮 Manual Control</h4>
                  <p className="text-gray-300">Control the robot manually using WASD/Arrow keys. Q/E for up/down movement.</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-purple-300 mb-2">🔄 Hybrid Mode</h4>
                  <p className="text-gray-300">Start with auto navigation, then switch to manual control anytime. Best of both worlds!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render game interface
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white relative">
      {/* Game Header */}
      <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-90 rounded-lg p-4 max-w-xs backdrop-blur-sm">
        <h1 className="text-xl font-bold mb-2 text-yellow-400">
          Level {GAME_LEVELS[currentLevel].id}: {GAME_LEVELS[currentLevel].name}
        </h1>
        <div className="space-y-1 text-sm">
          <div>Mode: {
            gameMode === 'auto' ? '🎯 Auto' : 
            gameMode === 'manual' ? '🎮 Manual' : 
            '🔄 Hybrid'
          }</div>
          <div>Status: {gameState === 'completed' ? '✅ Completed!' : '🎮 Playing'}</div>
          {(gameMode === 'auto' || gameMode === 'hybrid') && <div>Path Length: {currentPath.length} steps</div>}
          <div>Robot: {robot ? `(${robot.position.x}, ${robot.position.y}, ${robot.position.z})` : 'Loading...'}</div>
          <div>Score: {score}</div>
          <div>Time: {timeLeft}s</div>
        </div>
      </div>

      {/* Game Controls */}
      <div className="absolute top-4 right-4 z-10 bg-black bg-opacity-90 rounded-lg p-4 backdrop-blur-sm">
        <div className="flex flex-col gap-2 mb-4">
          <button
            onClick={() => setGameMode('menu')}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-sm font-semibold"
          >
            📋 Level Menu
          </button>
          
          {/* Mode Switch for Hybrid */}
          {gameMode === 'hybrid' && (
            <div className="flex gap-1">
              <button
                onClick={findPath}
                disabled={gameState === 'completed' || !robot}
                className="px-2 py-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded text-xs font-semibold"
              >
                🎯 Auto
              </button>
              <span className="px-2 py-1 bg-purple-600 rounded text-xs font-semibold">🎮 Manual Ready</span>
            </div>
          )}
          
          {gameMode === 'auto' && (
            <button
              onClick={findPath}
              disabled={gameState === 'completed' || !robot}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded text-sm font-semibold"
            >
              🎯 Find Path
            </button>
          )}
          
          <button
            onClick={resetGame}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm font-semibold"
          >
            🔄 Reset
          </button>
        </div>

        {/* Manual Controls */}
        {(gameMode === 'manual' || gameMode === 'hybrid') && (
          <div className="mb-4">
            <h3 className="text-sm font-bold mb-2 text-blue-300">Manual Controls</h3>
            <div className="grid grid-cols-3 gap-1 mb-2">
              <div></div>
              <button
                onClick={() => moveRobot('forward')}
                className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-xs"
                disabled={!robot || robot.isMoving}
              >
                ↑
              </button>
              <div></div>
              <button
                onClick={() => moveRobot('left')}
                className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-xs"
                disabled={!robot || robot.isMoving}
              >
                ←
              </button>
              <button
                onClick={() => moveRobot('down')}
                className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-xs"
                disabled={!robot || robot.isMoving}
              >
                ↓
              </button>
              <button
                onClick={() => moveRobot('right')}
                className="px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-xs"
                disabled={!robot || robot.isMoving}
              >
                →
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => moveRobot('up')}
                className="px-2 py-1 bg-purple-500 hover:bg-purple-600 rounded text-xs"
                disabled={!robot || robot.isMoving}
              >
                Up (Q)
              </button>
              <button
                onClick={() => moveRobot('backward')}
                className="px-2 py-1 bg-purple-500 hover:bg-purple-600 rounded text-xs"
                disabled={!robot || robot.isMoving}
              >
                Down (E)
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">Use WASD/Arrow keys or buttons</p>
          </div>
        )}

        {/* Instructions */}
        <div className="text-xs text-gray-300">
          <p>• Green cube = Start 🟢</p>
          <p>• Yellow cube = Target 🟡</p>
          <p>• Brown cubes = Obstacles 🟫</p>
          <p>• Gray cubes = Walls ⬜</p>
        </div>
      </div>

      {/* 3D Game Container - Increased Size */}
      <div 
        ref={containerRef} 
        className="w-full h-screen"
        style={{ 
          cursor: 'grab',
          minHeight: '800px' // Minimum height for desktop
        }}
      />

      {/* Success Modal */}
      {gameState === 'completed' && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="bg-gradient-to-br from-green-800 via-blue-800 to-purple-800 rounded-2xl p-8 max-w-md mx-4 border border-green-400/30">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Xuất sắc!
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                Robot đã tìm được đường đi tối ưu!
              </p>
              <div className="text-2xl font-bold text-yellow-400 mb-6">
                Điểm số: {score}
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
                >
                  🔄 Chơi lại
                </button>
                <button
                  onClick={() => setGameMode('menu')}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold text-white transition-colors"
                >
                  📋 Chọn màn khác
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
