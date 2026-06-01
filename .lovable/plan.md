## Add Selar buy button

In `src/routes/index.tsx`, in the Book section, alongside the existing Amazon CTA, add a second "Buy on Selar" button linking to:

`https://selar.com/thedrivetostart`

Details:
- Place the two buttons side-by-side (flex row, wraps on mobile).
- Amazon stays as the primary button (filled).
- Selar renders as a secondary/outline button to keep visual hierarchy.
- Both open in a new tab with `rel="noopener noreferrer"`.
- Use existing design tokens — no new colors.

No other content or sections change.