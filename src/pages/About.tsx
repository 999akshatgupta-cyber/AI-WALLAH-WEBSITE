import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

const values = [
  {
    title: "We start from the workflow, not the tool",
    description:
      "Before we talk about AI, we sit with the business owner and understand how the work actually moves day to day. Only then do we decide what to automate.",
  },
  {
    title: "Built for the business, not a template",
    description:
      "Every business runs differently. We build the system around how the owner already works, with the customisations they want — not a copy-paste setup.",
  },
  {
    title: "End-to-end, not just a demo",
    description:
      "We don't drop a tool and walk away. We integrate the system into the business, train the team, and make sure it actually runs in real conditions.",
  },
];

const timeline = [
  {
    label: "Where it started",
    title: "Talking to real businesses",
    description:
      "AI WALLAH started with one observation: most Indian SMEs have no idea what AI can already do for them. So we went and met them — coaching institutes, CA firms, law firms, car showrooms — over 50 offline conversations.",
  },
  {
    label: "What we are doing now",
    title: "Shipping working systems",
    description:
      "We are building real systems for real clients. A JEE mock-test performance analyst for a coaching institute, a customer-query agent for a service business, custom workflow automations for CA firms.",
  },
  {
    label: "Where we are going",
    title: "From projects to a productised offer",
    description:
      "Every business we work with teaches us where AI fits cleanly and where it doesn't. The plan is simple: keep building, find the patterns, and turn the strongest fit into something we can deliver again and again.",
  },
];

const About = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={
          <>
            <span className="block">We help Indian SMEs</span>
            <span className="block">
              put <span className="accent-word">AI</span> inside their daily workflow.
            </span>
          </>
        }
        description="AI WALLAH is an AI consulting agency. We work with small and mid-sized Indian businesses that are already running well but haven't yet seen what AI can do for the work they do every day."
        metrics={[
          { label: "What we are", value: "AI consulting agency for Indian SMEs" },
          { label: "What we do", value: "Map the workflow, build the system, integrate it end-to-end" },
          { label: "Who we work with", value: "Coaching institutes, CA firms, law firms, service businesses" },
        ]}
        aside={
          <div className="space-y-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">In one line</p>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.2] text-foreground">
              We make AI useful for businesses that don't have the time to figure it out themselves.
            </h2>
          </div>
        }
      />

      <section className="container py-24 sm:py-32">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <article className="panel-surface rounded-[2rem] p-8 sm:p-10">
            <span className="eyebrow">Why this exists</span>
            <div className="mt-6 space-y-5 text-sm leading-8 text-muted-foreground sm:text-base">
              <p>
                There are thousands of small and mid-sized businesses in India that are already making good revenue. They have a working business, a real customer base, and a team that runs the day-to-day. What most of them don't have is awareness of what AI can actually do for them.
              </p>
              <p>
                A lot of the work happening inside these businesses — copying data from one place to another, answering the same customer questions, preparing the same reports every week, following up with the same kind of leads — can be done by an AI system today. The owners aren't ignoring AI. They just haven't had anyone come and show them, in their own context, where it fits.
              </p>
              <p>
                That's where AI WALLAH comes in. We meet the business, sit with the owner, understand exactly how the work flows, and then build an AI-integrated system that fits that flow. Not a generic tool. A real system, customised for them, integrated into the business end-to-end.
              </p>
              <p>
                If it saves them time, reduces cost, or removes a bottleneck, we charge for the build. That's the model. Simple.
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            {values.map((value) => (
              <article key={value.title} className="panel-surface rounded-[1.8rem] p-7">
                <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold tracking-tight leading-[1.2] text-foreground">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 sm:py-32">
        <div className="mb-8 max-w-3xl space-y-4">
          <span className="eyebrow">Where we are right now</span>
          <h2 className="text-[clamp(1.8rem,5vw,3.8rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            Still early. Already shipping.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {timeline.map((item) => (
            <article key={item.label} className="panel-surface rounded-[2rem] p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">{item.label}</p>
              <h3 className="mt-5 text-[clamp(1.25rem,3vw,1.75rem)] font-semibold tracking-tight leading-[1.2] text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default About;
