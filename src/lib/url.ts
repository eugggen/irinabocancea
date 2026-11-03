function prefix(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith("/") ? base : `${base}/`;
}

/** Directory route under `base`. `url()` is home, `url("despre")` is `/despre/`. */
export function url(path = ""): string {
  const cleaned = path.replace(/^\/+|\/+$/g, "");
  return cleaned ? `${prefix()}${cleaned}/` : prefix();
}

/** File in `public/`, without a trailing slash. */
export function asset(path: string): string {
  return `${prefix()}${path.replace(/^\/+/, "")}`;
}
