---
layout: page
title: "Home Lab"
permalink: /homelab/
published: true
---

# Home Lab
I’m building a SOC‑focused homelab designed to simulate adversary behavior, collect endpoint telemetry, and develop practical detection engineering skills. This page outlines the roadmap, environment goals, and ongoing work as the project evolves.

---

## Roadmap
<div class="roadmap">
  <div class="phase in-progress">
    <h3>Phase 1 — Repo + Environment Setup</h3>
    <p>
      Windows VM created, PowerShell logging enabled, Sysmon installed with SwiftOnSecurity config.<br>
      Next Steps: Azure onboarding and Azure Monitor Agent deployment
    </p>
  </div>

  <div class="phase planned">
    <h3>Phase 2 — Threat Simulation</h3>
    <p>Validate ingestion, install Atomic Red Team, run initial tests.</p>
  </div>

  <div class="phase planned">
    <h3>Phase 3 — Detection Engineering</h3>
    <p>KQL rules, analytics, hunting queries, detection testing.</p>
  </div>

  <div class="phase planned">
    <h3>Phase 4 — Documentation</h3>
    <p>Methodology, incident reports, architecture diagram.</p>
  </div>

  <div class="phase planned">
    <h3>Phase 5 — Final Polish</h3>
    <p>README updates, screenshots, release v1.0.</p>
  </div>
</div>

<style>
/* Base phase block */
.phase {
  margin-bottom: 28px;
  padding: 14px 16px;
  position: relative;
  border-radius: 6px;
  background: var(--bg-color-alt, rgba(0,0,0,0.03)); /* fallback for light theme */
}

/* Timeline dots */
.phase::before {
  content: "";
  width: 14px;
  height: 14px;
  background: var(--accent-color-light, #9bb4d1);
  border-radius: 50%;
  position: absolute;
  left: -32px;
  top: 18px;
}

/* Highlighted in-progress phase */
.phase.in-progress {
  background: var(--highlight-bg, rgba(100,150,255,0.15));
}

/* Dark theme override */
@media (prefers-color-scheme: dark) {
  .phase {
    background: rgba(255,255,255,0.05);
  }
  .phase.in-progress {
    background: rgba(120,160,255,0.18); /* darker highlight for dark mode */
  }
  .phase::before {
    background: var(--accent-color, #6f8dbd);
  }
}

/* Typography aligned to your theme */
.phase h3 {
  margin: 0 0 6px 0;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-color);
}

.phase p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-color-light);
}
</style>

---

## Overview
This homelab models a small SOC environment using Windows endpoint telemetry, Sysmon, Azure Monitor Agent, and Microsoft Sentinel. It supports threat simulation, log ingestion validation, KQL‑based detection engineering, and incident response documentation.

---

## Plans

Below are the active tasks and components being built into the lab.

<div class="plan-tags">
  <span>Azure Arc onboarding</span>
  <span>AMA deployment</span>
  <span>Sysmon ingestion validation</span>
  <span>Atomic Red Team</span>
  <span>Attack simulations</span>
  <span>Event ID analysis</span>
  <span>KQL rule development</span>
  <span>Detection testing</span>
  <span>Documentation</span>
  <span>Incident reports</span>
  <span>Architecture diagram</span>
  <span>Repo publish</span>
</div>

<style>
.plan-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.plan-tags span {
  padding: 6px 10px;
  background: rgba(120,160,255,0.15);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--text-color);
  white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  .plan-tags span {
    background: rgba(120,160,255,0.25);
  }
}
</style>

---

## Coming Soon

<div class="coming-soon">
  <p>New content is on its way. Diagrams, detections, and investigations will appear here as the lab evolves.</p>
</div>

<br>

<style>
/* Light Theme Cosmic Gradient */
.coming-soon {
  padding: 26px;
  border-radius: 14px;

  background: radial-gradient(
      circle at top left,
      rgba(245, 247, 255, 0.85),   /* light nebula white-blue */
      rgba(58, 109, 216, 0.25)    /* nebula blue accent */
    ),
    linear-gradient(
      135deg,
      rgba(106, 117, 160, 0.25),  /* lavender-gray */
      rgba(42, 53, 92, 0.35)      /* darker nebula navy */
    );

  color: #1a2340;
  box-shadow: 0 6px 18px var(--shadow-color);
  border: 1px solid rgba(26, 35, 64, 0.12); /* deep navy tint */
  transition: background 0.4s ease;
}

.coming-soon h4 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.coming-soon p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
}

/* Night Theme Cosmic Gradient */
@media (prefers-color-scheme: dark) {
  .coming-soon {
    background: radial-gradient(
        circle at bottom right,
        rgba(138, 184, 255, 0.12), /* star-blue glow, reduced brightness */
        rgba(10, 15, 31, 0.92)     /* deep cosmic navy */
      ),
      linear-gradient(
        135deg,
        rgba(154, 164, 200, 0.18), /* nebula lavender */
        rgba(17, 24, 45, 0.75)     /* darker nebula pocket */
      );

    box-shadow: 0 8px 22px rgba(0,0,0,0.55);
    border: 1px solid rgba(226, 232, 255, 0.08);
    color: #1a2340;        /* deep navy for readability */
  }
}
</style>