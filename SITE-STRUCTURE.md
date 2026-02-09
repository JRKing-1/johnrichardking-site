# THE FOUNDRY - Complete Site Structure & Compliance

## ✅ COMPLIANCE CHECKLIST

### Critical Requirements Met:

1. **NO EM DASHES** ✅
   - Replaced all — with periods, commas, or line breaks
   - Verified across all pages

2. **NON-CLICKABLE CONDITION TAGS** ✅
   - Tags styled with `cursor: default`
   - No href links on condition tags
   - Tags are purely informational

3. **NO RELATED POSTS** ✅
   - Essay pages end with single CTA button only
   - No related content sections
   - No endless browse mechanics

4. **LOCKED NAVIGATION** ✅
   - Exact order on all pages: Home | The Work | Devotionals | The Book | About | Join the Journey
   - No dropdowns
   - Same order on mobile

5. **LOCKED FOOTER** ✅
   - Left: "John Richard King / Author · Speaker · Witness"
   - Right: Nav links in same order
   - Bottom: "Built by hand. Led by heart. Forged for purpose."
   - Join page has subtle footer emphasis

6. **LOCKED BUTTON COPY** ✅
   - Primary button: "Receive new writing as it becomes available"
   - Microcopy: "Receive new writing when it's ready."
   - No "Subscribe" anywhere

7. **RESTRAINED DESIGN** ✅
   - Parchment background #F5F1E8
   - Ink text #111111
   - Muted gold #B08D32
   - Subtle borders and shadows
   - Minimal animations
   - Max reading width 680px on content pages

8. **NO AGGRESSIVE ELEMENTS** ✅
   - No popups
   - No social share bars on essays
   - No tag clouds
   - Clean, calm aesthetic

## COMPLETE FILE TREE

```
foundry-site/
│
├── README.md                                       (Deployment guide)
│
├── index.html                                      (Home page with hero)
│
├── css/
│   └── style.css                                   (Complete design system)
│
├── js/
│   └── main.js                                     (Mobile nav + form handler)
│
├── the-work/
│   └── index.html                                  (The Work index - locked copy)
│
├── devotionals/
│   ├── index.html                                  (Devotionals index - locked copy)
│   └── day-13-emptiness-precedes-intimacy/
│       └── index.html                              (Sample devotional with scripture)
│
├── the-book/
│   └── index.html                                  (The Book - with Job scripture)
│
├── about/
│   └── index.html                                  (About - locked copy)
│
├── join-the-journey/
│   └── index.html                                  (Join page - locked copy & form)
│
└── essays/
    └── presence-without-assignment-becomes-intrusion/
        └── index.html                              (Sample essay with tags)
```

## PAGE-BY-PAGE DETAILS

### Home (/)
- Hero section with professional photo (embedded base64)
- Site title: "The Foundry" with subtitle "by John Richard King"  
- Short posture statement (3 paragraphs)
- Primary CTA: "Read the Work"
- Secondary link: "Join the Journey"
- No book title mentioned on home

### The Work (/the-work/)
- Complete locked copy as specified
- Featured work section with 3 essays
- The Conditions section
- A Note on Reading section
- Work-led, formation-first posture

### Devotionals (/devotionals/)
- Complete locked copy
- How to Engage section
- Recent Devotionals list
- Link to sample devotional

### The Book (/the-book/)
- Complete locked copy
- Job 5:17-18 scripture in styled block
- Status section
- A Note to the Reader

### About (/about/)
- Personal story
- Ends with: "If the words here serve you, you are welcome to stay."

### Join the Journey (/join-the-journey/)
- Complete locked copy
- Email form with exact button text
- Microcopy under field
- Secondary Substack link
- Footer with subtle emphasis on identity block

### Essay Template (/essays/presence-without-assignment-becomes-intrusion/)
- Clean title and subtitle
- Non-clickable condition tags (Restraint, Authority, Formation)
- Essay body in reading column
- After-essay module with single button
- No related content

### Devotional Template (/devotionals/day-13-emptiness-precedes-intimacy/)
- Title: Day 13 Emptiness Precedes Intimacy
- Anchor Scripture: John 12:24 in styled block
- Daily Theme
- Devotional Reflection
- Witnesses section
- Formation Prayer
- Quiet Practice
- After-devotional button

## CSS DESIGN SYSTEM

All design variables defined at `:root`:
- Colors (parchment, ink, gold, hairline, shadow)
- Typography (serif for headings, sans for body)
- Consistent spacing and rhythm
- Responsive breakpoints at 968px and 768px

## JAVASCRIPT

Minimal JS for:
- Mobile navigation toggle
- Close nav on outside click
- Form submission handler (shows alert, needs email service integration)
- Active nav state on scroll

## DEPLOYMENT

**For Netlify:**
1. Upload entire folder
2. Build command: (none - static HTML)
3. Publish directory: `/`
4. Site will be live at: your-domain.netlify.app

**Clean URLs:**
All internal links use trailing slashes for clean routing:
- `/the-work/` instead of `/the-work.html`
- `/about/` instead of `/about.html`

## QUALITY NOTES

- Premium, calm aesthetic matching specs
- Pulpit-level polish
- Formation-first, work-led posture preserved
- No visual clutter or noise
- Essays are rooms people sit in
- Generous whitespace throughout
- Semantic HTML with accessible headings
- All copy verbatim from specifications
- Ready for immediate deployment

## NEXT STEPS

1. **Extract the tar.gz file**
2. **Update Substack URL** (currently placeholder)
3. **Integrate email service** (replace alert in js/main.js)
4. **Add actual content** (duplicate essay/devotional templates)
5. **Deploy to Netlify**

The site is complete, production-ready, and compliant with all specifications.
