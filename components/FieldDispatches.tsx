"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { VideoCard } from "./ui/VideoCard";
import { PhotoCard } from "./ui/PhotoCard";
import { DoodleUnderline, DoodleArrowRight } from "./ui/DoodleArrow";

const kochiPhotos = [
  {
    src: r("kochi", "20250726_031303.jpg"),
    caption: "kochi dispatch",
    rotate: -3,
    accent: "#f4a261",
  },
  {
    src: r("kochi", "WhatsApp Image 2026-06-03 at 14.07.27.jpeg"),
    caption: "on location",
    rotate: 2,
    accent: "#ffd166",
  },
  {
    src: r("kochi", "WhatsApp Image 2026-06-03 at 14.07.33.jpeg"),
    caption: "kochi chronicles",
    rotate: -1,
    accent: "#e63946",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function FieldDispatches() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(17,138,178,0.05)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-hand text-sky text-xl tracking-[0.3em] mb-1">
            act iv
          </p>
          <h2
            className="font-hand font-bold text-ink leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            field dispatches.
          </h2>
          <DoodleUnderline className="text-sky mt-1 w-72" />
          <p className="font-hand text-xl text-ink/50 mt-3">
            on location. with full commitment.
          </p>
        </motion.div>

        {/* KOCHI */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-hand text-3xl font-bold text-ink">kochi.</span>
            <DoodleArrowRight className="text-mango/50 w-16" />
            <span className="font-hand text-xl text-ink/62">
              pre &amp; post review chronicles
            </span>
          </div>
        </motion.div>

        {/* Pre / Post videos */}
        <div className="flex flex-wrap gap-10 justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <VideoCard
              src={r("kochi", "pre-review.mp4")}
              title="pre-review"
              caption="full of hope. full of energy."
              rotate={-3}
              accent="#f4a261"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <VideoCard
              src={r("kochi", "post-review.mp4")}
              title="post-review"
              caption="different energy. same person. barely."
              rotate={2}
              accent="#e63946"
            />
          </motion.div>
        </div>

        {/* Kochi photos */}
        <div className="flex flex-wrap gap-8 justify-center mb-20">
          {kochiPhotos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
            >
              <PhotoCard
                src={p.src}
                caption={p.caption}
                rotate={p.rotate}
                accent={p.accent}
                imgHeight={180}
                width={210}
              />
            </motion.div>
          ))}
        </div>

        {/* BANGALORE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-hand text-3xl font-bold text-ink">bangalore.</span>
            <DoodleArrowRight className="text-mango/50 w-16" />
            <span className="font-hand text-xl text-ink/62">
              bandana review on location
            </span>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <VideoCard
              src={r("banglore", "bandana.mp4")}
              title="bandana review"
              caption="from bangalore. deeply important."
              rotate={-1}
              accent="#ffd166"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
