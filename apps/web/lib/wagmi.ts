import { createConfig, http } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { foundry } from "viem/chains";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo";
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL || "http://127.0.0.1:8545";

export const wagmiConfig = createConfig({
  chains: [foundry],
  transports: {
    [foundry.id]: http(rpcUrl)
  },
  connectors: [
    injected({ shimDisconnect: true }),
    walletConnect({ projectId })
  ]
});
