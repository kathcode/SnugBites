// --- SnugBites Logo (inline SVG) ---
const Logo: React.FC<{ className?: string; size?: number }> = ({
  className,
  size = 28,
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="SnugBites"
  >
    <defs>
      <linearGradient id="sbGrad" x1="0" x2="1">
        <stop offset="0%" stopColor="#5AA0E6" />
        <stop offset="100%" stopColor="#52C29D" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#sbGrad)" />
    {/* Spoon/heart bowl */}
    <path
      d="M32 46c11.5 0 21-9.5 21-21S43.5 4 32 4 11 13.5 11 25c0 5 1.8 9.8 5 13.4l-1.4 6.2c-.6 2.2 1.5 4.3 3.7 3.7l6.2-1.4C27.9 48.9 29.9 49.9 32 50Z"
      fill="#fff"
      opacity=".95"
    />
    {/* tiny bite */}
    <circle cx="41" cy="15" r="3.5" fill="#5AA0E6" />
  </svg>
);
