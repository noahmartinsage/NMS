import { ConnectWallet } from "../../components/ConnectWallet";
import { MockBalance } from "../../components/MockBalance";

export default function WalletPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Wallet</h1>
      <ConnectWallet />
      <MockBalance />
    </div>
  );
}
