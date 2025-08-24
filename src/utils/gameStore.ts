// Game State Store using Zustand for 3D Games Persistence
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types for different game states
interface SpaceStationGameState {
  modules: Array<{
    id: string;
    type: string;
    position: [number, number, number];
  }>;
  budget: number;
  stats: {
    power: number;
    crew: number;
    research: number;
    food: number;
    storage: number;
  };
  gameTime: number;
  lastSaved: number;
}

interface SmartCityGameState {
  buildings: Array<{
    id: string;
    type: string;
    position: [number, number, number];
    level: number;
  }>;
  resources: {
    population: number;
    energy: number;
    water: number;
    waste: number;
    happiness: number;
  };
  budget: number;
  gameTime: number;
  lastSaved: number;
}

interface DroneGameState {
  fieldsScanned: number;
  totalFields: number;
  progress: number;
  droneBattery: number;
  lastPosition: [number, number, number];
  gameTime: number;
  lastSaved: number;
}

interface VietnameseHeritageGameState {
  visitedSites: string[];
  score: number;
  selectedSite: string | null;
  gameTime: number;
  lastSaved: number;
}

interface GameStore {
  // Space Station Builder
  spaceStation: SpaceStationGameState;
  setSpaceStationState: (state: Partial<SpaceStationGameState>) => void;
  resetSpaceStation: () => void;

  // Smart City Planner
  smartCity: SmartCityGameState;
  setSmartCityState: (state: Partial<SmartCityGameState>) => void;
  resetSmartCity: () => void;

  // Drone Crop Monitoring
  droneGame: DroneGameState;
  setDroneGameState: (state: Partial<DroneGameState>) => void;
  resetDroneGame: () => void;

  // Vietnamese Heritage Explorer
  vietnameseHeritage: VietnameseHeritageGameState;
  setVietnameseHeritageState: (state: Partial<VietnameseHeritageGameState>) => void;
  resetVietnameseHeritage: () => void;

  // General utilities
  clearAllGameData: () => void;
  getLastPlayedGame: () => string | null;
  setLastPlayedGame: (gameId: string) => void;
}

const initialSpaceStationState: SpaceStationGameState = {
  modules: [],
  budget: 5000,
  stats: {
    power: 0,
    crew: 0,
    research: 0,
    food: 0,
    storage: 0,
  },
  gameTime: 0,
  lastSaved: Date.now(),
};

const initialSmartCityState: SmartCityGameState = {
  buildings: [],
  resources: {
    population: 1000,
    energy: 100,
    water: 100,
    waste: 0,
    happiness: 50,
  },
  budget: 10000,
  gameTime: 0,
  lastSaved: Date.now(),
};

const initialDroneGameState: DroneGameState = {
  fieldsScanned: 0,
  totalFields: 20,
  progress: 0,
  droneBattery: 100,
  lastPosition: [0, 5, 0],
  gameTime: 0,
  lastSaved: Date.now(),
};

const initialVietnameseHeritageState: VietnameseHeritageGameState = {
  visitedSites: [],
  score: 0,
  selectedSite: null,
  gameTime: 0,
  lastSaved: Date.now(),
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      // Space Station Builder
      spaceStation: initialSpaceStationState,
      setSpaceStationState: (newState) =>
        set((state) => ({
          spaceStation: {
            ...state.spaceStation,
            ...newState,
            lastSaved: Date.now(),
          },
        })),
      resetSpaceStation: () => set({ spaceStation: { ...initialSpaceStationState, lastSaved: Date.now() } }),

      // Smart City Planner
      smartCity: initialSmartCityState,
      setSmartCityState: (newState) =>
        set((state) => ({
          smartCity: {
            ...state.smartCity,
            ...newState,
            lastSaved: Date.now(),
          },
        })),
      resetSmartCity: () => set({ smartCity: { ...initialSmartCityState, lastSaved: Date.now() } }),

      // Drone Crop Monitoring
      droneGame: initialDroneGameState,
      setDroneGameState: (newState) =>
        set((state) => ({
          droneGame: {
            ...state.droneGame,
            ...newState,
            lastSaved: Date.now(),
          },
        })),
      resetDroneGame: () => set({ droneGame: { ...initialDroneGameState, lastSaved: Date.now() } }),

      // Vietnamese Heritage Explorer
      vietnameseHeritage: initialVietnameseHeritageState,
      setVietnameseHeritageState: (newState) =>
        set((state) => ({
          vietnameseHeritage: {
            ...state.vietnameseHeritage,
            ...newState,
            lastSaved: Date.now(),
          },
        })),
      resetVietnameseHeritage: () =>
        set({ vietnameseHeritage: { ...initialVietnameseHeritageState, lastSaved: Date.now() } }),

      // General utilities
      clearAllGameData: () =>
        set({
          spaceStation: { ...initialSpaceStationState, lastSaved: Date.now() },
          smartCity: { ...initialSmartCityState, lastSaved: Date.now() },
          droneGame: { ...initialDroneGameState, lastSaved: Date.now() },
          vietnameseHeritage: { ...initialVietnameseHeritageState, lastSaved: Date.now() },
        }),

      getLastPlayedGame: () => {
        const state = get();
        const games = [
          { id: 'space-station', lastSaved: state.spaceStation.lastSaved },
          { id: 'smart-city', lastSaved: state.smartCity.lastSaved },
          { id: 'drone-game', lastSaved: state.droneGame.lastSaved },
          { id: 'vietnamese-heritage', lastSaved: state.vietnameseHeritage.lastSaved },
        ];

        games.sort((a, b) => b.lastSaved - a.lastSaved);
        return games[0]?.id || null;
      },

      setLastPlayedGame: (gameId: string) => {
        const now = Date.now();
        set((state) => {
          switch (gameId) {
            case 'space-station':
              return {
                spaceStation: { ...state.spaceStation, lastSaved: now },
              };
            case 'smart-city':
              return {
                smartCity: { ...state.smartCity, lastSaved: now },
              };
            case 'drone-game':
              return {
                droneGame: { ...state.droneGame, lastSaved: now },
              };
            case 'vietnamese-heritage':
              return {
                vietnameseHeritage: { ...state.vietnameseHeritage, lastSaved: now },
              };
            default:
              return state;
          }
        });
      },
    }),
    {
      name: 'k2ai-3d-games-storage', // LocalStorage key
      partialize: (state) => ({
        spaceStation: state.spaceStation,
        smartCity: state.smartCity,
        droneGame: state.droneGame,
        vietnameseHeritage: state.vietnameseHeritage,
      }),
    },
  ),
);
