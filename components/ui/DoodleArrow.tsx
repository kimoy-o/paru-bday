import React from "react";

type SVGProps = { className?: string; style?: React.CSSProperties };

export function DoodleArrowDown({ className, style }: SVGProps) {
  return (
    <svg
      width="36"
      height="56"
      viewBox="0 0 36 56"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M18,4 C12,16 26,24 16,38 C13,44 18,50 18,50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="5 4"
        fill="none"
      />
      <path
        d="M11,44 L18,52 L25,44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleArrowRight({ className, style }: SVGProps) {
  return (
    <svg
      width="80"
      height="36"
      viewBox="0 0 80 36"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M4,18 C18,8 28,30 44,20 C58,10 64,22 74,18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="5 4"
        fill="none"
      />
      <path
        d="M68,11 L76,18 L68,25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleArrowCurved({ className, style }: SVGProps) {
  return (
    <svg
      width="70"
      height="80"
      viewBox="0 0 70 80"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M55,6 C62,22 8,28 12,52 C14,60 20,66 28,70"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="5 4"
        fill="none"
      />
      <path
        d="M20,66 L28,73 L34,64"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleUnderline({ className, style }: SVGProps) {
  return (
    <svg
      width="100%"
      height="12"
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M4,7 C40,2 90,11 140,6 C190,1 240,10 296,6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DoodleCircle({ className, style }: SVGProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 60"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      style={style}
    >
      <ellipse
        cx="100"
        cy="30"
        rx="92"
        ry="22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="4 3"
        fill="none"
        transform="rotate(-2 100 30)"
      />
    </svg>
  );
}

export function DoodleStar({ className, style }: SVGProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M12 2 L13.5 9 L20 8 L15 13 L17 20 L12 16 L7 20 L9 13 L4 8 L10.5 9 Z" />
    </svg>
  );
}
