"use client";

import { motion } from "framer-motion";

const steps = [
  "Enterprise Data",
  "Intelligent Storage",
  "Retrieval",
  "AI Agent",
  "Knowledge",
  "Archive",
];

const nodes = [
  { x: 116, y: 74 },
  { x: 250, y: 126 },
  { x: 392, y: 188 },
  { x: 280, y: 264 },
  { x: 430, y: 340 },
  { x: 555, y: 420 },
];

const path =
  "M116 74 C168 72 188 116 250 126 C310 136 338 176 392 188 C356 214 326 238 280 264 C330 286 372 312 430 340 C482 366 510 400 555 420";

const particles = [
  { offset: 0, radius: 4.5, duration: 4.8, delay: 0 },
  { offset: 0.16, radius: 3, duration: 5.4, delay: -0.4 },
  { offset: 0.34, radius: 5, duration: 5.1, delay: -0.8 },
  { offset: 0.58, radius: 3.5, duration: 4.9, delay: -1.1 },
];

export function KnowledgeFlowAnimation() {
  return (
    <div className="knowledgeFlow" role="img" aria-label="Enterprise data flows through intelligent storage, retrieval, AI Agent, knowledge, and archive">
      <div className="knowledgeFlowGlow" aria-hidden="true" />
      <svg className="knowledgeFlowSvg" viewBox="0 0 680 500" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="knowledgeFlowLine" x1="80" y1="54" x2="600" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" stopOpacity="0.38" />
            <stop offset="0.52" stopColor="#2563EB" stopOpacity="0.62" />
            <stop offset="1" stopColor="#22D3EE" stopOpacity="0.36" />
          </linearGradient>
          <filter id="knowledgeFlowSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={path}
          fill="none"
          stroke="url(#knowledgeFlowLine)"
          strokeLinecap="round"
          strokeWidth="3"
          initial={{ pathLength: 0.82, opacity: 0.45 }}
          animate={{ pathLength: [0.84, 1, 0.84], opacity: [0.48, 0.9, 0.48] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#60A5FA"
          strokeLinecap="round"
          strokeWidth="12"
          initial={{ opacity: 0.08 }}
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          filter="url(#knowledgeFlowSoftGlow)"
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#93C5FD"
          strokeDasharray="12 28"
          strokeLinecap="round"
          strokeWidth="6"
          opacity="0.16"
          animate={{ strokeDashoffset: [0, -80] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
        />

        {particles.map((particle) => (
          <motion.circle
            key={particle.offset}
            r={particle.radius}
            fill="#2563EB"
            filter="url(#knowledgeFlowSoftGlow)"
            initial={{ offsetDistance: `${particle.offset * 100}%`, opacity: 0 }}
            animate={{
              offsetDistance: [`${particle.offset * 100}%`, `${(particle.offset + 1) * 100}%`],
              opacity: [0, 0.92, 0.92, 0],
            }}
            transition={{ duration: particle.duration, repeat: Infinity, ease: "linear", delay: particle.delay }}
            style={{ offsetPath: `path("${path}")` }}
          />
        ))}

        {nodes.map((node, index) => (
          <motion.g
            key={steps[index]}
            animate={{
              x: [0, index % 2 ? 5 : -5, 0],
              y: [0, index % 2 ? -4 : 4, 0],
              scale: [1, index === 4 ? 1.035 : 1.025, 1],
            }}
            transition={{ duration: 5.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            {index === 4 ? (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="28"
                fill="#2563EB"
                initial={{ opacity: 0.12 }}
                animate={{ opacity: [0.12, 0.28, 0.12], r: [26, 31, 26] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                filter="url(#knowledgeFlowSoftGlow)"
              />
            ) : null}
            <circle cx={node.x} cy={node.y} r="16" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
            <circle cx={node.x} cy={node.y} r="6" fill={index === 4 ? "#2563EB" : "#38BDF8"} />
          </motion.g>
        ))}
      </svg>

      <div className="knowledgeFlowCards" aria-hidden="true">
        {steps.map((step, index) => (
          <motion.div
            key={step}
            className={index === 4 ? "knowledgeFlowCard knowledgeFlowCardPrimary" : "knowledgeFlowCard"}
            style={{ left: `${(nodes[index].x / 680) * 100}%`, top: `${(nodes[index].y / 500) * 100}%` }}
            animate={index === 4 ? { y: [0, -8, 0] } : undefined}
            transition={index === 4 ? { duration: 4.4, repeat: Infinity, ease: "easeInOut" } : undefined}
          >
            <span>{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
