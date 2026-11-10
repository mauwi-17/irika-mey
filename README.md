# Mauwey Portfolio

Personal portfolio of Erica Mae "Mauwey" Camintoy, built with React + Vite for CSE 316.

## Run it
```
npm install     # first time only
npm run dev     # open the link it prints (usually http://localhost:5173)
npm run build   # makes the final site in /dist for hosting
```

## Where to edit
| What | File |
|---|---|
| Name, bio, skills, contact links | `src/data/profile.js` |
| Case study content (3 projects) | `src/data/projects.js` |
| Colors, fonts, layout | `src/styles.css` (tokens at the top) |
| Interactive demos | `src/components/demos/` |

Text in `[square brackets]` is a placeholder still waiting for real info.

## Structure
- `src/pages/Home.jsx`: hero, skills ticker, work, about, contact
- `src/pages/CaseStudy.jsx`: one template for every case study (`/work/askademic`, `/work/wearwhat`, `/work/tugma`), following the class case study slide deck
- `src/settings.jsx`: theme, larger-text, and reduced-motion settings (saved in localStorage)
- `src/hooks/useStepper.js`: autoplay + pause logic for the demos

## Accessibility decisions
- Display controls in the navbar: light/dark theme, larger text, reduce motion
- Respects the OS "reduce motion" setting; all demos can be paused (WCAG 2.2.2)
- Text contrast is at least 4.5:1 in both themes; pink buttons use dark text in dark mode for contrast
- Statuses in demos use icon + text, never color alone
- Skip link, visible focus rings, semantic headings and landmarks, 44px tap targets

## Hosting
`public/.htaccess` (Apache/Hostinger) and `vercel.json` make page URLs like `/work/askademic` work on refresh.
