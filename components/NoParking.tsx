"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { PhotoCard } from "./ui/PhotoCard";
import { DoodleUnderline } from "./ui/DoodleArrow";

const exhibits = [
  {
    file: "01.jpeg",
    caption: "Subject engages with regulatory signage. Year unknown.",
    rotate: -3,
  },
  {
    file: "02.jpeg",
    caption: "A studied nonchalance. The sign, unmoved.",
    rotate: 2,
  },
  {
    file: "03.jpeg",
    caption: "Return visit. The sign remains.",
    rotate: -1,
  },
  {
    file: "04.jpeg",
    caption: "She does not park. She poses.",
    rotate: 3,
  },
  {
    file: "05.jpeg",
    caption: "The fifth encounter. An ongoing dialogue.",
    rotate: -2,
  },
];

const accents = ["#ffd166", "#f4a261", "#e63946", "#ffd166", "#f4a261"];

export function NoParking() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 to-transparent pointer-events-none" style={{ zIndex: -1 }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title — very formal museum energy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <p className="font-hand text-ink/75 tracking-[0.4em] text-lg mb-2 uppercase">
            a retrospective
          </p>
          <h2
            className="font-hand font-bold text-ink leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            no parking.
          </h2>
          <div className="flex justify-center mt-1">
            <DoodleUnderline className="text-chili w-72" />
          </div>
          <p className="font-hand text-ink/80 text-xl mt-4 max-w-lg mx-auto leading-snug">
            a five-part documentation of paru&apos;s continued, unresolved
            relationship with a no parking sign.
          </p>
          <p className="font-hand text-ink/70 text-lg mt-2">
            curator&apos;s note: the sign did not consent to any of this.
          </p>
        </motion.div>

        {/* wavy divider */}
        <svg
          className="w-full opacity-15 my-8"
          viewBox="0 0 800 24"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,12 C80,4 160,20 240,12 C320,4 400,20 480,12 C560,4 640,20 720,12 C760,8 780,14 800,12"
            stroke="#1c1c2e"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        </svg>

        {/* Gallery grid */}
        <div className="flex flex-wrap gap-10 justify-center mt-8">
          {exhibits.map((exhibit, i) => (
            <motion.div
              key={exhibit.file}
              initial={{ opacity: 0, y: 50, rotate: exhibit.rotate - 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: exhibit.rotate }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <PhotoCard
                src={r("photos", "no-parking", exhibit.file)}
                caption={exhibit.caption}
                rotate={0}
                accent={accents[i]}
                imgHeight={210}
                width={210}
              />
              <p className="font-hand text-sm text-ink/75 tracking-widest mt-1">
                EXHIBIT 1.{i + 1}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center font-hand text-ink/70 text-lg mt-12"
        >
          collection ongoing. more signs may be encountered.
        </motion.p>
      </div>
    </section>
  );
}
