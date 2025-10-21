import { createServer } from "http";

const appName = "web";
const port = Number(process.env.PORT || 3000);

const server = createServer((req, res) => {
  if (!req.url) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  // Simple routing
  if (req.url === "/healthz") {
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
    <title>Monorepo Web</title>
    <style>
      body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans",sans-serif;padding:2rem;line-height:1.6}
      code{background:#f5f5f5;padding:.2rem .4rem;border-radius:4px}
    </style>
  </head>
  <body>
    <h1>Web 应用已启动</h1>
    <p>此页面由 <code>@repo/web</code> 提供，作为预览占位。</p>
    <ul>
      <li>健康检查: <a href="/healthz">/healthz</a></li>
    </ul>
  </body>
</html>`);
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[apps/web] 服务器已启动: http://localhost:${port}`);
});
