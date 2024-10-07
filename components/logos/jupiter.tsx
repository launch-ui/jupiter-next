const Jupiter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <circle
        cx={12}
        cy={12}
        r={12}
        transform="rotate(90 12 12)"
        fill="currentColor"
      />
    </mask>
    <g mask="url(#a)">
      <circle
        cx={12}
        cy={12}
        r={11}
        transform="rotate(90 12 12)"
        fill="url(#b)"
        stroke="currentColor"
        strokeWidth={2}
      />
      <path
        d="M0 9.02c12-7 12 7 24 0M0 17c12-7 12 7 24 0"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <ellipse cx={16.5} cy={14.5} rx={2.5} ry={1.5} fill="currentColor" />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={7}
        y1={18}
        x2={21.5}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity={0} />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.6} />
      </linearGradient>
    </defs>
  </svg>
);
export default Jupiter;
