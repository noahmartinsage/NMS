import { describe, it, expect } from "vitest";
import { useAppStore } from "./lib/store";

describe("app store", () => {
  it("updates connection and balance", () => {
    const s = useAppStore.getState();
    expect(s.isConnected).toBe(false);
    expect(s.balance).toBe("0.0000 ETH");

    useAppStore.getState().setConnection(true, "0x1234" as `0x${string}`);
    useAppStore.getState().setBalance("1.2345 ETH");

    const s2 = useAppStore.getState();
    expect(s2.isConnected).toBe(true);
    expect(s2.address).toBe("0x1234");
    expect(s2.balance).toBe("1.2345 ETH");
  });
});
