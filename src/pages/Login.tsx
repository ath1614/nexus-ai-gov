import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AnimatedMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="gradient-mesh absolute inset-0" />
      {/* Animated orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: 100 + i * 80,
            height: 100 + i * 80,
            background: `radial-gradient(circle, hsl(217 91% 53% / 0.4), transparent)`,
            left: `${15 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`}
            stroke="hsl(217 91% 53%)" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${i * 10}%`} y1="0" x2={`${i * 10}%`} y2="100%"
            stroke="hsl(217 91% 53%)" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
      </svg>
      {/* Branding */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">MSME Nexus AI</h1>
          </div>
          <p className="text-lg text-white/70 max-w-md">
            Intelligent Mapping. Smart Governance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <AnimatedMesh />
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">MSME Nexus AI</span>
          </div>

          <div className="glass-card rounded-2xl p-8 shadow-soft">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Welcome back</h2>
              <p className="text-muted-foreground mt-1">Sign in to your government portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="officer@gov.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-11 rounded-xl pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground justify-center">
              <Lock className="w-3 h-3" />
              <span>256-bit SSL Encrypted • Government Verified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
