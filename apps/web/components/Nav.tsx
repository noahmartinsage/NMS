"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Nav() {
  const pathname = usePathname();
  const linkCls = (href: string) =>
    clsx("px-3 py-2 rounded-md text-sm font-medium", {
      "bg-brand/10 text-foreground": pathname === href,
      "text-muted hover:text-foreground": pathname !== href
    });

  return (
    <header className="border-b border-white/10">
      <nav className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">DApp</Link>
        <div className="flex items-center gap-2">
          <Link href="/" className={linkCls("/")}>Home</Link>
          <Link href="/wallet" className={linkCls("/wallet")}>Wallet</Link>
          <Link href="/nft" className={linkCls("/nft")}>NFT</Link>
        </div>
      </nav>
    </header>
  );
}
