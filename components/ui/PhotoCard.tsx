"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3,3 L13,13" stroke="#1c1c2e" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M13,3 L3,13" stroke="#1c1c2e" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Lightbox({
  src,
  alt,
  caption,
  accent,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  accent: string;
  onClose: () => void;
}) {
  // Lock body scroll and handle Escape
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 9999, background: "rgba(28,28,46,0.85)", backdropFilter: "blur(4px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* tape */}
        <div
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            transform: "translateX(-50%) rotate(-1.5deg)",
            width: 70,
            height: 22,
            background: accent,
            opacity: 0.75,
            borderRadius: 3,
            zIndex: 1,
          }}
        />

        {/* polaroid frame */}
        <div
          style={{
            background: "white",
            padding: "12px 12px 48px 12px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              display: "block",
              maxWidth: "min(88vw, 820px)",
              maxHeight: "75vh",
              objectFit: "contain",
            }}
          />
          {caption && (
            <p
              className="font-hand text-ink/65 mt-3 text-center leading-tight"
              style={{ fontSize: 18 }}
            >
              {caption}
            </p>
          )}
        </div>

        {/* doodly close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: -18,
            right: -18,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </button>
      </motion.div>
    </motion.div>
  );
}

interface PhotoCardProps {
  src: string;
  alt?: string;
  caption?: string;
  rotate?: number;
  accent?: string;
  imgHeight?: number;
  width?: number;
}

export function PhotoCard({
  src,
  alt = "",
  caption,
  rotate = 0,
  accent = "#ffd166",
  imgHeight = 180,
  width = 220,
}: PhotoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative inline-block flex-shrink-0 cursor-zoom-in"
        style={{ rotate: `${rotate}deg` }}
        whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        onClick={() => setOpen(true)}
      >
        {/* tape */}
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-12 h-5 z-10 rounded-sm"
          style={{ background: accent, opacity: 0.7, rotate: `${rotate * -0.35}deg` }}
        />

        <div
          className="bg-white"
          style={{
            width,
            padding: "10px 10px 40px 10px",
            boxShadow: "2px 4px 0 rgba(28,28,46,0.08), 4px 10px 22px rgba(28,28,46,0.13)",
          }}
        >
          <img
            src={src}
            alt={alt}
            className="block w-full object-cover"
            style={{ height: imgHeight }}
          />
          {caption && (
            <p
              className="font-hand text-[15px] text-ink/65 mt-2 text-center leading-tight px-1"
              style={{ wordBreak: "break-word" }}
            >
              {caption}
            </p>
          )}
        </div>
      </motion.div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <Lightbox
                src={src}
                alt={alt}
                caption={caption}
                accent={accent}
                onClose={() => setOpen(false)}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
