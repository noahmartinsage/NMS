import { ConnectWallet } from "../components/ConnectWallet";
import { MockBalance } from "../components/MockBalance";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold">Welcome</h1>
        <p className="text-muted">Starter DApp scaffolded with Next.js 14, Tailwind, wagmi, viem, and Zustand.</p>
      </section>
      <section className="space-y-4">
        <ConnectWallet />
        <MockBalance />
      </section>
    </div>
  );
}
