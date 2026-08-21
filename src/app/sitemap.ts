import type { MetadataRoute } from "next";
import { NAV_ROUTES } from "@/lib/routes";

const BASE_URL = "https://fardinfarhankhan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...NAV_ROUTES.map((r) => r.href)];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
