import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages cannot send HTTP security headers, so the production
// build adds a Content Security Policy <meta> tag. It is not added in
// dev, because Vite's dev server injects inline styles for hot reload.
const csp = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

function cspMeta() {
  return {
    name: "csp-meta",
    apply: "build",
    transformIndexHtml() {
      return [
        {
          tag: "meta",
          attrs: { "http-equiv": "Content-Security-Policy", content: csp },
          injectTo: "head-prepend",
        },
      ];
    },
  };
}

export default defineConfig({
  plugins: [react(), cspMeta()],
  build: {
    // Do not publish source maps.
    sourcemap: false,
  },
});
