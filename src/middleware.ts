import createMiddleware from "next-intl/middleware";
import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales: ["en", "id", "zh", "pt-BR"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|studio|.*\\..*).*)", "/"],
};
