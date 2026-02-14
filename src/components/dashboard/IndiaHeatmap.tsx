import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StateData {
  name: string;
  msmes: number;
  density: "high" | "medium" | "low";
}

const stateData: Record<string, StateData> = {
  MH: { name: "Maharashtra", msmes: 3240, density: "high" },
  GJ: { name: "Gujarat", msmes: 2810, density: "high" },
  TN: { name: "Tamil Nadu", msmes: 2560, density: "high" },
  KA: { name: "Karnataka", msmes: 1980, density: "medium" },
  UP: { name: "Uttar Pradesh", msmes: 1750, density: "medium" },
  RJ: { name: "Rajasthan", msmes: 1420, density: "medium" },
  WB: { name: "West Bengal", msmes: 1280, density: "medium" },
  DL: { name: "Delhi NCR", msmes: 1100, density: "medium" },
  AP: { name: "Andhra Pradesh", msmes: 890, density: "low" },
  KL: { name: "Kerala", msmes: 760, density: "low" },
  MP: { name: "Madhya Pradesh", msmes: 680, density: "low" },
  BR: { name: "Bihar", msmes: 420, density: "low" },
};

const densityColors = {
  high: "fill-accent/70 hover:fill-accent",
  medium: "fill-accent/40 hover:fill-accent/60",
  low: "fill-accent/20 hover:fill-accent/40",
};

export function IndiaHeatmap() {
  const [hovered, setHovered] = useState<StateData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 10 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-card rounded-2xl p-6 shadow-soft border border-border relative"
    >
      <h3 className="text-base font-semibold text-foreground mb-4">MSME Density Map</h3>
      <div className="relative" onMouseMove={handleMouseMove}>
        {/* Simplified India outline with state blocks */}
        <svg viewBox="0 0 300 350" className="w-full max-w-xs mx-auto">
          {/* Simplified geometric representation */}
          <rect x="60" y="30" width="55" height="40" rx="4" className={`${densityColors.medium} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.DL)} onMouseLeave={() => setHovered(null)} />
          <text x="87" y="55" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">DL</text>

          <rect x="20" y="80" width="65" height="50" rx="4" className={`${densityColors.medium} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.RJ)} onMouseLeave={() => setHovered(null)} />
          <text x="52" y="110" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">RJ</text>

          <rect x="95" y="70" width="65" height="55" rx="4" className={`${densityColors.medium} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.UP)} onMouseLeave={() => setHovered(null)} />
          <text x="127" y="102" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">UP</text>

          <rect x="170" y="80" width="55" height="45" rx="4" className={`${densityColors.medium} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.WB)} onMouseLeave={() => setHovered(null)} />
          <text x="197" y="107" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">WB</text>

          <rect x="170" y="130" width="55" height="40" rx="4" className={`${densityColors.low} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.BR)} onMouseLeave={() => setHovered(null)} />
          <text x="197" y="155" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">BR</text>

          <rect x="50" y="140" width="65" height="45" rx="4" className={`${densityColors.high} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.GJ)} onMouseLeave={() => setHovered(null)} />
          <text x="82" y="167" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">GJ</text>

          <rect x="80" y="140" width="60" height="45" rx="4" className={`${densityColors.low} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.MP)} onMouseLeave={() => setHovered(null)} />
          <text x="110" y="167" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">MP</text>

          <rect x="50" y="195" width="75" height="45" rx="4" className={`${densityColors.high} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.MH)} onMouseLeave={() => setHovered(null)} />
          <text x="87" y="222" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">MH</text>

          <rect x="140" y="195" width="60" height="40" rx="4" className={`${densityColors.medium} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.KA)} onMouseLeave={() => setHovered(null)} />
          <text x="170" y="219" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">KA</text>

          <rect x="140" y="195" width="55" height="35" rx="4" className={`${densityColors.low} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.AP)} onMouseLeave={() => setHovered(null)} />
          <text x="167" y="217" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">AP</text>

          <rect x="120" y="250" width="65" height="45" rx="4" className={`${densityColors.high} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.TN)} onMouseLeave={() => setHovered(null)} />
          <text x="152" y="277" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">TN</text>

          <rect x="80" y="265" width="35" height="40" rx="4" className={`${densityColors.low} transition-all cursor-pointer stroke-background stroke-1`} onMouseEnter={() => setHovered(stateData.KL)} onMouseLeave={() => setHovered(null)} />
          <text x="97" y="290" textAnchor="middle" className="fill-foreground text-[8px] font-medium pointer-events-none">KL</text>
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bg-popover text-popover-foreground rounded-xl px-4 py-2 shadow-lg border border-border pointer-events-none z-10"
              style={{ left: tooltipPos.x, top: tooltipPos.y, transform: "translate(-50%, -100%)" }}
            >
              <p className="text-sm font-semibold">{hovered.name}</p>
              <p className="text-xs text-muted-foreground">{hovered.msmes.toLocaleString()} MSMEs registered</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-accent/20" /> Low</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-accent/40" /> Medium</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-accent/70" /> High</span>
        </div>
      </div>
    </motion.div>
  );
}
