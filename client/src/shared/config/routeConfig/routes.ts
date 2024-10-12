export enum AppRoutes {
  MAIN = "main",
  ARTICLE = "article",
  STAFF = "staff",
  CONTACTS = "contacts",
  SERVICES = "services",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ARTICLE]: "/article/:id",
  [AppRoutes.STAFF]: "/staff",
  [AppRoutes.CONTACTS]: "/contacts",
  [AppRoutes.SERVICES]: "/services",
  [AppRoutes.NOT_FOUND]: "*",
};
