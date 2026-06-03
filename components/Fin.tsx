"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DoodleUnderline, DoodleArrowDown } from "./ui/DoodleArrow";

export function Fin() {
  const [spideyVisible, setSpideyVisible] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(244,162,97,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center z-10">
        {/* fin. */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2
            className="font-hand font-bold text-ink leading-none mb-2"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
          >
            fin.
          </h2>
          <div className="flex justify-center">
            <DoodleUnderline className="text-mango w-48" />
          </div>
        </motion.div>

        {/* Message placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative mb-12"
        >
          {/* tape */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 rounded-sm z-10"
            style={{ background: "#ffd166", opacity: 0.7, rotate: "-1deg" }}
          />

          <div
            className="bg-white p-8 md:p-10 text-left"
            style={{
              boxShadow:
                "2px 4px 0 rgba(28,28,46,0.07), 4px 10px 24px rgba(28,28,46,0.11)",
              rotate: "0.5deg",
            }}
          >
            {/* lined paper effect */}
            <div
              className="relative"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgba(28,28,46,0.06) 31px, rgba(28,28,46,0.06) 32px)",
                backgroundPositionY: "8px",
                minHeight: 220,
                paddingTop: 8,
              }}
            >
              <p className="font-hand text-2xl text-ink/70 leading-8">
                {/* User will fill this in — placeholder below */}
                <span className="text-ink/50 italic text-xl">
                  happiest bday to you my dear paru chechiiiii, <br/>
                  some wise person once told me the best place one could be in is in that person's prayers, what im saying is even though i dont believe as much, you will always be in my thoughts and prayers, i really wish you get everything and more that your heart wishes for, you truly deserve it. <br/>
                  happy birthday again, love you gang.
                </span>
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <p className="font-hand text-lg text-ink/60">— always, bala 🫂</p>
            </div>
          </div>
        </motion.div>

        {/* Easter egg prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <DoodleArrowDown className="text-ink/60 w-8 h-12" />
          <motion.button
            onClick={() => setSpideyVisible(true)}
            className="font-hand text-sm text-ink/62 hover:text-ink/50 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            🕷️ there&apos;s one more thing
          </motion.button>
        </motion.div>

        {/* Spider-Man easter egg */}
        <AnimatePresence>
          {spideyVisible && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-10 text-center"
            >
              <div
                className="inline-block border-2 border-dashed border-ink/15 rounded p-6"
                style={{ background: "rgba(230,57,70,0.03)" }}
              >
                <p className="font-hand text-6xl mb-4">🕷️</p>
                <p className="font-hand text-2xl text-ink/70 font-semibold mb-2">
                  &quot;with great intelligence comes great responsibility.&quot;
                </p>
                <p className="font-hand text-base text-ink/60">
                  — peter parker, probably. happy birthday paru.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final small stamp */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <p className="font-hand text-sm text-ink/60 tracking-widest">
            made with chaos. 2026.
          </p>
        </motion.div>
      </div>

      {/* Spider-Man wall-crawl Easter egg */}
      <AnimatePresence>
        {spideyVisible && (
          <motion.div
            className="fixed bottom-20 left-0 pointer-events-none z-50"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: "110vw", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 5, ease: "linear", delay: 0.5 }}
          >
            <span style={{ fontSize: "2.5rem" }}>🕷️</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
