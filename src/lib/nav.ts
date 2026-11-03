import { url } from "./url";

function normalizePath(pathname: string): string {
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export function isHomePath(pathname: string): boolean {
  return normalizePath(pathname) === normalizePath(url());
}

export function resolveBack(pathname: string): { href: string; label: string } | undefined {
  const path = normalizePath(pathname);
  if (isHomePath(path)) return undefined;

  const servicii = normalizePath(url("servicii"));
  if (path.startsWith(servicii) && path !== servicii) {
    return { href: servicii, label: "Servicii" };
  }

  return { href: url(), label: "Acasă" };
}
