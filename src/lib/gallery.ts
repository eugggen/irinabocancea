import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "../../img Irina Bocancea/**/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

/** Photos in `img Irina Bocancea/<folder>/`, ordered by filename. */
export function gallery(folder: string): ImageMetadata[] {
  const marker = `/${folder}/`;
  return Object.entries(files)
    .filter(([path]) => path.includes(marker))
    .sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }))
    .map(([, file]) => file.default);
}
