"use client";

import { useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useAppStore } from "../lib/store";

export function ConnectWallet() {
  const { connectors, connect, status, error } = useConnect();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { setConnection } = useAppStore();

  // Keep Zustand store in sync when connection changes
  useEffect(() => {
    setConnection(!!isConnected, address ?? null);
  }, [isConnected, address, setConnection]);

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted">Connected</span>
        <code className="px-2 py-1 rounded bg-black/30 border border-white/10 text-sm">{address}</code>
        <button
          className="px-3 py-2 rounded-md bg-danger/80 text-white hover:bg-danger"
          onClick={() => {
            disconnect();
            setConnection(false, null);
          }}
        >
          Disconnect
        </button>
      </div>
    );
  }

  const wc = connectors.find((c) => c.id === "walletConnect");
  const injected = connectors.find((c) => c.id === "injected");

  return (
    <div className="flex items-center gap-3">
      {wc && (
        <button
          className="px-4 py-2 rounded-md bg-brand text-white"
          onClick={() => connect({ connector: wc })}
        >
          Connect Wallet (WalletConnect)
        </button>
      )}
      {injected && (
        <button
          className="px-4 py-2 rounded-md bg-black/30 border border-white/10 text-white"
          onClick={() => connect({ connector: injected })}
        >
          Connect (Injected)
        </button>
      )}
      {status === "connecting" && <span className="text-muted">Connecting...</span>}
      {error && <span className="text-red-400">{error.message}</span>}
    </div>
  );
}
