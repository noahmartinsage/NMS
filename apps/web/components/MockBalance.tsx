"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useAppStore } from "../lib/store";

export function MockBalance() {
  const { address, isConnected } = useAccount();
  const { balance, setBalance } = useAppStore();

  useEffect(() => {
    if (isConnected && address) {
      // Mock balance update when connected; could be replaced with viem read
      const mock = (Math.random() * 2 + 0.5).toFixed(4);
      setBalance(`${mock} ETH`);
    } else {
      setBalance("0.0000 ETH");
    }
  }, [isConnected, address, setBalance]);

  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm">
      <span className="text-muted">Mock Balance</span>
      <span className="font-mono">{balance}</span>
      <button
        onClick={() => setBalance(`${(Math.random() * 2 + 0.5).toFixed(4)} ETH`)}
        className="ml-2 rounded bg-brand px-2 py-1 text-white"
      >
        Refresh
      </button>
    </div>
  );
}
