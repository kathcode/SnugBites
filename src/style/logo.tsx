import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & { withWordmark?: boolean };

export default function Logo({ withWordmark = false, ...props }: Props) {
  return (
    <svg viewBox="0 0 220 64" width={220} height={64} {...props}>
      {/* Icon — rounded heart/leaf cradling a small bite */}
      <defs>
        <linearGradient id="sbGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#5AA0E6" />
          <stop offset="100%" stopColor="#52C29D" />
        </linearGradient>
      </defs>
      <g transform="translate(6 6)">
        <rect x="0" y="0" width="52" height="52" rx="16" fill="url(#sbGrad)" />
        {/* Spoon bowl as heart shape */}
        <path
          d="M26 36c6.6 0 12-5.4 12-12S32.6 12 26 12 14 17.4 14 24c0 2.9 1 5.6 2.8 7.6l-.8 3.6c-.3 1.2.8 2.3 2 2l3.6-.8c1.9 1.7 4.6 2.6 7.4 2.6Z"
          fill="#fff"
          opacity=".95"
        />
        {/* Tiny bite */}
        <circle cx="34.5" cy="18.5" r="2.5" fill="#5AA0E6" />
      </g>
      {withWordmark && (
        <g transform="translate(70 12)">
          <text
            x="0"
            y="28"
            fontFamily="Inter, ui-sans-serif, system-ui"
            fontSize="28"
            fontWeight="800"
            fill="#0F172A"
          >
            Snug
          </text>
          <text
            x="92"
            y="28"
            fontFamily="Inter, ui-sans-serif, system-ui"
            fontSize="28"
            fontWeight="800"
            fill="#5AA0E6"
          >
            Bites
          </text>
        </g>
      )}
    </svg>
  );
}
