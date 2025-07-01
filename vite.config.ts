import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "vite-plugin-pages";
import sitemap from "vite-plugin-sitemap";
import glsl from "vite-plugin-glsl";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    server: {},
    // resolve: {
    //   alias: {
    //     "@src": resolve(__dirname, "./src"),
    //   },
    // },
    base: isProduction ? "/portfolio/" : "/", // 👈 only set base for production
    plugins: [
      react(),
      glsl(),
      pages(),
      sitemap({
        hostname: "https://dimitriosgkegkas.github.io",
      }),
    ],
  };
});
