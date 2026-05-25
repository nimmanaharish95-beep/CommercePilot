import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Match Vite's base. In Lovable preview/dev this is "/", on GitHub Pages it's "/qcommerce-fusion/".
const rawBase = import.meta.env.BASE_URL || "/";
const basepath = rawBase.replace(/\/$/, "") || "/";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
