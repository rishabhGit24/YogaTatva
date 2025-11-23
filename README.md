# Yoga Tatva — Frontend

This is a lightweight Vite + React frontend scaffolded to match the provided Figma screenshots.

Run locally:

```powershell
# Windows (cmd/powershell)
npm install
npm run dev
```

This creates three routes:

- `/` — Home (landing, about, sessions, courses, testimonials)
- `/services` — Services / Well-being (sessions, courses, happenings)
- `/booking` — Booking form

Notes:

- Styling uses plain CSS in `src/styles.css` (no Tailwind)
- Images/svgs are inline components under `src/components`
- Booking form has basic client-side validation (required fields)

Next steps:

- Replace SVG assets with high-resolution exports from the Figma file for true pixel-perfect fidelity.
- Add fonts or font weights exactly matching Figma (we used Josefin Sans as a close match).
