// server.cjs
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Proxy configuration for both HTTP and WebSocket
app.use(
  "/proxy",
  createProxyMiddleware({
    target: "wss://hermes.pyth.network", // Use wss:// for secure WebSocket
    changeOrigin: true,
    ws: true, // Enable WebSocket proxying
    secure: true, // Verify SSL certificate
    onProxyReqWs: (proxyReq, req, socket, options, head) => {
      console.log("Proxying WebSocket request:", req.url);
    },
    onError: (err, req, res) => {
      console.error("Proxy error:", err);
      if (!res.headersSent) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });
      }
      res.end("Proxy error");
    },
    onProxyRes(proxyRes, req, res) {
      // Modify response headers if needed
      proxyRes.headers["Access-Control-Allow-Origin"] = "*"; // Allow all origins
    },
    logLevel: "debug", // Enable debug logging (optional)
  })
);

app.listen(3001, () => {
  console.log("Proxy server running at http://localhost:3001");
});
