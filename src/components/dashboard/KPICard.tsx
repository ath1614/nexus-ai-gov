import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { type LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number;
  suffix?: string;
  change: number;
  icon: LucideIcon;
  delay?: number;
}

function MiniSparkline({ trend }: { trend: "up" | "down" }) {
  const points = trend === "up"
    ? "0,20 10,18 20,15 30,16 40,10 50,8 60,5"
    : "0,5 10,8 20,10 30,12 40,15 50,18 60,20";

  return (
    <svg width="60" height="24" viewBox="0 0 60 24" className="opacity-60">
      <polyline
        points={points}
        fill="none"
        stroke={trend === "up" ? "hsl(162 94% 30%)" : "hsl(0 84% 50%)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KPICard({ title, value, suffix = "", change, icon: Icon, delay = 0 }: KPICardProps) {
  const animatedValue = useAnimatedCounter(value);
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-2xl p-5 shadow-soft border border-border hover:shadow-glow transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <MiniSparkline trend={isPositive ? "up" : "down"} />
      </div>
      <div className="text-2xl font-bold text-foreground">
        {animatedValue.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{title}</div>
      <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${isPositive ? "text-success" : "text-destructive"}`}>
        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        <span>{isPositive ? "+" : ""}{change}% from last month</span>
      </div>
    </motion.div>
  );
}
