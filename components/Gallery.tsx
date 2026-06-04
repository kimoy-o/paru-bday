"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { PhotoCard } from "./ui/PhotoCard";
import { DoodleUnderline } from "./ui/DoodleArrow";

const riviera = [
  { file: "20260301_144350.jpg", caption: "riviera, act i", rotate: -3 },
  { file: "20260301_150728.jpg", caption: "riviera, act ii", rotate: 2 },
  { file: "20260301_153415.jpg", caption: "riviera, act iii", rotate: -1 },
  { file: "20260301_155417.jpg", caption: "riviera, act iv", rotate: 3 },
  { file: "VideoCapture_20250318-001437.jpg", caption: "riviera, captured", rotate: -2 },
  {
    file: "WhatsApp Image 2026-06-03 at 14.07.13 (1).jpeg",
    caption: "riviera, bonus",
    rotate: 1,
  },
];

const generalPhotos = [
  { file: "20260225_162508.jpg", caption: "niki laudaaaaa", rotate: -2 },
  { file: "IMG-20251127-WA0009.jpg", caption: "vogue called", rotate: 3 },
  { file: "IMG-20251127-WA0010.jpg", caption: "they called again", rotate: -1 },
  { file: "Snapchat-1156349251.jpg", caption: "forehead act i", rotate: 2 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.11.jpeg", caption: "MOOSCKELES", rotate: -3 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.11 (1).jpeg", caption: "farewell i", rotate: 1 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.13.jpeg", caption: "farewell ii", rotate: -2 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.14.jpeg", caption: "sting? tsk tsk tsk", rotate: 3 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.15.jpeg", caption: "sexy glasses", rotate: -1 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.20.jpeg", caption: "onam വട യക്ഷി", rotate: 2 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.21.jpeg", caption: "one wholesome picture", rotate: -3 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.26.jpeg", caption: "best friend amma biriyani", rotate: 1 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.34.jpeg", caption: "ചുക്കു കാപ്പി", rotate: -2 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.34 (1).jpeg", caption: "elephant? addressed.", rotate: 3 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.36.jpeg", caption: null, rotate: -1 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.36 (1).jpeg", caption: "absolute retards", rotate: 2 },
  { file: "WhatsApp Image 2026-06-03 at 14.07.37.jpeg", caption: "മിഖായേൽ jackson", rotate: -3 },
];

const accents = ["#ffd166", "#f4a261", "#e63946"];

export function Gallery() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,209,102,0.07)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-hand text-honey text-xl tracking-[0.3em] mb-1">
            act vi
          </p>
          <h2
            className="font-hand font-bold text-ink leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            the archives.
          </h2>
          <div className="flex justify-center mt-1">
            <DoodleUnderline className="text-honey w-64" />
          </div>
          <p className="font-hand text-xl text-ink/50 mt-3">
            three years. in no particular order.
          </p>
        </motion.div>

        {/* Riviera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <p className="font-hand text-2xl text-ink/60 mb-6 flex items-center gap-2">
            riviera.
            <span className="text-lg text-ink/55">chaos with structure.</span>
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-8 justify-center mb-16">
          {riviera.map((p, i) => (
            <motion.div
              key={p.file}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }}
            >
              <PhotoCard
                src={r("photos", "riviera", p.file)}
                caption={p.caption ?? undefined}
                rotate={p.rotate}
                accent={accents[i % 3]}
                imgHeight={170}
                width={200}
              />
            </motion.div>
          ))}
        </div>

        {/* The GIF — special treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <p className="font-hand text-xl text-ink/50 mb-6">
            the rarest artifact. an animation.
          </p>
          <div
            className="relative"
            style={{ rotate: "-1deg", display: "inline-block" }}
          >
            <div
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 z-10 rounded-sm"
              style={{ background: "#ffd166", opacity: 0.7 }}
            />
            <div
              className="bg-white"
              style={{
                padding: "10px 10px 44px 10px",
                boxShadow:
                  "2px 4px 0 rgba(28,28,46,0.08), 4px 10px 22px rgba(28,28,46,0.14)",
                maxWidth: 320,
              }}
            >
              <img
                src={r("photos", "20260316_230948-ANIMATION.gif")}
                alt="the gif"
                className="w-full block"
                style={{ maxHeight: 280, objectFit: "contain" }}
              />
              <p className="font-hand text-[15px] text-ink/60 mt-2 text-center">
                certified classic
              </p>
            </div>
          </div>
        </motion.div>

        {/* General photo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="font-hand text-2xl text-ink/60 mb-6">everything else.</p>
        </motion.div>

        <div className="flex flex-wrap gap-7 justify-center">
          {generalPhotos.map((p, i) => (
            <motion.div
              key={p.file}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: (i % 6) * 0.07 }}
            >
              <PhotoCard
                src={r("photos", p.file)}
                caption={p.caption ?? undefined}
                rotate={p.rotate}
                accent={accents[i % 3]}
                imgHeight={155}
                width={185}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
