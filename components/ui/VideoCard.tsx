"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function fmt(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.5,3 L4.5,17 L17,10 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="currentColor"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6,3 L6,17"   stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M14,3 L14,17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ProgressBar({
  progress,
  onSeek,
  color,
}: {
  progress: number;
  onSeek: (frac: number) => void;
  color: string;
}) {
  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onSeek(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
  };

  const W = 200;
  const dot = 4 + Math.max(0, Math.min(W - 8, (W - 8) * progress));

  return (
    <svg
      viewBox={`0 0 ${W} 14`}
      className="flex-1 cursor-pointer"
      style={{ height: 14, minWidth: 60 }}
      onClick={handleClick}
    >
      {/* dashed background track */}
      <path
        d={`M4,7 L${W - 4},7`}
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4 3"
        strokeLinecap="round"
        opacity="0.28"
      />
      {/* filled portion */}
      {progress > 0 && (
        <path
          d={`M4,7 L${dot},7`}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}
      {/* playhead dot */}
      <circle cx={dot} cy={7} r={4.5} fill={color} />
    </svg>
  );
}

interface VideoCardProps {
  src: string;
  title: string;
  caption?: string;
  rotate?: number;
  accent?: string;
  dark?: boolean;
}

export function VideoCard({
  src,
  title,
  caption,
  rotate = 0,
  accent = "#ffd166",
  dark = false,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);

  const [playing,     setPlaying]     = useState(false);
  const [buffering,   setBuffering]   = useState(false);
  const [progress,    setProgress]    = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);

  // Preload when approaching viewport
  useEffect(() => {
    const wrap  = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && video.readyState === 0) {
          video.preload = "auto";
          video.load();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px 100% 0px" }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  // Video events
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay        = () => { setPlaying(true);  setBuffering(false); };
    const onPause       = () => setPlaying(false);
    const onEnded       = () => { setPlaying(false); setBuffering(false); setProgress(0); setCurrentTime(0); };
    const onTimeUpdate  = () => { if (v.duration) { setCurrentTime(v.currentTime); setProgress(v.currentTime / v.duration); } };
    const onLoaded      = () => setDuration(v.duration);
    const onWaiting     = () => setBuffering(true);
    const onCanPlay     = () => setBuffering(false);
    v.addEventListener("play",          onPlay);
    v.addEventListener("pause",         onPause);
    v.addEventListener("ended",         onEnded);
    v.addEventListener("timeupdate",    onTimeUpdate);
    v.addEventListener("loadedmetadata",onLoaded);
    v.addEventListener("waiting",       onWaiting);
    v.addEventListener("canplay",       onCanPlay);
    return () => {
      v.removeEventListener("play",          onPlay);
      v.removeEventListener("pause",         onPause);
      v.removeEventListener("ended",         onEnded);
      v.removeEventListener("timeupdate",    onTimeUpdate);
      v.removeEventListener("loadedmetadata",onLoaded);
      v.removeEventListener("waiting",       onWaiting);
      v.removeEventListener("canplay",       onCanPlay);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.pause() : v.play();
  };

  const handleSeek = (frac: number) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    v.currentTime = frac * v.duration;
  };

  const fg = dark ? "#fef9ef" : "#1c1c2e";

  return (
    <motion.div
      ref={wrapRef}
      className="relative inline-block"
      style={{ rotate: `${rotate}deg` }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 30 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {/* tape */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 z-10 rounded-sm"
        style={{ background: accent, opacity: 0.75, rotate: `${rotate * -0.4}deg` }}
      />

      <div
        className={`rounded-sm overflow-hidden ${dark ? "bg-[#0d0d1a]" : "bg-white"}`}
        style={{
          maxWidth: 360,
          boxShadow: dark
            ? "0 0 0 1px rgba(255,255,255,0.06), 4px 8px 24px rgba(0,0,0,0.5)"
            : "2px 4px 0 rgba(28,28,46,0.08), 4px 8px 20px rgba(28,28,46,0.12)",
        }}
      >
        {dark && (
          <div
            className="h-1 w-full"
            style={{ background: `linear-gradient(90deg, ${accent}, #e63946, ${accent})` }}
          />
        )}

        {/* Video — click anywhere to play/pause */}
        <div
          className={`relative ${dark ? "p-1" : "p-1 bg-black/5"} cursor-pointer`}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={`${src}#t=0.001`}
            preload="none"
            playsInline
            className="block w-full"
            style={{ maxHeight: 220, objectFit: "cover", display: "block" }}
          />
          {buffering && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle
                  cx="18" cy="18" r="14"
                  stroke={dark ? "rgba(255,255,255,0.25)" : "rgba(28,28,46,0.15)"}
                  strokeWidth="3"
                  strokeDasharray="22 66"
                  strokeLinecap="round"
                >
                  <animateTransform
                    attributeName="transform" type="rotate"
                    from="0 18 18" to="360 18 18"
                    dur="0.9s" repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          )}
        </div>

        {/* Doodly controls */}
        <div
          className="flex items-center gap-3 px-3 py-2.5"
          style={{ background: dark ? "#0d0d1a" : "white" }}
        >
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            style={{
              color: fg,
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              lineHeight: 0,
              flexShrink: 0,
            }}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          <ProgressBar progress={progress} onSeek={handleSeek} color={fg} />

          <span
            className="font-hand text-base tabular-nums flex-shrink-0"
            style={{ color: fg, opacity: 0.55, minWidth: 34, textAlign: "right" }}
          >
            {duration > 0 ? fmt(currentTime) : "–:––"}
          </span>
        </div>

        {/* Title + caption */}
        <div className={`px-3 pb-4 ${dark ? "bg-[#12121f]" : "bg-white"}`}>
          <p className={`font-hand text-xl font-semibold leading-tight ${dark ? "text-white" : "text-ink"}`}>
            {title}
          </p>
          {caption && (
            <p className={`font-hand text-base mt-0.5 leading-snug ${dark ? "text-white/50" : "text-ink/55"}`}>
              {caption}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
