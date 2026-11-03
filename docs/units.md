# Spacing units

One base unit drives padding, margin, gap, width, height, type size, and line-height.

In `src/styles/global.css`, inside `@theme`:

```css
--spacing: 0.25rem;
```

Tailwind utilities such as `p-4`, `gap-6`, and `h-20` mean “N times `--spacing`”. Changing `--spacing` rescales those utilities and every custom size written as `calc(var(--spacing) * N)`.

`--unit-x` and `--unit-y` both start as `var(--spacing)`. Horizontal insets and column gaps use `--unit-x`. Vertical padding, stacks, and the motion rise use `--unit-y`. To loosen one axis later, point that variable at a different value. Leave the other one on `--spacing`.

Type tokens are multiples of the same unit:

- `--text-body` is `calc(var(--spacing) * 4.5)`, with line-height `calc(var(--spacing) * 7)`
- `--text-quiet` is `calc(var(--spacing) * 3.5)`, with line-height `calc(var(--spacing) * 5)`
- Menu, page titles, and service names use `clamp()`. The minimum and maximum are unit multiples. The middle term uses `vw` so the type can grow with the viewport. That viewport term is the only length that is not a unit.

Do not add raw pixel sizes (`w-[137px]`, `font-size: 18px`, `margin: 12px`). If a length is needed, write `calc(var(--spacing) * N)` or the unit alias. A `1px` border or outline is the exception. `aspect-ratio`, `ch`, and `vw` inside a fluid `clamp()` are allowed.
