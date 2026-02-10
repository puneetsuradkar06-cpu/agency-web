"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";

const services = [
  { title: "AI Agents", desc: "Autonomous agents handling qualification, follow-ups, and repetitive ops." },
  { title: "Process Automation", desc: "Zero-friction workflows that eliminate bottlenecks across your stack." },
  { title: "CRM Automation", desc: "Pipeline intelligence, lead routing, and lifecycle orchestration on autopilot." },
  { title: "AI Receptionist", desc: "24/7 conversational intake with natural language context and intent routing." },
  { title: "Data Dashboards", desc: "Executive-level visibility with real-time decision intelligence and anomaly alerts." }
];

const caseStudies = [
  { company: "SaaS Portfolio", result: "+312% qualified pipeline", detail: "Deployed lead intelligence agents + outbound orchestration." },
  { company: "MedTech Group", result: "-41% admin workload", detail: "Automated intake, triage, and dashboard reporting workflows." },
  { company: "Ecom Accelerator", result: "+28% LTV", detail: "Unified lifecycle automations and AI retention campaigns." }
];

const techStack = ["OpenAI", "LangChain", "Zapier", "HubSpot", "Airtable", "n8n", "Pinecone", "Stripe"];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rotateX.set(py * -10);
        rotateY.set(px * 10);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group rounded-3xl border border-white/15 bg-white/[0.06] shadow-glass backdrop-blur-2xl transition-all duration-300 hover:border-cyan-300/60 ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export default function Home() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useSpring(mx, { stiffness: 120, damping: 22 });
  const glowY = useSpring(my, { stiffness: 120, damping: 22 });
  const glow = useTransform([glowX, glowY], ([x, y]) => `radial-gradient(420px circle at ${x}px ${y}px, rgba(70,128,255,0.18), transparent 65%)`);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 8
      })),
    []
  );

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-base text-white"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <motion.div style={{ backgroundImage: glow }} className="pointer-events-none fixed inset-0 z-0" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-noise bg-[length:200%_200%] opacity-90" />

      <section className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 pb-20 pt-24 md:px-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 top-24 h-72 w-72 animate-float rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute right-0 top-8 h-80 w-80 animate-float rounded-full bg-cyan-500/20 blur-3xl [animation-delay:1s]" />
          <div className="absolute bottom-10 left-1/2 h-60 w-60 animate-float rounded-full bg-indigo-500/20 blur-3xl [animation-delay:2s]" />
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70"
              style={{ top: p.top, left: p.left }}
              animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>

        <motion.div initial="hidden" animate="show" variants={reveal} transition={{ duration: 0.8 }} className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm tracking-wide text-cyan-200">
            Elite AI Automation Agency
          </p>
          <h1 className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent md:text-7xl">
            We Build AI Systems That Run Your Business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200/85 md:text-xl">
            We design and deploy AI agents, automation systems, and intelligent workflows that scale revenue, remove friction, and give founders operational leverage.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              ["Book Strategy Call", "from-cyan-400 to-blue-600"],
              ["View Case Studies", "from-violet-500 to-fuchsia-600"]
            ].map(([label, gradient]) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm font-semibold tracking-wide"
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60`} />
                <span className="relative">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 md:px-10">
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ duration: 0.65 }}>
          <h2 className="mb-6 text-3xl font-bold">Services</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <GlassCard key={service.title} className="p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-slate-200/80">{service.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ duration: 0.65 }}>
          <h2 className="mb-8 text-3xl font-bold">How It Works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "Diagnose", "We map your bottlenecks and revenue opportunities."],
              ["02", "Architect", "We design your custom AI operating system."],
              ["03", "Deploy", "We launch, optimize, and scale your workflows."]
            ].map(([num, title, text], idx) => (
              <motion.div key={num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }}>
                <GlassCard className="p-6">
                  <p className="text-sm text-cyan-200">{num}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-200/80">{text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ duration: 0.65 }}>
          <h2 className="mb-6 text-3xl font-bold">Case Studies</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => (
              <GlassCard key={study.company} className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{study.company}</p>
                <p className="mt-4 text-3xl font-bold text-white">{study.result}</p>
                <p className="mt-3 text-slate-200/80">{study.detail}</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ duration: 0.65 }}>
          <h2 className="mb-6 text-3xl font-bold">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {techStack.map((tech, idx) => (
              <motion.div key={tech} animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 + idx * 0.4, ease: "easeInOut" }}>
                <GlassCard className="p-5 text-center">
                  <p className="font-medium tracking-wide text-white/90">{tech}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={reveal} transition={{ duration: 0.65 }}>
          <GlassCard className="relative overflow-hidden p-10 text-center md:p-14">
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,182,212,.2),rgba(139,92,246,.2),rgba(59,130,246,.15))] bg-[length:200%_200%]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <h2 className="text-3xl font-bold md:text-5xl">Ready to Operate at AI Speed?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-100/90">
                Build a premium automation engine that compounds your growth while your competitors are still hiring manually.
              </p>
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="mt-8 rounded-full border border-cyan-200/40 bg-cyan-300/10 px-8 py-3 font-semibold text-cyan-100 shadow-glow"
              >
                Start Your Transformation
              </motion.button>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </main>
  );
}
