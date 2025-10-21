import { create } from "zustand";

interface AppState {
  address: `0x${string}` | null;
  isConnected: boolean;
  balance: string;
  setConnection: (connected: boolean, address?: string | null) => void;
  setBalance: (balance: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  address: null,
  isConnected: false,
  balance: "0.0000 ETH",
  setConnection: (connected, address = null) =>
    set(() => ({ isConnected: connected, address })),
  setBalance: (balance) => set(() => ({ balance }))
}));
