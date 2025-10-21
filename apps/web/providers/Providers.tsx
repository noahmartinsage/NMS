"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { wagmiConfig } from "../lib/wagmi";
import { WalletSync } from "./WalletSync";

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <WalletSync />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
