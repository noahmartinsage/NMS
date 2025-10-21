"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useAppStore } from "../lib/store";

export function WalletSync() {
  const { address, isConnected } = useAccount();
  const { setConnection } = useAppStore();

  useEffect(() => {
    setConnection(!!isConnected, address ?? null);
  }, [address, isConnected, setConnection]);

  return null;
}
