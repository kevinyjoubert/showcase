import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} to-transparent blur-2xl`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Splash() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  function handleStart() {
    setLeaving(true);
    setTimeout(() => navigate("/home"), 700);
  }

  return (
    <AnimatePresence mode="wait">
      {!leaving ? (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-screen w-full overflow-hidden"
          style={{ background: "#030303" }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-indigo)/0.15)] via-transparent to-[hsl(var(--accent-rose)/0.1)]" />

          {/* Floating shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <ElegantShape className="top-[-10%] left-[-5%]" delay={0.3} width={600} height={140} rotate={12} gradient="from-[hsl(var(--accent-indigo)/0.15)]" />
            <ElegantShape className="top-[20%] right-[-10%]" delay={0.5} width={500} height={120} rotate={-15} gradient="from-[hsl(var(--accent-rose)/0.12)]" />
            <ElegantShape className="bottom-[15%] left-[10%]" delay={0.4} width={300} height={80} rotate={-8} gradient="from-[hsl(var(--accent-indigo)/0.1)]" />
            <ElegantShape className="top-[60%] right-[15%]" delay={0.6} width={200} height={60} rotate={20} gradient="from-[hsl(var(--accent-rose)/0.08)]" />
            <ElegantShape className="top-[10%] left-[40%]" delay={0.7} width={150} height={40} rotate={-25} gradient="from-white/[0.05]" />
          </div>

          {/* Central content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-rose))]" />
              <span className="text-white/60">Portfólio</span>
            </motion.div>

            {/* Title line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
            >
              Soluções que
            </motion.h1>

            {/* Title line 2 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-[hsl(var(--accent-indigo))] via-white to-[hsl(var(--accent-rose))] bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
            >
              funcionam
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mx-auto mt-8 max-w-lg text-base text-white/40 sm:text-lg"
            >
              Interfaces, automações e sistemas desenvolvidos
              <br />
              com precisão e atenção a cada detalhe.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-10"
            >
              <button
                onClick={handleStart}
                className="group inline-flex items-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.03] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/[0.08]"
              >
                Começar
                <span className="text-[hsl(var(--accent-indigo))] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>

            {/* Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="mt-6 text-xs text-white/80"
            >
              Ver projetos disponíveis
            </motion.p>
          </div>

          {/* Top/bottom fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
        </motion.div>
      ) : (
        <motion.div
          key="white-veil"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-50 bg-white"
        />
      )}
    </AnimatePresence>
  );
}
