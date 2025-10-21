import { createServer } from "http";

const appName = "api-gateway";
const port = Number(process.env.PORT || 4000);

const server = createServer((req, res) => {
  const url = req.url || "/";

  if (url === "/healthz") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "ok", app: appName }));
    return;
  }

  if (url === "/api/ping") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ pong: true, ts: Date.now() }));
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: appName, endpoints: ["/healthz", "/api/ping"] }));
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[apps/api-gateway] 服务器已启动: http://localhost:${port}`);
});
