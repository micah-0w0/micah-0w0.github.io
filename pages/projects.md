---
layout: page
title: "Projects"
permalink: /projects/
published: true
---

<h1>Projects</h1>

<div class="projects-container">

  <!-- GSET -->
  <div class="project-box">
    <h2>MBASED Binary Ninja Plugin (NJGSET Research Project)</h2>
    <h3>2024</h3>
    <p>MBASED is a Binary Ninja plugin that simplifies mixed‑boolean arithmetic (MBA) obfuscation in C programs, reducing manual reverse‑engineering effort.</p>

    <div class="project-highlights">
        <ul>
          <li>Implemented initialization logic and a custom parser for MBA expressions</li>
          <li>Built benchmarking components to measure simplification performance</li>
          <li>Integrated functionality directly into Binary Ninja’s analysis workflow</li>
          <li>Contributed to research presented at the MIT Undergraduate Research Technology Conference and the New Jersey Governor's School of Engineering and Technology</li>
        </ul>
    </div>

    <div class="skills-container">
      <span class="skill-tag">Reverse Engineering</span>
      <span class="skill-tag">Python</span>
      <span class="skill-tag">Binary Ninja</span>
      <span class="skill-tag">Program Analysis</span>
    </div>

    <div class="project-links">
      <a href="https://ieeexplore.ieee.org/document/10937558" target="_blank">See publication</a>
      <a href="https://github.com/bliutech/mbased" target="_blank">See project repository</a>
    </div>
  </div>

  <!-- USCC -->
  <div class="project-box">
    <h2>US Cyber Challenge Eastern Cyber Camp</h2>
    <h3>2026</h3>
    <p>A selective, invitation‑only cybersecurity program earned by placing among the top performers in the US Cyber Challenge qualification competition. Trained by SANS‑affiliated instructors in exploitation fundamentals, digital forensics, malware analysis, and mobile device investigation. The camp concluded with a competitive Capture‑the‑Flag event.</p>

    <div class="project-highlights">
      <ul>
        <li>Built Python exploit scripts and practiced buffer overflow exploitation in Cybersecurity Program Analysis</li>
        <li>Performed Linux forensics and malware triage, including process analysis, memory examination, and malicious activity identification</li>
        <li>Conducted mobile device forensics including SD card recovery and Android/iOS backup analysis</li>
        <li>Solved 11 forensics challenges during the USCC East Coast CTF</li>
      </ul>
    </div>

    <div class="skills-container">
      <span class="skill-tag">Linux Forensics</span>
      <span class="skill-tag">Malware Analysis</span>
      <span class="skill-tag">Program Analysis</span>
      <span class="skill-tag">Mobile Forensics</span>
      <span class="skill-tag">CTF</span>
    </div>
        
    <div class="project-links">
      <a href="https://credsverse.com/credentials/2abf8705-9c1b-49dc-aeb7-9927cb52d0ff" target="_blank">See credential</a>
    </div>
  </div>

  <!-- TryHackMe -->
  <div class="project-box">
    <h2>TryHackMe Labs (Top 2%)</h2>
    <h3>Ongoing</h3>
    <p>Completed 150+ hands-on labs across Linux, Windows, networking, web security, cloud security, and incident response fundamentals. Ranked in the Top 2% globally.</p>

    <div class="project-highlights">
      <ul>
        <li>Investigated suspicious logs and events across Linux and Windows systems</li>
        <li>Analyzed network traffic to identify anomalies, attacker techniques, and misconfigurations</li>
        <li>Performed endpoint triage by reviewing processes, services, and persistence mechanisms to identify suspicious behavior</li> 
        <li>Developed structured notes and repeatable workflows for SOC-style investigations</li>
      </ul>    
    </div>

    <div class="skills-container">
      <span class="skill-tag">Log Analysis</span>
      <span class="skill-tag">Packet Inspection</span>
      <span class="skill-tag">Linux</span>
      <span class="skill-tag">Windows</span>
      <span class="skill-tag">Web Exploitation</span>
      <span class="skill-tag">Cloud Security</span>
    </div>

    <div class="project-links">
      <a href="https://tryhackme.com/p/tinyviolin1" target="_blank">See TryHackMe profile</a>
    </div>
  </div>

  <!-- CS50 -->
  <div class="project-box">
    <h2>CS50 Final Project: Bingo!</h2>
    <h3>2025</h3>
    <p>A full-stack Bingo web application built with Python and Flask, featuring a custom UI,
    user authentication, win validation, and complete game logic. The project
    demonstrates frontend design, backend development, and persistent data handling.</p>

    <div class="project-highlights">
      <ul>
        <li>Designed the UI and built the full application from scratch</li>
        <li>Implemented game logic, win validation, and session handling</li>
        <li>Recorded a demo showing how to run and use the application</li>
      </ul>
    </div>

    <div class="skills-container">
      <span class="skill-tag">Python</span>
      <span class="skill-tag">Flask</span>
      <span class="skill-tag">Web Development</span>
      <span class="skill-tag">Database Integration</span>
    </div>

    <div class="project-links">
      <a href="https://github.com/micah-0w0/Bingo" target="_blank">See project repository</a>
      <a href="https://youtu.be/I6oPhlRx0zg" target="_blank">See video demo</a>
    </div>
  </div>

</div>

---

<div class="ctf-section">
  <h1>Capture the Flag (CTF) Competitions</h1>

  <div class="ctf-marquee">
    <div class="ctf-track">
      <div class="ctf-item">USCC East Coast CTF 2026</div>
      <div class="ctf-item">Bearcat CTF 2026</div>
      <div class="ctf-item">Love at First Breach CTF</div>
      <div class="ctf-item">picoCTF</div>
      <div class="ctf-item">CyberStart America</div>

      <!-- duplicate inside SAME track -->
      <div class="ctf-item">USCC East Coast CTF 2026</div>
      <div class="ctf-item">Bearcat CTF 2026</div>
      <div class="ctf-item">Love at First Breach CTF</div>
      <div class="ctf-item">picoCTF</div>
      <div class="ctf-item">CyberStart America</div>

      <div class="ctf-item filler"></div>
      <div class="ctf-item filler"></div>
      <div class="ctf-item filler"></div>
    </div>
  </div>
</div>

<script>
  const track = document.querySelector('.ctf-track');
  const marquee = document.querySelector('.ctf-marquee');

  function updateMarquee() {
    const trackWidth = track.scrollWidth / 2; // half because content is duplicated
    marquee.style.setProperty('--track-width', trackWidth + 'px');

    // speed based on width (optional)
    marquee.style.setProperty('--scroll-duration', (trackWidth / 50) + 's');
  }

  updateMarquee();
  window.addEventListener('resize', updateMarquee);
</script>
