type EventProps = Record<string, unknown>;

function log(...args: unknown[]) {
  // eslint-disable-next-line no-console
  console.log("[telemetry]", ...args);
}

export const telemetry = {
  init() {
    log("initialized");
  },
  trackPageview(path: string) {
    log("pageview", { path, ts: Date.now() });
  },
  track(event: string, props?: EventProps) {
    log("event", { event, props, ts: Date.now() });
  }
};
