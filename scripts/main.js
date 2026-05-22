// portfolio scripts — minimal, no dependencies

(() => {
  // live clock — copenhagen tabular nums
  const clockEl = document.getElementById("clock-time");
  if (clockEl) {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Copenhagen",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => {
      clockEl.textContent = fmt.format(new Date());
    };
    tick();
    setInterval(tick, 1000);
  }

  // scramble effect — on hover for elements with [data-scramble]
  const CHARS = "!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz0123456789";
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  class Scrambler {
    constructor(el) {
      this.el = el;
      this.original = el.textContent;
      this.queue = [];
      this.frame = 0;
      this.req = null;
      this.running = false;

      el.style.fontVariantLigatures = "none";

      el.addEventListener("pointerenter", () => this.start());
      el.addEventListener("focus", () => this.start());
    }
    start() {
      if (this.running) return;
      this.running = true;
      cancelAnimationFrame(this.req);
      const text = this.original;
      this.queue = [];
      for (let i = 0; i < text.length; i++) {
        const start = Math.floor(Math.random() * 10);
        const end = start + Math.floor(Math.random() * 10) + 4;
        this.queue.push({ from: text[i], to: text[i], start, end, char: "" });
      }
      this.frame = 0;
      this.update();
    }
    update() {
      let out = "";
      let done = 0;
      for (let i = 0; i < this.queue.length; i++) {
        const q = this.queue[i];
        if (this.frame >= q.end) {
          done++;
          out += q.to;
        } else if (this.frame >= q.start) {
          if (!q.char || Math.random() < 0.28) {
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          out += q.char;
        } else {
          out += q.from;
        }
      }
      this.el.textContent = out;
      if (done < this.queue.length) {
        this.req = requestAnimationFrame(() => this.update());
        this.frame++;
      } else {
        this.el.textContent = this.original;
        this.running = false;
      }
    }
  }

  if (!prefersReducedMotion) {
    document
      .querySelectorAll("[data-scramble]")
      .forEach((el) => new Scrambler(el));
  }
})();
