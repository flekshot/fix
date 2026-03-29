interface WaxSealProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function WaxSeal({ size = 'md', className = '' }: WaxSealProps) {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`document-seal ${sizeMap[size]} ${className}`}>
      <svg
        className="absolute inset-0"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Внешний круг */}
        <circle cx="60" cy="60" r="58" stroke="#faf8f3" strokeWidth="1" opacity="0.5" />
        
        {/* Внутренний орнамент */}
        <g opacity="0.7" stroke="#faf8f3" strokeWidth="0.5">
          {/* Линии от центра */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="60"
              y1="60"
              x2={60 + Math.cos((angle * Math.PI) / 180) * 45}
              y2={60 + Math.sin((angle * Math.PI) / 180) * 45}
            />
          ))}
        </g>

        {/* Текст по кругу */}
        <defs>
          <path id="circlePath" d="M 30, 60 a 30,30 0 0,1 60,0 a 30,30 0 0,1 -60,0" fill="none" />
        </defs>
        <text
          fontSize="8"
          fontFamily="var(--font-display)"
          fill="#faf8f3"
          opacity="0.6"
          letterSpacing="2"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            ВЫСШЕЕ КОМАНДОВАНИЕ
          </textPath>
        </text>
      </svg>
    </div>
  );
}
