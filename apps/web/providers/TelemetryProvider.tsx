"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { telemetry } from "../lib/telemetry";

export function TelemetryProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    telemetry.init();
  }, []);

  useEffect(() => {
    telemetry.trackPageview(pathname);
  }, [pathname]);

  return <>{children}</>;
}
