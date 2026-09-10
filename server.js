const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// ---- view engine ----
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---- static assets (css, js, images) ----
app.use(express.static(path.join(__dirname, "public")));

// ---- load portfolio content ----
// All page content lives in data/profile.json.
// Edit that file to update your info — no need to touch the HTML/EJS.
function loadProfile() {
  const raw = fs.readFileSync(path.join(__dirname, "data", "profile.json"), "utf-8");
  return JSON.parse(raw);
}

app.get("/", (req, res) => {
  const profile = loadProfile();
  res.render("index", { profile });
});

// Only start a listening server when run directly (local dev / most hosts).
// On Vercel, the app is imported as a serverless function instead — see vercel.json.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
  });
}

module.exports = app;
