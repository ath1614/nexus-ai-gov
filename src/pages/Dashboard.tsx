import { motion } from "framer-motion";
import { Building2, Activity, AlertTriangle, ShieldAlert } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { AIInsightsPanel } from "@/components/dashboard/AIInsightsPanel";
import { IndiaHeatmap } from "@/components/dashboard/IndiaHeatmap";
import { PerformanceCharts } from "@/components/dashboard/PerformanceCharts";
import { MainLayout } from "@/components/layout/MainLayout";

const kpis = [
  { title: "Total Registered MSMEs", value: 16240, change: 8.2, icon: Building2 },
  { title: "Active Matching Rate", value: 74, suffix: "%", change: 5.1, icon: Activity },
  { title: "Underutilised MSMEs", value: 3420, change: -12.3, icon: AlertTriangle },
  { title: "High-Risk Vendors", value: 186, change: -4.8, icon: ShieldAlert },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-foreground">Welcome back, Officer Kumar</h2>
          <p className="text-muted-foreground text-sm mt-1">Here's your AI-powered intelligence summary</p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <KPICard key={i} {...kpi} delay={i * 0.1} />
          ))}
        </div>

        {/* Insights + Heatmap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIInsightsPanel />
          <IndiaHeatmap />
        </div>

        {/* Charts */}
        <PerformanceCharts />
      </div>
    </MainLayout>
  );
}
