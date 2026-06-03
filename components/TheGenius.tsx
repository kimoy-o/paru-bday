"use client";
import { motion } from "framer-motion";
import { r } from "@/lib/media";
import { VideoCard } from "./ui/VideoCard";
import { PhotoCard } from "./ui/PhotoCard";
import { DoodleArrowCurved, DoodleUnderline } from "./ui/DoodleArrow";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ClassifiedBit() {
  return (
    <div className="classified-wrap rounded-sm">
      <span className="font-hand text-ink/80 text-lg">
        she forgot
      </span>
      <div className="cover rounded-sm">
        <span
          className="font-hand font-bold tracking-[0.3em] text-sm"
          style={{ color: "#e63946" }}
        >
          CLASSIFIED
        </span>
      </div>
    </div>
  );
}

export function TheGenius() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* section bg accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(244,162,97,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-start gap-4">
            <div>
              <p className="font-hand text-mango text-xl tracking-[0.3em] mb-1">
                act i
              </p>
              <h2 className="font-hand font-bold text-ink leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
                the genius.
              </h2>
              <DoodleUnderline className="text-mango mt-1" style={{ maxWidth: 360, display: "block" }} />
              <p className="font-hand text-xl text-ink/50 mt-3">
                isro certified. academically decorated. fitness function redacted.
              </p>
            </div>
            <span className="text-5xl mt-2 select-none flex-shrink-0">🚀</span>
          </div>
        </motion.div>

        {/* Astronaut + rocket photos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap gap-8 justify-center mb-16"
        >
          <PhotoCard
            src={r("photos", "astronaut", "Snapchat-1655019652.jpg")}
            caption="nasa called. isro called louder."
            rotate={-3}
            accent="#f4a261"
            imgHeight={220}
            width={240}
          />
          <PhotoCard
            src={r("photos", "astronaut", "WhatsApp Image 2026-06-03 at 14.07.35.jpeg")}
            caption="the look of someone who interned at isro"
            rotate={2}
            accent="#ffd166"
            imgHeight={220}
            width={240}
          />
          <PhotoCard
            src={r("academic reviews", "rocket.jpeg")}
            caption="rocket science. literally."
            rotate={-1}
            accent="#e63946"
            imgHeight={220}
            width={240}
          />
        </motion.div>

        {/* AR/VR review videos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <p className="font-hand text-ink/50 text-xl mb-6 text-center">
            the review industrial complex (ar/vr edition)
          </p>
          <div className="flex flex-wrap gap-10 justify-center">
            <VideoCard
              src={r("academic reviews", "arvr01.mp4")}
              title="ar/vr review, pt. i"
              caption="a review. then another review."
              rotate={-2}
              accent="#f4a261"
            />
            <VideoCard
              src={r("academic reviews", "arvr02.mp4")}
              title="ar/vr review, pt. ii"
              caption="and then one more review."
              rotate={2}
              accent="#ffd166"
            />
          </div>
        </motion.div>

        {/* Last minute photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <PhotoCard
              src={r("academic reviews", "nn review last minute.jpeg")}
              caption="nn review, the night before. serene."
              rotate={1}
              accent="#ffd166"
              imgHeight={200}
              width={280}
            />
            <div className="absolute -left-16 top-8 text-mango" style={{ transform: "scaleX(1)" }}>
              <DoodleArrowCurved className="w-14 h-16" />
            </div>
            <div className="absolute -left-32 top-4 font-hand text-lg text-ink/60 -rotate-6 w-24 text-center leading-tight">
              calm before the storm
            </div>
          </div>
        </motion.div>

        {/* THE FITNESS FUNCTION CALLOUT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex justify-center"
        >
          <div
            className="border-2 border-dashed border-ink/20 rounded-sm p-8 max-w-lg text-center relative"
            style={{ background: "rgba(244,162,97,0.06)" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream px-3">
              <span className="font-hand text-sm text-ink/60 tracking-widest">
                EXHIBIT A
              </span>
            </div>
            <p className="font-hand text-2xl font-semibold text-ink mb-4 leading-snug">
              GA-optimized breast cancer detection model.
            </p>
            <p className="font-hand text-xl text-ink/60 mb-3">
              accuracy: impressive.
            </p>
            <p className="font-hand text-xl text-ink/60 mb-1">
              fitness function used:{" "}
            </p>
            <ClassifiedBit />
            <p className="font-hand text-sm text-ink/55 mt-4">
              (hover to declassify)
            </p>
            <p className="font-hand text-sm text-ink/50 mt-2">
              — even max verstappen would&apos;ve written it down
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
