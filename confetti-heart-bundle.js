
(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  script.onload = function () {
    confetti.shapeOptions = confetti.shapeOptions || {};
    confetti.shapeOptions.heart = function(ctx) {
      const path = new Path2D("M362.7 64c-54.5 0-99.6 37.5-113.7 88.1C234.9 101.5 189.8 64 135.3 64 61.8 64 0 125.8 0 199.3c0 128 181.3 221 248 265.5 66.7-44.5 248-137.5 248-265.5C496 125.8 434.2 64 360.7 64z");
      return path;
    };

    window.heartConfetti = function () {
      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['heart'],
        colors: ['#8E0F0F', '#6F1313', '#FF0000']
      };

      confetti({ ...defaults, particleCount: 30, scalar: 2 });
      confetti({ ...defaults, particleCount: 20, scalar: 3 });
    };
  };
  document.head.appendChild(script);
})();
