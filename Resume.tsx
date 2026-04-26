import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "YC Startup School India 2026",
    detail: "Selected as a Top Builder by Y Combinator for the India cohort.",
  },
  {
    title: "KRAFTON India Game Design Challenge — Top 5 Nationally",
    detail:
      "December 2025, IIT Bombay. Built a complete 3D game prototype under time pressure and pitched it live to KRAFTON India Incubator judges.",
  },
];

const projects = [
  {
    title: "Founder — AI WALLAH",
    period: "Oct 2025 – Present",
    points: [
      "Built an AI consulting agency from scratch for Indian SMEs that lack AI/tech adoption. Walked into 50+ businesses offline — coaching institutes, CA firms, law firms, car showrooms — to understand the real problems.",
      "Designed and shipped working systems: an AI-powered camera surveillance setup, a JEE mock test performance analyst (breaks down each student's mistakes by topic, concept, and difficulty), and RAG-based knowledge retrieval tools.",
    ],
  },
  {
    title: "KRAFTON Game Design Challenge — IIT Bombay (Top 5 Nationally)",
    period: "Dec 2025",
    points: [
      "Built a complete playable 3D game prototype under time pressure for a national competition. Designed core gameplay mechanics, assembled the full build using AI tools, and pitched it live to KRAFTON India Incubator judges.",
    ],
  },
  {
    title: "Viral Referral Campaign — Growth Experiment",
    period: "Oct 2025",
    points: [
      "Self-funded campus referral system. Paid ₹59 in cash instantly on signup so every user became a word-of-mouth distributor. Built a professional website to remove the trust barrier. ~$180 profit in 10 days, zero outside funding.",
    ],
  },
  {
    title: "NeuroVis — Brain Activity Visualisation",
    period: "Apr 2026",
    points: [
      "Built an interactive brain visualisation app on top of Meta's TRIBE v2 research. Integrated NiMARE / NeuroSynth decoding to map brain activation patterns against 14,000+ fMRI studies and predict emotional states in real time.",
    ],
  },
  {
    title: "AI-Built Systems & Prototypes",
    period: "2024 – Present",
    points: [
      "Built full-stack web apps with AI, voice agents, RAG agents, and MCP server integrations. I design the architecture and use AI to handle the implementation.",
      "Created a fully AI-generated video — face, voice, visuals, editing, no camera, no crew — before mainstream GenAI video tools existed. Most viewers thought it was real.",
    ],
  },
];

const skills = [
  {
    label: "AI Technologist",
    detail: "1.5+ years working with AI tools and systems daily. Deep understanding of what AI can do, how AI systems work, and where the field is heading.",
  },
  {
    label: "AI Systems",
    detail: "RAG Pipelines, Voice Agents, Camera Surveillance Systems, MCP Server Integrations, Prompt Engineering, Multi-Agent Systems, LLM API Integration.",
  },
  {
    label: "Development",
    detail: "Python, Full-Stack Web Apps with AI, System Architecture Design.",
  },
  {
    label: "Business",
    detail: "B2B Sales (50+ offline conversations), Technical Proposals, Incentive Design, Growth Systems.",
  },
];

const Resume = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Founder"
        title={
          <>
            <span className="block">Akshat Gupta —</span>
            <span className="block">
              the person behind <span className="accent-word">AI WALLAH.</span>
            </span>
          </>
        }
        description="19 years old. First-year B.Tech at NITK Suratkal. AI Technologist. Founder of AI WALLAH. This page is a quick look at the work, the skills, and the track record."
        metrics={[
          { label: "Role", value: "Founder, AI Technologist" },
          { label: "Based in", value: "NITK Suratkal, Karnataka, India" },
          { label: "Studying", value: "B.Tech, NITK Suratkal (1st year)" },
        ]}
        aside={
          <div className="space-y-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">In short</p>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.2] text-foreground">
              I build AI systems for real businesses, while still in my first year of college.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Founder of AI WALLAH. AI Technologist. The work below is what I have actually shipped so far.
            </p>
            <Button asChild size="lg" variant="outline" className="w-fit">
              <a
                href="https://www.linkedin.com/in/akshat-gupta-006188321/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        }
      />

      <section className="container py-20 sm:py-24">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <article className="panel-surface rounded-[2rem] p-8 sm:p-10">
            <span className="eyebrow">Achievements</span>
            <div className="mt-6 space-y-6">
              {achievements.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel-surface rounded-[2rem] p-8 sm:p-10">
            <span className="eyebrow">Education</span>
            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                National Institute of Technology Karnataka (NITK), Suratkal
              </h3>
              <p className="text-sm text-muted-foreground">B.Tech, First Year</p>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">Sep 2025 – 2029</p>
            </div>

            <div className="mt-10 border-t border-white/8 pt-6">
              <span className="eyebrow">Outside tech</span>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Philosophy and psychology. Thinking from first principles, questioning assumptions, and trying to understand why people behave the way they do.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <div className="mb-10 max-w-3xl space-y-4">
          <span className="eyebrow">Projects & ventures</span>
          <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            What I have actually built so far.
          </h2>
        </div>

        <div className="grid gap-5">
          {projects.map((project) => (
            <article key={project.title} className="panel-surface rounded-[2rem] p-8 sm:p-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{project.title}</h3>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">{project.period}</p>
              </div>
              <ul className="mt-5 space-y-3">
                {project.points.map((point, idx) => (
                  <li key={idx} className="text-sm leading-7 text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <div className="mb-10 max-w-3xl space-y-4">
          <span className="eyebrow">Technical skills</span>
          <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            What I can actually build with.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <article key={skill.label} className="panel-surface rounded-[1.8rem] p-7">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">{skill.label}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{skill.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-20 sm:py-24">
        <article className="hazard-stripe rounded-[1.8rem] px-6 py-7 shadow-[0_18px_50px_hsl(var(--primary)/0.16)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]">Want to talk?</p>
              <p className="mt-2 text-sm leading-7 text-primary-foreground/80 sm:text-base">
                For agency work, collaborations, or just a conversation — the contact page has the fastest way to reach me.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Contact me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-black/30 bg-black/10 text-primary-foreground hover:bg-black/20">
                <a
                  href="https://github.com/999akshatgupta-cyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </article>
      </section>
    </SiteLayout>
  );
};

export default Resume;
