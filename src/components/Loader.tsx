import { useEffect, useState } from 'react';

export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 2600);
    const t2 = setTimeout(() => setHidden(true), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  // Brick layout — each row offset like real brickwork
  // [col, row, width] where width is number of brick-units
  const bricks = [
    // Foundation row
    { c: 0, r: 0, w: 2 },
    { c: 2, r: 0, w: 2 },
    { c: 4, r: 0, w: 2 },
    // Row 1
    { c: 1, r: 1, w: 2 },
    { c: 3, r: 1, w: 2 },
    { c: 0, r: 1, w: 1 },
    { c: 5, r: 1, w: 1 },
    // Row 2
    { c: 0, r: 2, w: 2 },
    { c: 2, r: 2, w: 2 },
    { c: 4, r: 2, w: 2 },
    // Row 3 (door sides)
    { c: 0, r: 3, w: 1 },
    { c: 5, r: 3, w: 1 },
    { c: 1, r: 3, w: 1 },
    { c: 4, r: 3, w: 1 },
    // Row 4 (above door)
    { c: 0, r: 4, w: 2 },
    { c: 4, r: 4, w: 2 },
    { c: 2, r: 4, w: 2 },
  ];

  const brickW = 14;
  const brickH = 10;
  const gap = 2;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        done ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* House under construction */}
      <div className="relative" style={{ width: 6 * (brickW + gap), height: 5 * (brickH + gap) + 40 }}>
        {/* Roof */}
        <svg
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: -28, width: 7 * (brickW + gap), height: 34 }}
          viewBox="0 0 112 34"
        >
          <path
            d="M6 34 L56 2 L106 34 Z"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 260,
              strokeDashoffset: 260,
              animation: 'draw-roof 0.8s ease-out 1.8s forwards',
            }}
          />
        </svg>

        {/* Bricks */}
        {bricks.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-[2px]"
            style={{
              left: b.c * (brickW + gap),
              top: b.r * (brickH + gap),
              width: b.w * brickW + (b.w - 1) * gap,
              height: brickH,
              background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
              opacity: 0,
              transform: 'translateY(-12px) scale(0.8)',
              animation: `lay-brick 0.35s ease-out ${i * 0.12}s forwards`,
            }}
          />
        ))}

        {/* Door (appears after bricks) */}
        <div
          className="absolute rounded-t-[2px] bg-ink-soft border border-sky/40"
          style={{
            left: 2 * (brickW + gap),
            top: 3 * (brickH + gap),
            width: 2 * brickW + gap,
            height: 2 * brickH + gap,
            opacity: 0,
            animation: 'fade-in 0.4s ease-out 2.1s forwards',
          }}
        >
          <div
            className="absolute rounded-full bg-sky-soft/30"
            style={{ right: 3, top: '50%', transform: 'translateY(-50%)', width: 3, height: 3 }}
          />
        </div>
      </div>

      {/* Company name */}
      <div
        className="mt-10 text-center"
        style={{ opacity: 0, animation: 'fade-in 0.5s ease-out 0.3s forwards' }}
      >
        <div className="font-display text-xl sm:text-2xl text-white tracking-wide">
          Ekasi Noble Properties
        </div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-sky-soft/70">
          Building your future
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-6 h-1 w-44 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky to-sky-soft"
          style={{
            width: '0%',
            animation: 'load-bar 2.6s ease-out forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes lay-brick {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes draw-roof {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fade-in {
          to { opacity: 1; }
        }
        @keyframes load-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
