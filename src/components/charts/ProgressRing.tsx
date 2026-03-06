interface Props {
  value: number
  max?: number
  size?: number
  stroke?: number
}

export function ProgressRingComponent({
  value,
  max = 100,
  size = 160,
  stroke = 12
}: Props) {

  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  const progress = value / max
  const offset = circumference * (1 - progress)

  return (
    <div className="relative flex items-center justify-center">

      <svg width={size} height={size}>

        {/* fundo */}

        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* progresso */}

        <circle
          stroke="#6366f1"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 0.4s ease"
          }}
        />

      </svg>

      <div className="absolute text-xl font-semibold">
        {Math.round(progress * 100)}%
      </div>

    </div>
  )
}