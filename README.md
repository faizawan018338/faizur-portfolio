# Faizur Rehman — Portfolio (Node.js)

A personal developer portfolio built with **Node.js + Express + EJS**.
Dark theme with a violet/purple accent, animated typewriter role text,
timeline-style experience/education, and a project card grid. All content
is data-driven — you edit one JSON file, you don't touch the HTML.

## Project structure

```
portfolio-node/
├── server.js               # Express app entry point
├── package.json
├── data/
│   └── profile.json         # ALL your content lives here
├── views/
│   ├── index.ejs             # Main page template
│   └── partials/
│       ├── head.ejs
│       ├── nav.ejs
│       └── footer.ejs
└── public/
    ├── css/style.css         # All styling (dark/violet theme)
    ├── js/main.js             # Typewriter effect, mobile nav, contact form
    ├── images/
    │   └── profile.jpg         # Hero photo
    └── files/
        └── Faizur_Rehman_CV.docx   # Linked from the "Download CV" button
```

## Run it locally

You need [Node.js](https://nodejs.org) installed (v18 or newer recommended).

```bash
cd portfolio-node
npm install
npm start
```

Then open **http://localhost:3000** in your browser.

For auto-reload while editing (optional):

```bash
npm run dev
```

## How to add YOUR project(s)

Open `data/profile.json`, find `"projects"`, and add a new object:

```json
{
  "title": "Your Project Name",
  "subtitle": "One-line description of what it does",
  "description": "A short paragraph about what you built and how.",
  "tags": ["Node.js", "MongoDB", "React"],
  "links": {
    "github": "https://github.com/yourusername/your-repo",
    "live": "https://your-live-demo-link.com"
  }
}
```

Save the file and refresh — no code changes needed. The same applies to
`"skills"`, `"experience"`, and `"education"`: they're all arrays you can
add to.

## Editing your info

- Name, role list (typewriter text), bio, CV link → top of `data/profile.json`
- Your photo → replace `public/images/profile.jpg` with your own (same filename, or update the path in `profile.json`)
- Your CV file → replace `public/files/Faizur_Rehman_CV.docx` (update the `cvFile` path in `profile.json` if you rename it)
- GitHub / LinkedIn links → `"nav"` section in `profile.json` (leave blank to hide the icon)
- Colors / fonts → `public/css/style.css` (`:root` variables at the top)

## Deploying it live (free options)

- **Render.com** — connect your GitHub repo, it auto-detects Node.js and deploys for free.
- **Railway.app** — similar one-click deploy for Node apps.
- **Vercel** — works well if you convert `server.js` into a serverless function, otherwise Render/Railway are simpler for a plain Express app.

## Tech stack

- Node.js
- Express
- EJS (server-side templating)
- Vanilla CSS (no framework) + vanilla JS (no framework)
