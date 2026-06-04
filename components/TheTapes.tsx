"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { VideoCard } from "./ui/VideoCard";
import { DoodleUnderline } from "./ui/DoodleArrow";

const foodReviews = [
  {
    src: r("reviews-food", "boost.mp4"),
    title: "boost",
    caption: "★★★½  — could be better, but has its moments",
    rotate: -2,
    accent: "#f4a261",
  },
  {
    src: r("reviews-food", "coffee.mp4"),
    title: "coffee",
    caption: "★  — absolute tragedy",
    rotate: 2,
    accent: "#ffd166",
  },
];

const vlogs = [
  {
    src: r("vlogs", "tatkal01.mp4"),
    title: "the tatkal saga: the beginning",
    caption: "chaos, documented.",
    rotate: -3,
    accent: "#e63946",
  },
  {
    src: r("vlogs", "tatkal02.mp4"),
    title: "the tatkal saga: the conclusion",
    caption: "further chaos.",
    rotate: 2,
    accent: "#f4a261",
  },
  {
    src: r("vlogs", "kclawn.mp4"),
    title: "kc lawn chronicles",
    caption: "6th grader self was the cricket, yes, makes sense.",
    rotate: -1,
    accent: "#ffd166",
  },
  {
    src: r("vlogs", "trivial.mp4"),
    title: "പട്ടി?",
    caption: "who let the പട്ടികൾ out? the world may never know.",
    rotate: 1,
    accent: "#f4a261",
  },
];

export function TheTapes() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#12121f" }}>
      {/* shimmer line top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #f4a261, #e63946, #ffd166, #f4a261)",
          backgroundSize: "200%",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="font-hand text-xl tracking-[0.3em] mb-1"
            style={{ color: "#f4a261" }}
          >
            act iii
          </p>
          <h2
            className="font-hand font-bold leading-none"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "#fef9ef",
            }}
          >
            the tapes.
          </h2>
          <DoodleUnderline className="mt-1 w-56" style={{ color: "#ffd166", display: "block" }} />
          <p className="font-hand text-xl mt-3" style={{ color: "#fef9ef77" }}>
            recorded for posterity. mostly against better judgement.
          </p>
        </motion.div>

        {/* Food reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p
            className="font-hand text-xl mb-6 text-center"
            style={{ color: "#ffd16699" }}
          >
            — the review files —
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-10 justify-center mb-16">
          {foodReviews.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
            >
              <VideoCard
                src={v.src}
                title={v.title}
                caption={v.caption}
                rotate={v.rotate}
                accent={v.accent}
                dark
              />
            </motion.div>
          ))}
        </div>

        {/* Vlogs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p
            className="font-hand text-xl mb-6 text-center"
            style={{ color: "#ffd16699" }}
          >
            — the vlog archives —
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-10 justify-center">
          {vlogs.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
            >
              <VideoCard
                src={v.src}
                title={v.title}
                caption={v.caption}
                rotate={v.rotate}
                accent={v.accent}
                dark
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* shimmer line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #ffd166, #f4a261, #e63946, #ffd166)",
          backgroundSize: "200%",
        }}
      />
    </section>
  );
}
