const AnimatedCheck = ({ size = 64 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="#22c55e"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      style={{
        strokeDasharray: 176,
        strokeDashoffset: 176,
        animation: "drawCircle 0.6s ease-out forwards",
      }}
    />
    <path
      d="M20 33 L28 41 L44 25"
      stroke="#22c55e"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      style={{
        strokeDasharray: 40,
        strokeDashoffset: 40,
        animation: "drawCheck 0.4s ease-out 0.5s forwards",
      }}
    />
    <style>{`
      @keyframes drawCircle {
        to { stroke-dashoffset: 0; }
      }
      @keyframes drawCheck {
        to { stroke-dashoffset: 0; }
      }
    `}</style>
  </svg>
);

export default AnimatedCheck;
