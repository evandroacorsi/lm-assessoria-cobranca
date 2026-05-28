import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

function getBasePath() {
  const explicitBasePath = process.env.VITE_BASE_PATH;
  if (explicitBasePath) return explicitBasePath;

  if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
    return repoName ? `/${repoName}/` : "/";
  }

  return "/";
}

export default defineConfig(() => ({
  base: getBasePath(),
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      server: { entry: "server" },
      spa: {
        enabled: true,
        prerender: {
          enabled: true,
          outputPath: "index.html",
        },
      },
    }),
    react(),
    tailwindcss(),
  ],
}));
