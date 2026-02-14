import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const procurementData = [
  { month: "Jul", value: 42 }, { month: "Aug", value: 55 },
  { month: "Sep", value: 48 }, { month: "Oct", value: 62 },
  { month: "Nov", value: 58 }, { month: "Dec", value: 71 },
  { month: "Jan", value: 68 },
];

const growthData = [
  { month: "Jul", msmes: 12400, matched: 8200 },
  { month: "Aug", msmes: 13100, matched: 8900 },
  { month: "Sep", msmes: 13800, matched: 9500 },
  { month: "Oct", msmes: 14200, matched: 10100 },
  { month: "Nov", msmes: 15000, matched: 10800 },
  { month: "Dec", msmes: 15600, matched: 11400 },
  { month: "Jan", msmes: 16240, matched: 12100 },
];

export function PerformanceCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card rounded-2xl p-6 shadow-soft border border-border"
      >
        <h3 className="text-base font-semibold text-foreground mb-4">Procurement Efficiency</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={procurementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                fontSize: 12,
              }}
            />
            <Bar dataKey="value" fill="hsl(var(--accent))" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-card rounded-2xl p-6 shadow-soft border border-border"
      >
        <h3 className="text-base font-semibold text-foreground mb-4">MSME Growth Trends</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                fontSize: 12,
              }}
            />
            <Line type="monotone" dataKey="msmes" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="matched" stroke="hsl(var(--success))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
