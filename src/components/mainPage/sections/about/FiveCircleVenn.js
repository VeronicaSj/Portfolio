import React, { useEffect, useState } from "react";

export default function FiveCircleVenn({
  labels = ["Front-End", "Back-End", "FullStack", "DataBases", "Systems",],
  colors = ["var(--clr-dark-red)", "var(--clr-red)", "var(--clr-light-pink )", "var(--clr-dark-red)", "var(--clr-pink)",],
  centerLabel1 = "Veronica",
  centerLabel2 = "Sanchez"
}) {
    
  const [size, setSize] = useState(Math.min(window.innerWidth, window.innerHeight * 0.7));

  useEffect(() => {
    const handleResize = () => setSize(Math.min(window.innerWidth, window.innerHeight * 0.7));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const r = size * 0.17;
  const cx = size / 2;
  const cy = size / 2;
  const radiusFromCenter = r * 0.8;
  const angleOffset = -Math.PI / 2;

  const positions = Array.from({ length: 5 }).map((_, i) => {
    const a = (i * (2 * Math.PI)) / 5 + angleOffset;
    return {
      x: Math.cos(a) * radiusFromCenter,
      y: Math.sin(a) * radiusFromCenter,
      angle: a,
      label: labels[i],
      color: colors[i % colors.length]
    };
  });

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const textOffset = radiusFromCenter + r + 10;

  return (
    <div style={{width:"100%" , display:"flex", alignItems:"center"}}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}  style={{width:"100%" , display:"flex", alignItems:"center"}}>
        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--clr-funct-bg)" stopOpacity={1} />
            <stop offset="100%" stopColor="var(--clr-funct-bg)" stopOpacity={0} />
          </radialGradient>
        </defs>

        <g transform={`translate(${cx}, ${cy}) rotate(${(angle * 180) / Math.PI})`}>
          {positions.map((pos, i) => (
            <g key={i}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={r}
                fill={pos.color}
                fillOpacity={0.5}
              />
              <text
                x={pos.x * ((textOffset) / radiusFromCenter)}
                y={pos.y * ((textOffset)/ radiusFromCenter) }
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize={size * 0.05}
                fontWeight={700}
                fontFamily={"'Marcellus', serif"}
                fill="var(--clr-funct-font)"
                transform={`rotate(${-angle * 180 / Math.PI}, ${pos.x * (textOffset / radiusFromCenter)}, ${pos.y * (textOffset / radiusFromCenter)})`}
              >
                {pos.label}
              </text>
            </g>
          ))}
        </g>

        <circle cx={cx} cy={cy} r={r * 1.3} fill="url(#centerGradient)" />
        <text
          x={cx}
          y={cy - size * 0.04}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={size * 0.08}
          fontWeight={700}
          fontFamily={"'Marcellus', serif"}
          fill="var(--clr-funct-font)"
        >
            {centerLabel1}
        </text>
        <text
          x={cx}
          y={cy + size * 0.04}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={size * 0.08}
          fontWeight={700}
          fontFamily={"'Marcellus', serif"}
          fill="var(--clr-funct-font)"
        >
          {centerLabel2}
        </text>
      </svg>
    </div>
  );
}