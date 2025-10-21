import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "../providers/Providers";
import { Nav } from "../components/Nav";
import { TelemetryProvider } from "../providers/TelemetryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web DApp",
  description: "Next.js 14 DApp scaffold with wagmi/viem/zustand"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <Providers>
          <TelemetryProvider>
            <Nav />
            <main className="container mx-auto px-4 py-6 max-w-5xl">{children}</main>
          </TelemetryProvider>
        </Providers>
      </body>
    </html>
  );
}
