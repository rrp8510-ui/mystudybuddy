This is a submission for the Hacktoberfest Weekend Challenge: Build for a Friend

What I Built

I built Study Buddy — a lightweight, distraction-free, local-first web app that combines a customizable Pomodoro Timer, interactive 3D Flashcards, and an automatic Quiz Generator into one seamless workspace.

Who I Built It For & The Problem It Solves

I built this for my close friend and study partner, Alex, who is preparing for technical certification exams and software engineering interviews.

Alex faces two major hurdles when studying:

Tool Fragmentation & Distraction: Constantly juggling between a timer app on their phone, Anki or Quizlet tabs on their browser, and messy scratchpads led to context switching, tab fatigue, and lost focus.
Subscription Paywalls & Clutter: Most modern flashcard and quiz apps are bloated with ads, account login walls, tracking, and subscription fees for basic features like custom quizzes or timer adjustments.

Alex needed a simple, calm, and unified study companion that:

Runs instantly offline with zero logins or installations.
Syncs Pomodoro focus intervals with active recall and knowledge testing.
Lets them set and customize everything — study sprint intervals, custom flashcard decks, and tailored multiple-choice quizzes.
Protects their privacy by storing all decks and study streaks locally on their machine.
Demo
Quick Launch: Download the repository, double-click index.html, and you're studying in seconds in any web browser.
Repository: https://github.com/rrp8510-ui/mystudybuddy/tree/main
Live Demo: https://rrp8510-ui.github.io/mystudybuddy/
 (via GitHub Pages)
Key Features in Action
⏱️ Customizable Pomodoro Clock: Visual circular countdown ring, customizable session times (Study / Short Break / Long Break), quick adjust buttons (+5m, -1m, etc.), and a calming Tibetan Zen Bell / Melodic Chime synthesized directly via the browser's Web Audio API.
🗂️ Interactive 3D Flashcards: Tactile 3D flip card animations (click or press Space), confidence scoring (Need Practice vs. Mastered), deck shuffling, and preloaded starter decks (Study Skills, Web Dev, General Knowledge).
📝 Adaptive Quiz Engine: Generates 4-option multiple-choice quizzes on the fly from any flashcard deck (with smart distractor sampling) OR lets the user author custom exam questions with detailed explanations and celebratory confetti.
📊 Local Storage & Privacy: Automatically tracks study streaks and focus time with 100% offline persistence and instant JSON data backup/restore.
Code

The project is built with clean, modular, dependency-free web standards for maximum portability, speed, and privacy:

Frontend: Semantic HTML5, Tailwind CSS utility classes, and custom CSS 3D transforms (preserve-3d, backface-visibility: hidden).
Offline Audio: Synthesized Web Audio API oscillators and gain envelopes for realistic bell, chime, and beep tones without relying on external .mp3 assets.
Physics-free Canvas Confetti: Custom lightweight 2D canvas particle animation for celebrations.
Storage: Browser localStorage with automated JSON export and import capabilities.
study-buddy/
├── index.html     # Semantic UI layout, SVG progress rings, and accessible modals
├── styles.css     # 3D flip card transforms, theme variables, and offline fallbacks
├── app.js         # Pomodoro state machine, Web Audio synth, flashcard & quiz engines
└── README.md      # Documentation and keyboard shortcut reference

You can view the full repository on GitHub: 👉 GitHub Repository: rrp8510-ui/mystudybuddy

{% github https://github.com/rrp8510-ui/mystudybuddy
 %}

How I Built It

To build Study Buddy, I paired with an agentic AI assistant (Google Antigravity / Gemini 3.8 Flash) to rapidly architect, implement, and verify the entire application from idea to production-ready code.

1. Collaborative Architecture & Iteration

Instead of relying on heavy frameworks (Node, Vite, React) that would require Alex to install package managers and run build servers, we designed the app to be entirely zero-install and local-first. The AI helped map out:

A responsive state machine managing Pomodoro cycles and flashcard queues.
An algorithmic distractor generator that pulls plausible wrong answers from sibling cards to create multiple-choice quizzes dynamically from any deck.
Pure CSS 3D perspective transforms for realistic card-flipping interactions with full keyboard accessibility (Space to flip, ←/→ to navigate, 1/2 to grade confidence).
2. Autonomous Verification

The agent ran headless browser execution tests via Microsoft Edge (msedge --headless --dump-dom) to ensure that all DOM nodes, audio contexts, SVG progress rings, and event handlers compiled and initialized without console errors.

Why Does Open Innovation Matter?

Open innovation is essential for educational and productivity software:

Accessibility Without Paywalls: High-quality study techniques like Active Recall, Spaced Repetition, and the Pomodoro method should not be gatekept by $15/month subscriptions or ad-riddled platforms that harvest user data.
Local-First Longevity: Closed APIs and proprietary platforms frequently change pricing models, lose student notes, or go out of business. Because Study Buddy is open-source and built on open web standards, Alex's flashcards and study history belong entirely to them.
Customizability for Neurodiversity: Every learner's brain works differently. An open codebase means anyone can tune timer durations, tweak color themes, modify audio frequencies, or add specialized keyboard shortcuts to meet their personal cognitive and accessibility needs.
My Agent Session
AI Agent Harness: Antigravity Pair-Programming Agent
Core Model: Gemini 3.8 Flash
Session Highlights: The agent explored the environment, discovered that the host machine lacked Node.js/Python runtimes, adapted the architectural strategy to build a 100% client-side zero-dependency application, generated the complete codebase, and validated DOM execution via headless Edge tests.
Session Transcript / DevRelay Tag: {% agent_session https://devrelay.io/session/your-session-id %}
Prize Categories
Primary: Build for a Friend
Secondary: Open Innovation / Open-Source AI, Productivity & Education
