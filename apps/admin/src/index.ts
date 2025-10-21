import { createServer } from "http";

const appName = "admin";
const port = Number(process.env.PORT || 3001);

const server = createServer((req, res) => {
  if (req?.url === "/healthz") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "ok", app: appName }));
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Admin 控制台</title>
  </head>
  <body>
    <h1>Admin 控制台</h1>
    <p>此页面由 <code>@repo/admin</code> 提供，作为预览占位。</p>
  </body>
</html>`);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[apps/admin] 服务器已启动: http://localhost:${port}`);
});
