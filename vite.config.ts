// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
// Only apply GitHub Pages base path during production builds for GH Pages.
// Lovable preview & dev serve at "/", so applying the base there breaks asset loading.
const isGhPagesBuild = process.env.DEPLOY_TARGET === "gh-pages";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: isGhPagesBuild ? "/qcommerce-fusion/" : "/",
  },
});
