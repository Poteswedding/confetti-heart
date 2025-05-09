(function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
  script.onload = function () {
    const myConfetti = confetti.create(null, {
      resize: true,
      useWorker: true
    });

    // Отрисовка сердечка вручную
    function drawHeart(ctx) {
      ctx.beginPath();
      const x = 0, y = 0, s = 10;
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x, y - s, x - s, y - s, x - s, y);
      ctx.bezierCurveTo(x - s, y + s, x, y + s * 1.5, x, y + s * 2);
      ctx.bezierCurveTo(x, y + s * 1.5, x + s, y + s, x + s, y);
      ctx.bezierCurveTo(x + s, y - s, x, y - s, x, y);
      ctx.closePath();
      ctx.fill();
    }

    window.heartConfetti = function () {
      const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 30,
        shapes: ['heart'],
        scalar: 2,
        colors: ['#ff4b5c', '#ff6f91', '#ff90b3'],
        drawShape: drawHeart
      };

      myConfetti({ ...defaults, particleCount: 25 });
      myConfetti({ ...defaults, particleCount: 15, scalar: 2.5 });
    };
  };
  document.head.appendChild(script);
})();
