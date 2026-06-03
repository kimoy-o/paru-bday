"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// Same palette as Hero
const COLORS = [
  "rgba(244,162,97,0.80)",  // mango
  "rgba(230,57,70,0.55)",   // chili
  "rgba(255,209,102,0.75)", // honey
  "rgba(244,162,97,0.55)",  // mango soft
  "rgba(255,209,102,0.55)", // honey soft
  "rgba(230,57,70,0.35)",   // chili soft
];

const CHARS = ["✦", "★", "✦", "✧", "✦", "★"];
const SIZES = [20, 24, 28, 32, 36, 42, 48, 54];

// Animation types — "none" is static
type AnimType = "none" | "spin" | "float" | "pulse" | "wobble";
const ANIM_TYPES: AnimType[] = ["none", "none", "spin", "float", "pulse", "wobble"];

interface Star {
  char: string;
  top: number;
  left: string; // percent string
  rotation: number;
  size: number;
  color: string;
  anim: AnimType;
  animDuration: number;
  animDelay: number;
}

const STARS_PER_SECTION = 12;

// Skip Hero (0) — it has its own. Include all others.
const SKIP_STARS = new Set([0]);

export function StarLayer() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const sections = Array.from(
      main.querySelectorAll<HTMLElement>(":scope > section")
    );

    const all: Star[] = [];

    sections.forEach((el, si) => {
      if (SKIP_STARS.has(si)) return;

      const sTop = el.offsetTop;
      const sH = el.offsetHeight;

      for (let j = 0; j < STARS_PER_SECTION; j++) {
        const seed = si * 200 + j * 13 + 77;
        all.push({
          char: CHARS[Math.floor(sr(seed) * CHARS.length)],
          top: sTop + sH * (0.04 + sr(seed + 1) * 0.92),
          left: `${3 + sr(seed + 2) * 94}%`,
          rotation: (sr(seed + 3) - 0.5) * 50,
          size: SIZES[Math.floor(sr(seed + 4) * SIZES.length)],
          color: COLORS[Math.floor(sr(seed + 5) * COLORS.length)],
          anim: ANIM_TYPES[Math.floor(sr(seed + 6) * ANIM_TYPES.length)],
          animDuration: 3 + sr(seed + 7) * 4,   // 3–7s
          animDelay: sr(seed + 8) * 2,           // 0–2s
        });
      }
    });

    setStars(all);
  }, []);

  if (!stars.length) return null;

  return (
    <div className="pointer-events-none" aria-hidden="true">
      {stars.map((s, i) => {
        const base: React.CSSProperties = {
          position: "absolute",
          top: s.top,
          left: s.left,
          fontSize: s.size,
          color: s.color,
          display: "inline-block",
          userSelect: "none",
          zIndex: 1,
          lineHeight: 1,
        };

        if (s.anim === "none") {
          return (
            <span
              key={i}
              style={{ ...base, transform: `rotate(${s.rotation}deg)` }}
            >
              {s.char}
            </span>
          );
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let animateProps: any = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let transitionProps: any = {
          duration: s.animDuration,
          delay: s.animDelay,
          repeat: Infinity,
          ease: "easeInOut",
        };

        if (s.anim === "spin") {
          animateProps = {
            rotate: [s.rotation, s.rotation + 15, s.rotation - 8, s.rotation],
            scale: [1, 1.15, 1],
          };
        } else if (s.anim === "float") {
          animateProps = {
            y: [0, -10, 0],
            rotate: [s.rotation, s.rotation + 5, s.rotation],
          };
        } else if (s.anim === "pulse") {
          animateProps = { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] };
          transitionProps.duration = s.animDuration * 0.7;
        } else if (s.anim === "wobble") {
          animateProps = {
            rotate: [s.rotation - 8, s.rotation + 10, s.rotation - 5, s.rotation + 3, s.rotation - 8],
            x: [-2, 3, -1, 2, -2],
          };
          transitionProps.duration = s.animDuration * 1.2;
        }

        return (
          <motion.span
            key={i}
            style={{ ...base, transform: `rotate(${s.rotation}deg)` }}
            animate={animateProps}
            transition={transitionProps}
          >
            {s.char}
          </motion.span>
        );
      })}
    </div>
  );
}
