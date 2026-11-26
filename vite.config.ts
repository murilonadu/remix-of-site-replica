import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

// Pede a imagem principal do topo (mockup) já no HTML, sem esperar o JavaScript carregar.
const preloadHeroImage = (): Plugin => ({
  name: "preload-hero-image",
  apply: "build",
  transformIndexHtml(html, ctx) {
    const files = Object.keys(ctx.bundle ?? {});
    const sm = files.find((f) => f.includes("mockup-carpinteiro-640"));
    const lg = files.find((f) => f.includes("mockup-carpinteiro-1000"));
    if (!sm || !lg) return html;
    const tag = `<link rel="preload" as="image" href="/${sm}" imagesrcset="/${sm} 640w, /${lg} 1000w" imagesizes="(min-width: 1024px) 500px, (min-width: 768px) 420px, 320px" fetchpriority="high">`;
    return html.replace("</title>", "</title>\n  " + tag);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), preloadHeroImage(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
