import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    ...prefix("/community", [
        index("features/community/pages/community-page.tsx"),
      ]),
] satisfies RouteConfig;