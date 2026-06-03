"use client";
import { motion } from "framer-motion";
import { DoodleArrowDown } from "./ui/DoodleArrow";

const letters = ["P", "A", "R", "U"];
const rotations = [-3, 4, -2, 3];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* scattered decorative stars */}
      <motion.span
        className="absolute top-16 left-[9%] text-5xl text-mango select-none"
        animate={{ rotate: [0, 12, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦
      </motion.span>
      <span className="absolute top-24 right-[10%] text-3xl text-chili/50 rotate-12 select-none">
        ★
      </span>
      <span className="absolute bottom-48 left-[7%] text-4xl text-honey rotate-6 select-none">
        ✦
      </span>
      <span className="absolute top-[38%] right-[7%] text-2xl text-mango/60 -rotate-6 select-none">
        ✦
      </span>
      <span className="absolute bottom-36 right-[22%] text-3xl text-chili/40 rotate-3 select-none">
        ★
      </span>
      <span className="absolute top-[18%] left-[38%] text-xl text-ink/15 rotate-45 select-none">
        ✦
      </span>
      <span className="absolute bottom-[22%] left-[30%] text-2xl text-honey/70 -rotate-12 select-none">
        ✦
      </span>

      {/* doodle squiggle top */}
      <svg
        className="absolute top-0 left-0 right-0 w-full opacity-20"
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C120,5 240,35 360,20 C480,5 600,35 720,20 C840,5 960,35 1080,20 C1200,5 1320,35 1440,20"
          stroke="#1c1c2e"
          strokeWidth="2"
          strokeDasharray="6 5"
          fill="none"
        />
      </svg>

      <div className="text-center z-10">
        <motion.p
          className="font-hand text-3xl text-ink/62 tracking-[0.22em] mb-3"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          hey paru, it&apos;s your day !
        </motion.p>

        <motion.p
          className="font-hand text-3xl text-mango tracking-[0.45em] mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          h a p p y &nbsp; b i r t h d a y
        </motion.p>

        {/* Big PARU */}
        <div className="flex items-end justify-center gap-0.5 md:gap-1 mt-1 mb-6">
          {letters.map((letter, i) => (
            <motion.span
              key={letter}
              className="font-hand font-bold leading-[0.82] select-none text-ink"
              style={{
                display: "inline-block",
                fontSize: "clamp(5rem, 22vw, 14rem)",
              }}
              initial={{ opacity: 0, y: 70, rotate: -18 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: rotations[i],
              }}
              transition={{
                delay: 0.45 + i * 0.12,
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="font-hand text-2xl text-ink/60 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          3 years of chaos, fully documented.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-1 text-mango/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="font-hand text-lg text-ink/55 tracking-wider">
            scroll to begin ↓
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <DoodleArrowDown className="text-mango/50 w-9 h-14" />
          </motion.div>
        </motion.div>
      </div>

      {/* doodle squiggle bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full opacity-20"
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C120,35 240,5 360,20 C480,35 600,5 720,20 C840,35 960,5 1080,20 C1200,35 1320,5 1440,20"
          stroke="#1c1c2e"
          strokeWidth="2"
          strokeDasharray="6 5"
          fill="none"
        />
      </svg>
    </section>
  );
}
