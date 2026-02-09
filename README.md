# The Foundry by John Richard King

Production-ready multi-page static website with premium editorial design.

## File Structure

```
foundry-site/
├── index.html                          (Home page)
├── css/
│   └── style.css                       (Complete design system)
├── js/
│   └── main.js                         (Minimal navigation JS)
├── the-work/
│   └── index.html                      (The Work index page)
├── devotionals/
│   ├── index.html                      (Devotionals index page)
│   └── day-13-emptiness-precedes-intimacy/
│       └── index.html                  (Sample devotional)
├── the-book/
│   └── index.html                      (The Book page)
├── about/
│   └── index.html                      (About page)
├── join-the-journey/
│   └── index.html                      (Join the Journey page)
└── essays/
    └── presence-without-assignment-becomes-intrusion/
        └── index.html                  (Sample essay)
```

## Design System Compliance

✅ **NO em dashes** - Replaced with periods, commas, or line breaks
✅ **Non-clickable condition tags** - Tags are purely informational 
✅ **No related posts** - Essays stand alone
✅ **Locked navigation** - Exact order: Home | The Work | Devotionals | The Book | About | Join the Journey
✅ **Locked footer** - Consistent across all pages with tagline "Built by hand. Led by heart. Forged for purpose."
✅ **Locked button copy** - "Receive new writing as it becomes available"
✅ **Parchment-forward aesthetic** - #F5F1E8 background, #111111 text, #B08D32 gold accents

## Color Variables

- `--parchment: #F5F1E8`
- `--ink: #111111`
- `--gold: #B08D32`
- `--gold-muted: rgba(176, 141, 50, 0.15)`
- `--hairline: rgba(17, 17, 17, 0.12)`
- `--shadow: rgba(17, 17, 17, 0.08)`

## Typography

- Headings: Libre Baskerville (serif)
- Body: Inter (sans-serif)
- Reading column max-width: 680px on essay/devotional pages

## Deployment to Netlify

1. Upload the entire `foundry-site` folder
2. No build command needed (static HTML)
3. Publish directory: `/` (root)
4. All internal links use trailing slashes for clean URLs

## Features

- Fully responsive mobile-first design
- Semantic HTML with accessible headings
- No aggressive CTAs or popups
- Minimal animations, maximum restraint
- Clean routing structure

## Template Pages

- Essay template: `/essays/presence-without-assignment-becomes-intrusion/`
- Devotional template: `/devotionals/day-13-emptiness-precedes-intimacy/`

Both templates can be duplicated for new content.

## Form Submission

The email form on Join the Journey page currently shows an alert. Replace with your email service integration:

```javascript
// In js/main.js, update the form handler
joinForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your email service API call here
  alert('Thank you. You will receive new writing when it is ready.');
});
```

## Notes

- Substack link placeholder: Update `https://substack.com` to actual URL
- Hero photo: Already embedded as base64 in index.html
- Join page has subtle footer emphasis as requested
- All copy is locked and verbatim from specifications
