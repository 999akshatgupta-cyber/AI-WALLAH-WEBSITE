import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/999akshatgupta@gmail.com";

const auditSteps = [
  {
    title: "1. We talk",
    description:
      "A short call or meeting where you tell us how the business runs today, what is taking up most of the team's time, and where things are slowing down.",
  },
  {
    title: "2. We map the workflow",
    description:
      "We go a level deeper and look at the actual flow of work — which tools you use, where data is moving by hand, where customer interactions are getting repeated.",
  },
  {
    title: "3. You get a clear plan",
    description:
      "We tell you exactly where AI fits, what it would cost, what it would save, and the order to build it in. If it doesn't make sense for you yet, we'll say that too.",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          message,
          _subject: "New enquiry from AI WALLAH website",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      toast.success("Message sent. Akshat will get back to you within a day or two.");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Please email 999akshatgupta@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            <span className="block">Tell us how your</span>
            <span className="block">
              business <span className="accent-word">actually</span> runs.
            </span>
          </>
        }
        description="Send a short note about your business and where the friction is. We'll get back to you and figure out, together, whether AI is the right fit for what you're trying to fix."
        metrics={[
          { label: "Email", value: "999akshatgupta@gmail.com" },
          { label: "Phone", value: "+91 77375 72066" },
          { label: "Based in", value: "NITK Suratkal, Karnataka, India" },
        ]}
        aside={
          <div className="space-y-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">No pressure</p>
            <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.2] text-foreground">
              Even if you just want to understand what AI can do for your business, write in.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Not every business needs AI today. We will tell you that honestly. The first conversation is free.
            </p>
          </div>
        }
      />

      <section className="container py-20 sm:py-24">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
          <article className="panel-surface rounded-[2rem] p-8 sm:p-10">
            <span className="eyebrow">Send a message</span>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Your name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Business / company name
                </label>
                <Input
                  id="company"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="The name of your business"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  What is the work that takes up most of your team's time?
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="A few lines is enough — what kind of work is repetitive, slow, or done by hand right now."
                  required
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>

              <p className="text-xs leading-6 text-muted-foreground">
                Or just email <a className="text-foreground underline-offset-4 hover:underline" href="mailto:999akshatgupta@gmail.com">999akshatgupta@gmail.com</a> directly.
              </p>
            </form>
          </article>

          <div className="grid gap-5">
            <article className="panel-surface rounded-[2rem] p-8">
              <span className="eyebrow">Reach me directly</span>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:999akshatgupta@gmail.com"
                    className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    <span>999akshatgupta@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917737572066"
                    className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+91 77375 72066</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/akshat-gupta-006188321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span>linkedin.com/in/akshat-gupta-006188321</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/999akshatgupta-cyber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4 text-primary" />
                    <span>github.com/999akshatgupta-cyber</span>
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Based in NITK Suratkal, Karnataka, India</span>
                  </span>
                </li>
              </ul>
            </article>

            {auditSteps.map((step) => (
              <article key={step.title} className="panel-surface rounded-[1.8rem] p-7">
                <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold tracking-tight leading-[1.2] text-foreground">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </article>
            ))}

            <article className="hazard-stripe rounded-[1.8rem] px-6 py-6 shadow-[0_18px_50px_hsl(var(--primary)/0.16)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em]">Honest first call</p>
              <p className="mt-3 text-sm leading-7 text-primary-foreground/80 sm:text-base">
                The first conversation is free. We will tell you straight up if AI is right for your business right now, or if it can wait.
              </p>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
