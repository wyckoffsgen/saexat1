import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart(),
    nitro({
      preset: "vercel",
      rollupConfig: {
        external: [],
      },
      alias: {
        "^tslib$": "tslib/tslib.es6.mjs",
      },
    }),
    viteReact(),
  ],
});
