document.addEventListener("DOMContentLoaded", () => {

  // ---------- typewriter effect for hero role ----------
  const el = document.getElementById("typewriter");
  const roles = window.__PORTFOLIO_ROLES__ || [];
  if (el && roles.length) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 80);
    }
    tick();
  }

  // ---------- mobile nav toggle ----------
  const burger = document.getElementById("navBurger");
  const mobileMenu = document.getElementById("navMobile");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobileMenu.classList.remove("is-open"))
    );
  }

  // ---------- contact form (front-end only, no backend wired up yet) ----------
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit]");
      const original = btn.textContent;
      btn.textContent = "Sent ✓";
      form.reset();
      setTimeout(() => (btn.textContent = original), 2200);
    });
  }
});
