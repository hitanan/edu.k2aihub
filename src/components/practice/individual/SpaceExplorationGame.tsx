'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';

// Game interfaces
interface SpaceExplorationGameProps {
  onComplete: (success: boolean, score: number) => void;
  timeLeft: number;
}

interface Position3D {
  x: number;
  y: number;
  z: number;
}

interface Planet {
  id: string;
  name: string;
  position: Position3D;
  size: number;
  color: number;
  discovered: boolean;
  description: string;
  points: number;
}

interface GameLevel {
  id: number;
  name: string;
  description: string;
  spaceshipStart: Position3D;
  planets: Planet[];
  asteroids: Position3D[];
  requiredPlanets: number;
}

// Game levels - kid-friendly space exploration
const SPACE_LEVELS: GameLevel[] = [
  {
    id: 1,
    name: 'Hệ Mặt Trời Mini',
    description: 'Khám phá các hành tinh gần Trái Đất! Tìm và ghé thăm 3 hành tinh.',
    spaceshipStart: { x: 0, y: 0, z: 0 },
    requiredPlanets: 3,
    planets: [
      {
        id: 'mercury',
        name: 'Sao Thủy',
        position: { x: 8, y: 0, z: 2 },
        size: 1.2,
        color: 0xffa500,
        discovered: false,
        description: 'Hành tinh gần Mặt Trời nhất!',
        points: 100,
      },
      {
        id: 'venus',
        name: 'Sao Kim',
        position: { x: -6, y: 2, z: 8 },
        size: 1.8,
        color: 0xffd700,
        discovered: false,
        description: 'Hành tinh nóng nhất hệ Mặt Trời!',
        points: 150,
      },
      {
        id: 'mars',
        name: 'Sao Hỏa',
        position: { x: 12, y: -3, z: -6 },
        size: 1.5,
        color: 0xff4500,
        discovered: false,
        description: 'Hành tinh đỏ với núi lửa khổng lồ!',
        points: 200,
      },
      {
        id: 'jupiter',
        name: 'Sao Mộc',
        position: { x: -15, y: 4, z: -10 },
        size: 3.0,
        color: 0xff8c00,
        discovered: false,
        description: 'Hành tinh khí khổng lồ với vệt sọc đẹp!',
        points: 300,
      },
    ],
    asteroids: [
      { x: 4, y: 1, z: 4 },
      { x: -3, y: -2, z: 6 },
      { x: 8, y: 3, z: -4 },
      { x: -10, y: -1, z: 3 },
    ],
  },
  {
    id: 2,
    name: 'Thám Hiểm Xa Hơn',
    description: 'Đi xa hơn khám phá các hành tinh lớn! Cần tìm 4 hành tinh.',
    spaceshipStart: { x: 0, y: 0, z: 0 },
    requiredPlanets: 4,
    planets: [
      {
        id: 'saturn',
        name: 'Sao Thổ',
        position: { x: 20, y: 5, z: 15 },
        size: 2.8,
        color: 0xdaa520,
        discovered: false,
        description: 'Có những chiếc vành đẹp nhất!',
        points: 400,
      },
      {
        id: 'uranus',
        name: 'Sao Thiên Vương',
        position: { x: -18, y: -8, z: 20 },
        size: 2.2,
        color: 0x4169e1,
        discovered: false,
        description: 'Hành tinh màu xanh lạnh!',
        points: 350,
      },
      {
        id: 'neptune',
        name: 'Sao Hải Vương',
        position: { x: 25, y: -12, z: -18 },
        size: 2.1,
        color: 0x0000cd,
        discovered: false,
        description: 'Hành tinh xa nhất và có gió mạnh!',
        points: 500,
      },
      {
        id: 'pluto',
        name: 'Sao Diêm Vương',
        position: { x: -22, y: 10, z: -25 },
        size: 0.8,
        color: 0x8b4513,
        discovered: false,
        description: 'Hành tinh lùn nhỏ nhắn và dễ thương!',
        points: 600,
      },
    ],
    asteroids: [
      { x: 10, y: 3, z: 8 },
      { x: -12, y: -5, z: 12 },
      { x: 15, y: 7, z: -10 },
      { x: -8, y: -3, z: 18 },
      { x: 22, y: -8, z: 5 },
      { x: -20, y: 12, z: -15 },
    ],
  },
  {
    id: 3,
    name: 'Nhà Thám Hiểm Vũ Trụ',
    description: 'Thử thách cuối cùng! Khám phá toàn bộ hệ Mặt Trời với 5 hành tinh!',
    spaceshipStart: { x: 0, y: 0, z: 0 },
    requiredPlanets: 5,
    planets: [
      {
        id: 'earth-moon',
        name: 'Trái Đất & Mặt Trăng',
        position: { x: -5, y: 2, z: 5 },
        size: 2.0,
        color: 0x00ced1,
        discovered: false,
        description: 'Ngôi nhà xinh đẹp của chúng ta!',
        points: 200,
      },
      {
        id: 'asteroid-belt',
        name: 'Vành Đai Tiểu Hành Tinh',
        position: { x: 18, y: 0, z: 12 },
        size: 1.0,
        color: 0x696969,
        discovered: false,
        description: 'Nơi có hàng triệu tảng đá nhỏ!',
        points: 300,
      },
      {
        id: 'comet',
        name: 'Sao Chổi Ma Thuật',
        position: { x: -25, y: 15, z: -20 },
        size: 1.5,
        color: 0x87ceeb,
        discovered: false,
        description: 'Sao chổi với đuôi sáng lóng lánh!',
        points: 800,
      },
      {
        id: 'space-station',
        name: 'Trạm Không Gian',
        position: { x: 30, y: -20, z: 25 },
        size: 1.8,
        color: 0xffffff,
        discovered: false,
        description: 'Trạm không gian của các nhà du hành!',
        points: 1000,
      },
      {
        id: 'mystery-planet',
        name: 'Hành Tinh Bí Ẩn',
        position: { x: -30, y: -25, z: 30 },
        size: 2.5,
        color: 0x9370db,
        discovered: false,
        description: 'Hành tinh đầy màu sắc và bí ẩn!',
        points: 1200,
      },
    ],
    asteroids: [
      { x: 8, y: 4, z: 8 },
      { x: -12, y: -6, z: 15 },
      { x: 20, y: 10, z: -12 },
      { x: -18, y: -10, z: 20 },
      { x: 25, y: -15, z: 8 },
      { x: -25, y: 18, z: -25 },
      { x: 32, y: -22, z: 20 },
      { x: -28, y: -28, z: 28 },
    ],
  },
];

// Space World Class
class SpaceWorld {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  planets: Map<string, { planet: Planet; mesh: THREE.Mesh }>;
  asteroids: THREE.Mesh[];
  stars: THREE.Points | null = null;

  constructor(width: number, height: number, container: HTMLElement) {
    // Clear any existing content
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.planets = new Map();
    this.asteroids = [];

    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000822, 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(this.renderer.domElement);

    this.setupLighting();
    this.createStarField();
    this.camera.position.set(0, 15, 20);
    this.camera.lookAt(0, 0, 0);
  }

  setupLighting() {
    // Ambient light (space environment) - increased intensity
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    this.scene.add(ambientLight);

    // Sun light (directional) - enhanced lighting
    const sunLight = new THREE.DirectionalLight(0xffffcc, 1.5);
    sunLight.position.set(50, 50, 50);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 200;
    sunLight.shadow.camera.left = -100;
    sunLight.shadow.camera.right = 100;
    sunLight.shadow.camera.top = 100;
    sunLight.shadow.camera.bottom = -100;
    this.scene.add(sunLight);

    // Add colorful space lights for magic effect
    const colorLights = [
      { color: 0xff69b4, position: [20, 10, 20] },
      { color: 0x00ff7f, position: [-20, 10, -20] },
      { color: 0x1e90ff, position: [20, -10, -20] },
      { color: 0xff4500, position: [-20, -10, 20] },
    ];

    colorLights.forEach((light) => {
      const pointLight = new THREE.PointLight(light.color, 1.2, 100);
      pointLight.position.set(light.position[0], light.position[1], light.position[2]);
      this.scene.add(pointLight);
    });
  }

  createStarField() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
    });

    this.stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(this.stars);
  }

  loadLevel(level: GameLevel) {
    // Clear existing planets and asteroids
    this.planets.clear();
    this.asteroids.forEach((asteroid) => this.scene.remove(asteroid));
    this.asteroids = [];

    // Create planets
    level.planets.forEach((planet) => {
      const geometry = new THREE.SphereGeometry(planet.size, 32, 32);
      const material = new THREE.MeshLambertMaterial({
        color: planet.color,
        emissive: planet.color,
        emissiveIntensity: 0.2,
        transparent: false,
        opacity: 1.0
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(planet.position.x, planet.position.y, planet.position.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      this.scene.add(mesh);
      this.planets.set(planet.id, { planet, mesh });

      // Add glowing ring effect for planets
      const ringGeometry = new THREE.RingGeometry(planet.size + 0.2, planet.size + 0.5, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: planet.color,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(mesh.position);
      ring.rotation.x = Math.PI / 2;
      this.scene.add(ring);
    });

    // Create asteroids
    level.asteroids.forEach((asteroidPos) => {
      const geometry = new THREE.DodecahedronGeometry(0.5 + Math.random() * 0.5);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0x8b4513,
        emissive: 0x2d1a08,
        emissiveIntensity: 0.1,
        shininess: 20,
        transparent: false,
        opacity: 1.0
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(asteroidPos.x, asteroidPos.y, asteroidPos.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      this.scene.add(mesh);
      this.asteroids.push(mesh);
    });
  }

  checkPlanetDiscovery(spaceshipPos: Position3D): Planet | null {
    for (const [, { planet, mesh }] of this.planets) {
      if (planet.discovered) continue;

      const distance = Math.sqrt(
        Math.pow(spaceshipPos.x - mesh.position.x, 2) +
          Math.pow(spaceshipPos.y - mesh.position.y, 2) +
          Math.pow(spaceshipPos.z - mesh.position.z, 2),
      );

      // Tăng discovery radius để dễ tiếp cận hành tinh hơn
      const discoveryRadius = planet.size + 4; // Tăng từ 2 lên 4
      if (distance < discoveryRadius) {
        // Discovery radius
        planet.discovered = true;

        // Add discovery effect với larger radius
        const geometry = new THREE.SphereGeometry(planet.size + 3, 16, 16);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffff00,
          transparent: true,
          opacity: 0.3,
          wireframe: true,
        });
        const effect = new THREE.Mesh(geometry, material);
        effect.position.copy(mesh.position);
        this.scene.add(effect);

        // Remove effect after animation
        setTimeout(() => this.scene.remove(effect), 2000);

        return planet;
      }
    }
    return null;
  }

  render() {
    // Animate stars
    if (this.stars) {
      this.stars.rotation.x += 0.0005;
      this.stars.rotation.y += 0.0005;
    }

    // Animate planet rings
    this.planets.forEach(({ mesh }) => {
      mesh.rotation.y += 0.01;
    });

    // Animate asteroids
    this.asteroids.forEach((asteroid, index) => {
      asteroid.rotation.x += 0.01 + index * 0.001;
      asteroid.rotation.y += 0.01 + index * 0.001;
    });

    this.renderer.render(this.scene, this.camera);
  }

  resize(width: number, height: number) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  dispose() {
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }
}

// Spaceship Class
class Spaceship {
  mesh: THREE.Group;
  position: Position3D;
  world: SpaceWorld;
  isMoving: boolean = false;

  constructor(scene: THREE.Scene, startPos: Position3D, world: SpaceWorld) {
    this.position = { ...startPos };
    this.world = world;
    this.mesh = this.createSpaceshipMesh();
    this.mesh.position.set(startPos.x, startPos.y, startPos.z);
    scene.add(this.mesh);
  }

  private createSpaceshipMesh(): THREE.Group {
    const group = new THREE.Group();

    // Main body (colorful rocket)
    const bodyGeometry = new THREE.ConeGeometry(1, 3, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00ff7f,
      shininess: 100,
      transparent: false,
      opacity: 1.0
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = -Math.PI / 2; // Point forward
    body.castShadow = true;
    group.add(body);

    // Wings (triangles)
    for (let i = 0; i < 4; i++) {
      const wingGeometry = new THREE.ConeGeometry(0.3, 1, 3);
      const wingMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff69b4,
        shininess: 50
      });
      const wing = new THREE.Mesh(wingGeometry, wingMaterial);

      const angle = (i / 4) * Math.PI * 2;
      wing.position.x = Math.cos(angle) * 0.8;
      wing.position.z = Math.sin(angle) * 0.8;
      wing.position.y = -1;
      wing.rotation.x = -Math.PI / 2;
      wing.scale.set(0.6, 0.6, 0.6);
      group.add(wing);
    }

    // Thruster glow effect
    const glowGeometry = new THREE.SphereGeometry(0.8, 8, 8);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff4500,
      transparent: true,
      opacity: 0.8,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.y = -2;
    group.add(glow);

    // Cockpit window
    const windowGeometry = new THREE.SphereGeometry(0.4, 8, 8);
    const windowMaterial = new THREE.MeshPhongMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.9,
      shininess: 200
    });
    const cockpit = new THREE.Mesh(windowGeometry, windowMaterial);
    cockpit.position.y = 1;
    group.add(cockpit);

    return group;
  }

  move(direction: 'forward' | 'backward' | 'left' | 'right' | 'up' | 'down'): boolean {
    if (this.isMoving) return false;

    const newPosition = { ...this.position };
    const moveDistance = 2; // Kid-friendly movement distance

    switch (direction) {
      case 'forward':
        newPosition.z -= moveDistance;
        break;
      case 'backward':
        newPosition.z += moveDistance;
        break;
      case 'left':
        newPosition.x -= moveDistance;
        break;
      case 'right':
        newPosition.x += moveDistance;
        break;
      case 'up':
        newPosition.y += moveDistance;
        break;
      case 'down':
        newPosition.y -= moveDistance;
        break;
    }

    this.moveToPosition(newPosition);
    return true;
  }

  private moveToPosition(targetPosition: Position3D): void {
    this.isMoving = true;

    const animate = () => {
      const dx = targetPosition.x - this.position.x;
      const dy = targetPosition.y - this.position.y;
      const dz = targetPosition.z - this.position.z;

      const speed = 0.2; // Smooth movement for kids

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || Math.abs(dz) > 0.1) {
        this.position.x += dx * speed;
        this.position.y += dy * speed;
        this.position.z += dz * speed;

        this.mesh.position.set(this.position.x, this.position.y, this.position.z);

        // Rotate spaceship towards movement direction
        if (dx !== 0 || dz !== 0) {
          this.mesh.rotation.y = Math.atan2(dx, dz);
        }

        requestAnimationFrame(animate);
      } else {
        this.position = { ...targetPosition };
        this.mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.isMoving = false;
      }
    };

    animate();
  }

  reset(startPos: Position3D): void {
    this.position = { ...startPos };
    this.mesh.position.set(startPos.x, startPos.y, startPos.z);
    this.mesh.rotation.set(0, 0, 0);
    this.isMoving = false;
  }
}

// Main Game Component
export function SpaceExplorationGame({ onComplete, timeLeft }: SpaceExplorationGameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setWorld] = useState<SpaceWorld | null>(null);
  const [spaceship, setSpaceship] = useState<Spaceship | null>(null);
  const [gameMode, setGameMode] = useState<'menu' | 'playing'>('menu');
  const [gameState, setGameState] = useState<'playing' | 'completed'>('playing');
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [discoveredPlanets, setDiscoveredPlanets] = useState<Planet[]>([]);
  const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const animationRef = useRef<number | null>(null);

  // Handle planet discovery logic
  const handlePlanetDiscovery = useCallback((discoveredPlanet: Planet) => {
    setCurrentPlanet(discoveredPlanet);
    setDiscoveredPlanets((prev) => [...prev, discoveredPlanet]);
    setScore((prev) => prev + discoveredPlanet.points);

    // Check win condition
    setDiscoveredPlanets((prevDiscovered) => {
      if (prevDiscovered.length + 1 >= SPACE_LEVELS[currentLevel].requiredPlanets) {
        setTimeout(() => {
          setGameState('completed');
          const finalScore = score + discoveredPlanet.points + Math.max(0, timeLeft * 50);
          onComplete(true, finalScore);
        }, 1000);
      }
      return [...prevDiscovered, discoveredPlanet];
    });
  }, [currentLevel, score, timeLeft, onComplete]);

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.log('Fullscreen not supported or denied:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Initialize the 3D space world
  useEffect(() => {
    if (!containerRef.current || gameMode === 'menu') return;

    let isMounted = true;

    try {
      const spaceWorld = new SpaceWorld(
        containerRef.current.offsetWidth || 800,
        containerRef.current.offsetHeight || 600,
        containerRef.current,
      );
      const level = SPACE_LEVELS[currentLevel];
      spaceWorld.loadLevel(level);

      const spaceshipInstance = new Spaceship(spaceWorld.scene, level.spaceshipStart, spaceWorld);

      if (isMounted) {
        setWorld(spaceWorld);
        setSpaceship(spaceshipInstance);

        // Animation loop
        const animate = () => {
          spaceWorld.render();

          // Check for planet discoveries
          if (spaceshipInstance) {
            const discoveredPlanet = spaceWorld.checkPlanetDiscovery(spaceshipInstance.position);
            if (discoveredPlanet) {
              handlePlanetDiscovery(discoveredPlanet);
            }
          }

          if (isMounted) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        animate();

        // Handle window resize
        const handleResize = () => {
          if (containerRef.current && isMounted) {
            spaceWorld.resize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          isMounted = false;
          window.removeEventListener('resize', handleResize);
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          spaceWorld.dispose();
        };
      }
    } catch (error) {
      console.error('Error initializing space world:', error);
    }

    return () => {
      isMounted = false;
    };
  }, [gameMode, currentLevel, handlePlanetDiscovery]); // Fixed dependencies with stable callback

  // Keyboard controls - kid-friendly
  useEffect(() => {
    if (gameMode !== 'playing') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!spaceship || spaceship.isMoving) return;

      // Prevent page scrolling for all navigation keys
      const navigationKeys = [
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'KeyW',
        'KeyA',
        'KeyS',
        'KeyD',
        'KeyQ',
        'KeyE',
        'Space',
        'Home',
        'End',
        'PageUp',
        'PageDown',
      ];

      if (navigationKeys.includes(event.code)) {
        event.preventDefault();
        event.stopPropagation();
      }

      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          event.preventDefault();
          spaceship.move('forward');
          break;
        case 'KeyS':
        case 'ArrowDown':
          event.preventDefault();
          spaceship.move('backward');
          break;
        case 'KeyA':
        case 'ArrowLeft':
          event.preventDefault();
          spaceship.move('left');
          break;
        case 'KeyD':
        case 'ArrowRight':
          event.preventDefault();
          spaceship.move('right');
          break;
        case 'KeyQ':
        case 'Space':
          event.preventDefault();
          spaceship.move('up');
          break;
        case 'KeyE':
        case 'ShiftLeft':
          event.preventDefault();
          spaceship.move('down');
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const navigationKeys = [
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'KeyW',
        'KeyA',
        'KeyS',
        'KeyD',
        'KeyQ',
        'KeyE',
        'Space',
      ];

      if (navigationKeys.includes(event.code)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
    };
  }, [gameMode, spaceship]);

  // Game controls
  const moveSpaceship = useCallback(
    (direction: 'forward' | 'backward' | 'left' | 'right' | 'up' | 'down') => {
      if (!spaceship || gameMode !== 'playing') return;
      spaceship.move(direction);
    },
    [spaceship, gameMode],
  );

  const resetGame = useCallback(() => {
    if (!spaceship) return;

    const level = SPACE_LEVELS[currentLevel];
    spaceship.reset(level.spaceshipStart);
    setGameState('playing');
    setScore(0);
    setDiscoveredPlanets([]);
    setCurrentPlanet(null);
  }, [spaceship, currentLevel]);

  const startLevel = useCallback((levelIndex: number) => {
    setCurrentLevel(levelIndex);
    setGameMode('playing');
    setGameState('playing');
    setScore(0);
    setDiscoveredPlanets([]);
    setCurrentPlanet(null);
  }, []);

  // Planet discovery notification
  useEffect(() => {
    if (currentPlanet) {
      const timer = setTimeout(() => {
        setCurrentPlanet(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentPlanet]);

  // Render level selection menu
  if (gameMode === 'menu') {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center text-white">
        <div className="max-w-6xl mx-auto p-8">
          <h1 className="text-5xl font-bold mb-8 text-center">
            🌍 <span className="text-yellow-300">Khám phá Vũ trụ 3D</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {SPACE_LEVELS.map((level, index) => (
              <div
                key={level.id}
                className="bg-black bg-opacity-50 rounded-xl p-6 border-2 border-purple-400/30 hover:border-yellow-400/70 transition-all"
              >
                <h2 className="text-2xl font-bold mb-2 text-yellow-300">Màn {level.id}</h2>
                <h3 className="text-xl font-semibold mb-4 text-green-300">{level.name}</h3>
                <p className="text-gray-300 mb-6 text-lg">{level.description}</p>

                <div className="mb-4">
                  <div className="text-sm text-purple-300 mb-2">🎯 Cần khám phá: {level.requiredPlanets} hành tinh</div>
                  <div className="text-sm text-blue-300">🪐 Tổng cộng: {level.planets.length} hành tinh</div>
                </div>

                <button
                  onClick={() => startLevel(index)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  🚀 Bắt đầu khám phá!
                </button>
              </div>
            ))}
          </div>

          <div className="text-center bg-black/40 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">🎮 Cách chơi</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-3">
                <div className="text-green-300">
                  🕹️ <strong>Điều khiển:</strong>
                </div>
                <div className="text-gray-300 space-y-2">
                  <div>⬆️ W hoặc ↑: Bay lên phía trước</div>
                  <div>⬇️ S hoặc ↓: Bay lùi lại</div>
                  <div>⬅️ A hoặc ←: Bay sang trái</div>
                  <div>➡️ D hoặc →: Bay sang phải</div>
                  <div>🚀 Q hoặc Space: Bay lên cao</div>
                  <div>⬇️ E hoặc Shift: Bay xuống thấp</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-pink-300">
                  🎯 <strong>Mục tiêu:</strong>
                </div>
                <div className="text-gray-300 space-y-2">
                  <div>🪐 Bay gần các hành tinh để khám phá</div>
                  <div>⭐ Mỗi hành tinh cho điểm số khác nhau</div>
                  <div>🏆 Hoàn thành đủ số hành tinh để thắng</div>
                  <div>⚡ Bay nhanh để được thưởng thời gian!</div>
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
    <div className="w-full min-h-screen bg-black text-white relative">
      {/* Game Header - Kid-friendly design */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 rounded-2xl p-4 max-w-xs backdrop-blur-sm border-2 border-yellow-400/50">
        <h1 className="text-xl font-bold mb-3 text-yellow-300">🌍 {SPACE_LEVELS[currentLevel].name}</h1>
        <div className="space-y-2 text-sm">
          <div className="text-green-300">
            🚀 Vị trí: ({Math.round(spaceship?.position.x || 0)}, {Math.round(spaceship?.position.y || 0)},{' '}
            {Math.round(spaceship?.position.z || 0)})
          </div>
          <div className="text-purple-300">
            🪐 Đã khám phá: {discoveredPlanets.length}/{SPACE_LEVELS[currentLevel].requiredPlanets}
          </div>
          <div className="text-yellow-300">⭐ Điểm: {score}</div>
          <div className="text-blue-300">⏰ Thời gian: {timeLeft}s</div>
        </div>
      </div>

      {/* Game Controls - Big and colorful for kids */}
      <div className="absolute top-4 right-4 z-10 bg-black/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-pink-400/50">
        <div className="flex flex-col gap-3 mb-4">
          <button
            onClick={() => setGameMode('menu')}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-xl text-sm font-bold transition-all"
          >
            📋 Chọn màn khác
          </button>

          <button
            onClick={resetGame}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-bold transition-all"
          >
            🔄 Practice again
          </button>

          {/* Fullscreen button - only show on desktop */}
          <button
            onClick={toggleFullscreen}
            className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl text-sm font-bold transition-all"
            title={isFullscreen ? 'Thoát fullscreen' : 'Chế độ toàn màn hình'}
          >
            {isFullscreen ? '🗗 Thoát FS' : '⛶ Fullscreen'}
          </button>
        </div>

        {/* Manual Controls - Kid-friendly layout */}
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-3 text-pink-300">🎮 Điều khiển tàu vũ trụ</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div></div>
            <button
              onClick={() => moveSpaceship('forward')}
              className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-bold"
              disabled={!spaceship || spaceship.isMoving}
            >
              ⬆️
            </button>
            <div></div>
            <button
              onClick={() => moveSpaceship('left')}
              className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-bold"
              disabled={!spaceship || spaceship.isMoving}
            >
              ⬅️
            </button>
            <button
              onClick={() => moveSpaceship('down')}
              className="px-3 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-bold"
              disabled={!spaceship || spaceship.isMoving}
            >
              ⬇️
            </button>
            <button
              onClick={() => moveSpaceship('right')}
              className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-sm font-bold"
              disabled={!spaceship || spaceship.isMoving}
            >
              ➡️
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => moveSpaceship('up')}
              className="px-3 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-bold"
              disabled={!spaceship || spaceship.isMoving}
            >
              🚀 Q Lên
            </button>
            <button
              onClick={() => moveSpaceship('backward')}
              className="px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-bold"
              disabled={!spaceship || spaceship.isMoving}
            >
              ⬇️ S Lùi
            </button>
          </div>
          <p className="text-xs text-gray-300 text-center">Hoặc dùng phím WASD/Mũi tên</p>
        </div>
      </div>

      {/* Planet Discovery Notification */}
      {currentPlanet && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-black font-bold text-center shadow-2xl animate-bounce border-4 border-white">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-xl mb-2">Khám phá thành công!</h3>
            <h4 className="text-lg mb-1">{currentPlanet.name}</h4>
            <p className="text-sm mb-2">{currentPlanet.description}</p>
            <div className="text-lg font-black">+{currentPlanet.points} điểm!</div>
          </div>
        </div>
      )}

      {/* 3D Space Container */}
      <div
        ref={containerRef}
        className="w-full h-screen"
        style={{
          cursor: 'grab',
          minHeight: '800px',
        }}
      />

      {/* Success Modal */}
      {gameState === 'completed' && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30">
          <div className="bg-gradient-to-br from-purple-800 via-pink-800 to-yellow-700 rounded-3xl p-8 max-w-md mx-4 border-4 border-yellow-400">
            <div className="text-center">
              <div className="text-7xl mb-4">🌟</div>
              <h2 className="text-4xl font-bold text-white mb-4">Xuất sắc!</h2>
              <p className="text-lg text-gray-200 mb-2">
                Bạn đã khám phá thành công {discoveredPlanets.length} hành tinh!
              </p>
              <div className="text-3xl font-bold text-yellow-300 mb-6">Điểm số: {score}</div>
              <div className="flex flex-col gap-4">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white transition-all text-lg"
                >
                  🔄 Practice again màn này
                </button>
                <button
                  onClick={() => setGameMode('menu')}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold text-white transition-all text-lg"
                >
                  🌍 Chọn màn khác
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Planet List Sidebar */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/80 rounded-2xl p-4 max-w-xs backdrop-blur-sm border-2 border-blue-400/50">
        <h3 className="text-lg font-bold mb-3 text-blue-300">🪐 Hành tinh cần tìm</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {SPACE_LEVELS[currentLevel].planets.slice(0, SPACE_LEVELS[currentLevel].requiredPlanets).map((planet) => (
            <div
              key={planet.id}
              className={`flex items-center gap-2 text-sm p-2 rounded-lg ${
                planet.discovered ? 'bg-green-600/30 text-green-300' : 'bg-gray-600/30 text-gray-300'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full`}
                style={{ backgroundColor: `#${planet.color.toString(16).padStart(6, '0')}` }}
              ></div>
              <span className={planet.discovered ? 'line-through' : ''}>{planet.name}</span>
              {planet.discovered && <span className="text-yellow-400 ml-auto">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
