import { motion } from "framer-motion";
import { Brain, Lightbulb, AlertTriangle } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    title: "Underutilised Textile Cluster",
    text: "Textile MSMEs in Gujarat's Surat district show 68% capability match with current CPSE tenders but only 12% participation. Recommend targeted outreach.",
    type: "opportunity" as const,
  },
  {
    icon: Brain,
    title: "Export Growth Detected",
    text: "45% of registered vendors in the automotive sector match export opportunities in Southeast Asia. 3 new trade agreements can be leveraged.",
    type: "insight" as const,
  },
  {
    icon: AlertTriangle,
    title: "Risk Alert: Vendor Cluster",
    text: "Rural manufacturing cluster in UP showing 22% revenue decline. 14 MSMEs flagged for potential scheme eligibility reassessment.",
    type: "warning" as const,
  },
];

const typeStyles = {
  opportunity: "border-l-success bg-success/5",
  insight: "border-l-accent bg-accent/5",
  warning: "border-l-warning bg-warning/5",
};

export function AIInsightsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-card rounded-2xl p-6 shadow-soft border border-border"
    >
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-accent" />
        <h3 className="text-base font-semibold text-foreground">AI Insights</h3>
        <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">Live</span>
      </div>
      <div className="space-y-3">
        {insights.map((insight, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className={`border-l-3 rounded-xl p-4 ${typeStyles[insight.type]} border-l-[3px]`}
          >
            <div className="flex items-center gap-2 mb-1">
              <insight.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{insight.title}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{insight.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
