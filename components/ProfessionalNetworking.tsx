"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { PhotoCard } from "./ui/PhotoCard";
import { DoodleUnderline } from "./ui/DoodleArrow";

const screenshots = [
  "WhatsApp Image 2026-06-03 at 18.07.47.jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.47 (1).jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.48.jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.48 (1).jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.48 (2).jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.49.jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.49 (1).jpeg",
  "WhatsApp Image 2026-06-03 at 18.07.50.jpeg",
];

const rotations = [-2, 3, -1, 2, -3, 1, -2, 3];
const accents = [
  "#ffd166", "#f4a261", "#e63946", "#ffd166",
  "#f4a261", "#e63946", "#ffd166", "#f4a261",
];
const captions = [
  "a promising lead",
  "under consideration",
  "thorough research",
  "due diligence",
  "expanding the network",
  "exploratory meeting",
  "follow-up pending",
  "archived",
];

// Per-photo annotations. null = no annotation.
const annotations: ({
  text: string;
  side: "left" | "right";
  topPct: number; // % down the photo
  color: string;
  rot: number;
} | null)[] = [
  { text: "seriously?",      side: "right", topPct: 18, color: "#e63946", rot: -9  },
  { text: "ew.",             side: "left",  topPct: 30, color: "#e63946", rot:  7  },
  { text: "???",             side: "right", topPct: 22, color: "#f4a261", rot: -6  },
  null,
  { text: "absolutely not.", side: "left",  topPct: 25, color: "#e63946", rot:  8  },
  { text: "next.",           side: "right", topPct: 35, color: "#f4a261", rot: -10 },
  { text: "bro...",          side: "left",  topPct: 20, color: "#f4a261", rot:  6  },
  { text: "she did NOT",     side: "right", topPct: 28, color: "#e63946", rot: -8  },
];

function ArrowToPhoto({ side, color }: { side: "left" | "right"; color: string }) {
  // Arrow always points TOWARD the photo (away from the annotation text)
  if (side === "right") {
    // annotation is on the right → arrow points left into the photo
    return (
      <svg width="38" height="22" viewBox="0 0 38 22" fill="none">
        <path
          d="M35,8 C24,8 12,15 6,18"
          stroke={color} strokeWidth="2" strokeDasharray="3 2.5" strokeLinecap="round"
        />
        <path
          d="M3,13 L6,19 L11,15"
          stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    );
  }
  // annotation is on the left → arrow points right into the photo
  return (
    <svg width="38" height="22" viewBox="0 0 38 22" fill="none">
      <path
        d="M3,8 C14,8 26,15 32,18"
        stroke={color} strokeWidth="2" strokeDasharray="3 2.5" strokeLinecap="round"
      />
      <path
        d="M27,13 L32,19 L35,13"
        stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProfessionalNetworking() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(42,157,143,0.05)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="font-hand text-sage text-xl tracking-[0.3em] mb-1">
            act v
          </p>
          <h2
            className="font-hand font-bold text-ink leading-none"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            professional networking.
          </h2>
          <div className="flex justify-center mt-1">
            <DoodleUnderline className="text-sage w-80" />
          </div>
          <p className="font-hand text-xl text-ink/50 mt-4 max-w-md mx-auto leading-snug">
            she was simply expanding her professional network.
            <br />
            <span className="text-lg text-ink/55">
              (via arike. which is a dating app)
            </span>
          </p>
        </motion.div>

        {/* fake linkedin-style header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <div
            className="border border-ink/10 rounded px-6 py-3 text-center"
            style={{ background: "white" }}
          >
            <p className="font-hand text-lg text-ink/60 tracking-widest uppercase">
              field research — 2025–2026
            </p>
            <p className="font-hand text-sm text-ink/62">
              8 profiles reviewed · rigorous methodology
            </p>
          </div>
        </motion.div>

        {/* Screenshots grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {screenshots.map((file, i) => {
            const ann = annotations[i];
            return (
              <motion.div
                key={file}
                className="relative"
                style={{ overflow: "visible" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.07 }}
              >
                <PhotoCard
                  src={r("photos", "arike", file)}
                  caption={captions[i]}
                  rotate={rotations[i]}
                  accent={accents[i]}
                  imgHeight={260}
                  width={175}
                />

                {ann && (
                  <div
                    className="pointer-events-none"
                    style={{
                      position: "absolute",
                      top: `${ann.topPct}%`,
                      ...(ann.side === "right"
                        ? { left: "calc(100% + 6px)" }
                        : { right: "calc(100% + 6px)" }),
                      transform: `rotate(${ann.rot}deg)`,
                      zIndex: 20,
                      whiteSpace: "nowrap",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: ann.side === "right" ? "flex-start" : "flex-end",
                      gap: 2,
                    }}
                  >
                    <span
                      className="font-hand font-semibold"
                      style={{ fontSize: 19, color: ann.color, lineHeight: 1 }}
                    >
                      {ann.text}
                    </span>
                    <ArrowToPhoto side={ann.side} color={ann.color} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center font-hand text-ink/50 text-lg mt-12"
        >
          the app is still installed, we think.
        </motion.p>
      </div>
    </section>
  );
}
