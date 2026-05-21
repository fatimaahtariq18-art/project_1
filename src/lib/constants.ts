export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
  product: "/product",
  contact: "/contact",
  admin: "/admin",
} as const;
