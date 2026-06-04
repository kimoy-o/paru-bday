"use client";
import { useEffect, useState } from "react";

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function fileHash(filename: string, index: number) {
  return (
    filename.split("").reduce((a, c) => a + c.charCodeAt(0), 0) + index * 31
  );
}

const SKIP = new Set([4, 8]); // TheTapes (dark), Fin

const TAPE_COLORS = [
  "rgba(200,228,252,0.78)", // soft blue
  "rgba(255,188,160,0.72)", // peach
];

// Hand-placed hero slots — wide vertical spread so tall portrait stickers don't overlap
const HERO_SLOTS = [
  { side: "left"  as const, topFrac: 0.05, edgeX: 14, rot: -14, wMult: 1.10 },
  { side: "right" as const, topFrac: 0.10, edgeX: 10, rot:  11, wMult: 0.90 },
  { side: "left"  as const, topFrac: 0.52, edgeX:  9, rot:   8, wMult: 1.00 },
  { side: "right" as const, topFrac: 0.50, edgeX: 12, rot: -12, wMult: 1.05 },
  { side: "left"  as const, topFrac: 0.82, edgeX: 11, rot:  -8, wMult: 0.95 },
  { side: "right" as const, topFrac: 0.80, edgeX: 13, rot:  13, wMult: 1.10 },
];

// Sub-slot patterns for remaining sections — 4-slot and 3-slot, alternating
const SUBSLOT_PATTERNS = [
  [
    { side: "left"  as const, topFrac: 0.10, eMin: 10, eMax: 26 },
    { side: "right" as const, topFrac: 0.28, eMin:  8, eMax: 22 },
    { side: "left"  as const, topFrac: 0.62, eMin: 12, eMax: 24 },
    { side: "right" as const, topFrac: 0.80, eMin: 10, eMax: 20 },
  ],
  [
    { side: "right" as const, topFrac: 0.15, eMin: 10, eMax: 26 },
    { side: "left"  as const, topFrac: 0.50, eMin:  8, eMax: 22 },
    { side: "right" as const, topFrac: 0.78, eMin: 12, eMax: 24 },
  ],
];

interface PlacedSticker {
  file: string;
  top: number;
  side: "left" | "right";
  edgeX: number;
  rotation: number;
  width: number;
  tapeColor: string;
  tapeRot: number;
}

export function StickerLayer() {
  const [stickers, setStickers] = useState<PlacedSticker[]>([]);

  useEffect(() => {
    fetch("/api/stickers")
      .then((r) => r.json())
      .then((files: string[]) => {
        if (!files.length) return;

        const main = document.querySelector("main");
        if (!main) return;
        const sections = Array.from(
          main.querySelectorAll<HTMLElement>(":scope > section")
        );

        const placed: PlacedSticker[] = [];
        let fi = 0;

        sections.forEach((el, si) => {
          const sTop = el.offsetTop;
          const sH = el.offsetHeight;

          if (si === 0) {
            // Hero: hand-placed, larger
            HERO_SLOTS.forEach((slot, j) => {
              const file = files[fi % files.length];
              fi++;
              const seed = fileHash(file, si * 100 + j);
              placed.push({
                file,
                top: sTop + sH * slot.topFrac,
                side: slot.side,
                edgeX: slot.edgeX,
                rotation: slot.rot,
                width: Math.round((88 + sr(seed) * 28) * slot.wMult),
                tapeColor: TAPE_COLORS[Math.floor(sr(seed + 4) * TAPE_COLORS.length)],
                tapeRot: (sr(seed + 5) - 0.5) * 8,
              });
            });
          } else if (!SKIP.has(si)) {
            // Other sections: smaller, 3–4 stickers each
            const pattern = SUBSLOT_PATTERNS[si % SUBSLOT_PATTERNS.length];
            pattern.forEach((slot, j) => {
              const file = files[fi % files.length];
              fi++;
              const seed = fileHash(file, si * 100 + j);
              placed.push({
                file,
                top: sTop + sH * slot.topFrac,
                side: slot.side,
                edgeX: slot.eMin + sr(seed + 1) * (slot.eMax - slot.eMin),
                rotation: (sr(seed + 2) - 0.5) * 28,
                width: Math.round(52 + sr(seed + 3) * 24), // 52–76 px
                tapeColor: TAPE_COLORS[Math.floor(sr(seed + 4) * TAPE_COLORS.length)],
                tapeRot: (sr(seed + 5) - 0.5) * 8,
              });
            });
          }
        });

        setStickers(placed);
      })
      .catch(() => {});
  }, []);

  if (!stickers.length) return null;

  return (
    <div className="hidden lg:block pointer-events-none" aria-hidden="true">
      {stickers.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: s.top,
            [s.side]: s.edgeX,
            zIndex: 40,
            transform: `scale(${s.file === "income-tax.jpeg" ? 0.6 : 0.75}) rotate(${s.rotation}deg)`,
            transformOrigin: `top ${s.side}`,
          }}
        >
          {/* tape */}
          <div
            style={{
              position: "absolute",
              top: -9,
              left: "50%",
              transform: `translateX(-50%) rotate(${s.tapeRot}deg)`,
              width: 46,
              height: 16,
              background: s.tapeColor,
              borderRadius: 2,
              zIndex: 1,
            }}
          />
          <img
            src={`/resources/photos/stickers/${encodeURIComponent(s.file)}`}
            alt=""
            draggable={false}
            style={{ display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}
