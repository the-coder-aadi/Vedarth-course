# Vedarth Academy — frontend

Premium marketing + admissions frontend for the **MERN Stack + Generative AI** program.
React + Vite + Tailwind CSS. **Frontend only** — no backend, no real auth, payments, database or LLM.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
SINGLE_FILE=1 npm run build --outDir dist-single   # one self-contained index.html
```

## Structure

```
src/
  components/
    layout/      Navbar, Footer, Logo, ThemeToggle, ScrollProgress
    ui/          Button, Badge, GlassCard, SectionHeading, Section, Container,
                 Field (Input/Select/Textarea/ChoiceGroup), Modal, Accordion, Icon
    sections/    Hero, HeroVisual, KeyFacts, WhyFive, WhatYouGet, Curriculum,
                 Projects, ProjectPreview, GenerativeAI, Internship, JourneyRail,
                 HowItWorks, Pricing, FreeDemo, Audience, About, FAQ,
                 FinalCTA, DoubtSection, Contact
    assistant/   AssistantButton, AssistantWindow, ChatMessage, QuickPrompts
    application/ ApplicationModal, ApplicationForm, SuccessState, validation
  config/        academyConfig.js   <- all verified facts + contact placeholders
  data/          academyData, curriculumData, projectData, faqData
  services/      applicationService, assistantService, courseService  <- mock layer
  hooks/         useTheme, useReveal, useCountUp, useScrollLock
  context/       UIContext (opens the application modal + assistant from anywhere)
  pages/         Home
```

## Connecting your backend

Only the three files in `src/services/` talk to "the server". Replace the mocked bodies:

| Function | Suggested endpoint |
| --- | --- |
| `submitApplication(payload)` | `POST /api/applications` |
| `requestDemoSeat(payload)` | `POST /api/applications` (intent: `demo`) |
| `askAssistant(message)` | `POST /api/assistant` → RAG → knowledge base → LLM |
| `getCourse()` | `GET /api/course` |
| `getFaq()` | `GET /api/faq` |

`askAssistant` must keep returning `{ text, sources, verified }` — the chat UI renders
`sources` as chips and styles unverified answers differently.
`APPLICATION_STAGES` in `applicationService.js` mirrors the admin pipeline
(New → Contacted → Demo Scheduled → Demo Attended → Interested → Enrolled).

## Things to replace before launch

- `src/config/academyConfig.js` → `contactConfig` (WhatsApp, email, phone, Instagram, YouTube)
- `src/components/sections/FreeDemo.jsx` → demo video placeholder inside the modal
- `public/favicon.svg`, `og-placeholder.png` in `index.html`
- `src/data/projectData.js` → real project case studies once students ship them
- Testimonials: intentionally absent. Add a `testimonialData.js` + section only when real ones exist.

## Notes

- Theme: `class` strategy, tokens as RGB channel CSS variables in `src/index.css`.
  Stored in `localStorage` under `vedarth-theme`, system preference respected on first visit,
  applied pre-paint by an inline script in `index.html`.
- Motion: scroll reveals are a single `IntersectionObserver` adding `.is-visible`;
  everything collapses under `prefers-reduced-motion: reduce`.
- No fake reviews, ratings, placement numbers or partner logos anywhere in the copy.
