import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "ai";
  text: string;
}

const simulatedResponses: Record<string, string> = {
  default: "I can help you with MSME data, scheme eligibility, vendor matching, and export opportunities. Try asking about a specific topic!",
  scheme: "Under the MSME Champion Scheme, enterprises with annual turnover under ₹5 Cr are eligible for subsidised credit at 4% interest. Currently 2,340 MSMEs in your region qualify but haven't applied.",
  vendor: "Based on AI analysis, I recommend 3 vendors for the CPSE steel procurement tender: (1) Tata MSME Unit, Jamshedpur — 94% match, (2) Bhilai Steel Cluster — 88% match, (3) Vizag Ancillary Works — 82% match.",
  cluster: "Top underutilised clusters: Gujarat Textile (68% capability, 12% utilisation), UP Rural Manufacturing (45% capability, 8% utilisation), Tamil Nadu Electronics (72% capability, 22% utilisation).",
  export: "Southeast Asian markets show high demand for Indian auto components. 156 MSMEs in Maharashtra match export criteria. Recommend trade facilitation program activation.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("scheme") || lower.includes("eligib")) return simulatedResponses.scheme;
  if (lower.includes("vendor") || lower.includes("suggest") || lower.includes("recommend")) return simulatedResponses.vendor;
  if (lower.includes("cluster") || lower.includes("underutil")) return simulatedResponses.cluster;
  if (lower.includes("export") || lower.includes("trade")) return simulatedResponses.export;
  return simulatedResponses.default;
}

export function AIChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hello! I'm Nexus AI. Ask me about MSMEs, schemes, vendor matching, or export opportunities." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: getResponse(userMsg) }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setOpen(true)}
              className="w-14 h-14 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-card rounded-2xl shadow-lg border border-border flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Nexus AI</p>
                  <p className="text-[10px] text-success">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-xl">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}
                >
                  {msg.role === "ai" && (
                    <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 text-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-accent" />
                  </div>
                  <div className="bg-muted rounded-xl px-3 py-2 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <form
                onSubmit={(e) => { e.preventDefault(); send(); }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Nexus AI..."
                  className="h-9 rounded-xl text-xs"
                />
                <Button type="submit" size="icon" className="h-9 w-9 rounded-xl bg-accent hover:bg-accent/90">
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
