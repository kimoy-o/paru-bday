"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { VideoCard } from "./ui/VideoCard";
import { PhotoCard } from "./ui/PhotoCard";
import { DoodleUnderline, DoodleArrowRight } from "./ui/DoodleArrow";

const videos = [
  {
    src: r("jokes", "fonts-could-talk.mp4"),
    title: "fonts: an impression",
    caption: "a one-woman show. no notes.",
    rotate: -3,
    accent: "#ffd166",
  },
  {
    src: r("jokes", "crab-walk.mp4"),
    title: "crab walk",
    caption: "documented. filed.",
    rotate: 2,
    accent: "#f4a261",
  },
  {
    src: r("jokes", "mickey.mp4"),
    title: "mickey",
    caption: "??",
    rotate: -1,
    accent: "#e63946",
  },
  {
    src: r("jokes", "phone-booth.mp4"),
    title: "phone booth",
    caption: "for future generations.",
    rotate: 3,
    accent: "#ffd166",
  },
  {
    src: r("jokes", "victoria-secret.mp4"),
    title: "victoria secret",
    caption: "classified.",
    rotate: -2,
    accent: "#f4a261",
  },
  {
    src: r("jokes", "breaking-mcd-kiosk-terminal-thing.mp4"),
    title: "mcd kiosk incident",
    caption: "documented destruction. allegedly.",
    rotate: 1,
    accent: "#e63946",
  },
  {
    src: r("jokes", "varc-face-writing-thing.mp4"),
    title: "varc face writing thing",
    caption: "varc. face. writing. yeah.",
    rotate: -3,
    accent: "#ffd166",
  },
  {
    src: r("jokes", "wave-high.mp4"),
    title: "wave high",
    caption: "peak cinema.",
    rotate: 2,
    accent: "#f4a261",
  },
  {
    src: r("jokes", "amit-sircar-valet.mp4"),
    title: "sir, car.",
    caption: "a tree. a name. a valet bit that lives rent-free.",
    rotate: -1,
    accent: "#e63946",
  },
];

const sculpturePhotos = [
  {
    src: r("photos", "sculpture thing", "20240624_193934.jpg"),
    caption: "the subject.",
    rotate: -4,
    accent: "#ffd166",
  },
  {
    src: r("photos", "sculpture thing", "20260225_162727.jpg"),
    caption: "the sculptor.",
    rotate: 3,
    accent: "#f4a261",
  },
  {
    src: r("photos", "sculpture thing", "WhatsApp Image 2026-06-03 at 14.07.35 (1).jpeg"),
    caption: "spot the difference.",
    rotate: -1,
    accent: "#e63946",
  },
];

export function JokeFiles() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(230,57,70,0.04)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-hand text-chili text-xl tracking-[0.3em] mb-1">
            act i
          </p>
          <h2
            className="font-hand font-bold text-ink leading-none"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
          >
            the paru files.
          </h2>
          <DoodleUnderline className="text-honey mt-1 w-72" />
          <p className="font-hand text-xl text-ink/50 mt-3">
            unclassified. unhinged. unambiguously her.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="flex flex-wrap gap-10 justify-center mb-20">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <VideoCard
                src={v.src}
                title={v.title}
                caption={v.caption}
                rotate={v.rotate}
                accent={v.accent}
              />
            </motion.div>
          ))}
        </div>

        {/* Sculpture mirroring section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h3 className="font-hand text-2xl md:text-3xl font-semibold text-ink mb-2">
            a study in expressions.
          </h3>
          <p className="font-hand text-ink/62 text-xl">
            paru vs. sculpture. the jury is still out.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-10 justify-center mb-16">
          {sculpturePhotos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12 }}
            >
              <PhotoCard
                src={p.src}
                caption={p.caption}
                rotate={p.rotate}
                accent={p.accent}
                imgHeight={200}
                width={230}
              />
            </motion.div>
          ))}
        </div>

        {/* Dog video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-3">
            <DoodleArrowRight className="text-mango/50 w-16" />
            <p className="font-hand text-xl text-ink/60">
              and, as a bonus:
            </p>
          </div>
          <VideoCard
            src={r("misc", "dog.mp4")}
            title="professional dog evaluator"
            caption="certified. no training required."
            rotate={1}
            accent="#ffd166"
          />
        </motion.div>
      </div>
    </section>
  );
}
