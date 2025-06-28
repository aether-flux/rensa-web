"use client";

import { useEffect, useRef } from "react";

export const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const lerp = (a, b, t) => a + (b-a) * t;

    let mouse = { x: 0, y: 0 };
    let ringC = { x: 0, y: 0 };

    // Mouse follow
    const mouseMoveChecker = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMoveChecker);

    function cursorAnim () {
      ringC = { x: lerp(ringC.x, mouse.x, 0.15), y: lerp(ringC.y, mouse.y, 0.15) };

      dot.style.top = `${mouse.y}px`;
      dot.style.left = `${mouse.x}px`;
      ring.style.top = `${ringC.y}px`;
      ring.style.left = `${ringC.x}px`;

      requestAnimationFrame(cursorAnim);
    }

    cursorAnim();

    // Trail dots
    function createTrailDot (x, y) {
      const td = document.createElement("div");
      td.className = "trail-dot";
      td.style.left = `${x}px`;
      td.style.top = `${y}px`;
      document.body.appendChild(td);

      setTimeout(() => td.remove(), 500);
    }

    let lastTime = 0;
    function dropParticles (time) {
      if (time - lastTime > 20) {
        createTrailDot(ringC.x, ringC.y);
        lastTime = time;
      }

      requestAnimationFrame(dropParticles);
    }

    dropParticles();

    // Hover state of cursor
    const hoverables = document.querySelectorAll("#hoverable");

    hoverables.forEach((h) => {
      h.addEventListener("mouseenter", () => {
        dot.classList.add("cursor-change");
        ring.style.opacity = 0;
      });
      h.addEventListener("mouseleave", () => {
        dot.classList.remove("cursor-change");
        ring.style.opacity = 1;
      })
    });

    return () => {
      window.removeEventListener("mousemove", mouseMoveChecker);
    }
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  )
}
