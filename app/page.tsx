import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Badge } from "./components/badge";
import { Heading } from "./components/heading";
import { List } from "./components/list";
import { Paragraph } from "./components/paragraph";
import { Section } from "./components/section";

const socialLinks = [
  { label: "Twitter", href: "https://x.com/edantuti11", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/in/edan-tuti", icon: Linkedin },
  { label: "Github", href: "https://github.com/Edantuti", icon: Github },
];

export default async function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.13),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_20%),#020817] text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-slate-800 bg-slate-950/80 shadow-[0_30px_80px_rgba(2,6,23,0.8)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,212,191,0.06),transparent_30%,rgba(168,85,247,0.06))]" />

          <div className="relative px-5 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
            <header className="flex flex-col gap-5 border-b border-slate-800 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-teal-400">
                  Portfolio
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Edan Solomon Tuti
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge>Available for work</Badge>
                <Badge>Software Engineer</Badge>
              </div>
            </header>

            <Section className="mt-8 gap-6 md:mt-10">
              <div className="grid gap-6 lg:grid-cols-[1.7fr_0.9fr] lg:items-start">
                <div className="space-y-5">
                  <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                    An undergrad student pursuing a Bachelor of Technology at the National
                    Institute of Technology, Agartala. I enjoy building products, learning new
                    technologies, and turning ideas into polished experiences.
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm text-slate-200">
                    <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-slate-200">
                      Web Development
                    </span>
                    <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-slate-200">
                      Full Stack
                    </span>
                    <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-slate-200">
                      Problem Solving
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[inset_0_1px_0_rgba(148,163,184,0.12)]">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Quick facts</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-300">
                    <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2">
                      <span>Sports</span>
                      <span className="font-medium text-white">Chess</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2">
                      <span>Interests</span>
                      <span className="font-medium text-white">Anime</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>Passion</span>
                      <span className="font-medium text-white">Exploration</span>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section className="mt-8 md:mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                Experience
              </h2>

              <List className="grid gap-4">
                <li className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.5)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-slate-700">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Full Stack Engineer Intern
                      </h3>
                      <p className="mt-1 text-base text-teal-400">Kickoff Labs</p>
                    </div>
                    <Badge>Internship · Dec 2024 - Feb 2025</Badge>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      <Paragraph>
                        Integrated Salesforce into the system to retrieve customer data more reliably.
                      </Paragraph>
                    </div>
                    <div className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      <Paragraph>
                        Optimized SQL queries by adding indexes and monitored performance using Sentry and Silk.
                      </Paragraph>
                    </div>
                    <div className="flex gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      <Paragraph>
                        Added frontend unit tests with React Testing Library and Vitest, and backend tests with pytest.
                      </Paragraph>
                    </div>
                  </div>
                </li>
              </List>
            </Section>

            <Section className="mt-8 md:mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                Achievements
              </h2>
              <List className="grid gap-4 md:grid-cols-1">
                <li className="rounded-2xl border border-slate-800 bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(15,23,42,0.9))] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                  <Heading>2nd Runner-Up: Ethos Hackathon</Heading>
                  <div className="mt-3 space-y-2 text-sm text-slate-300">
                    <Paragraph>
                      Ethos, a hackathon conducted by IIT-Guwahati, was participated in the Software Development Track.
                    </Paragraph>
                    <p className="pt-1 text-slate-200">
                      Project: <Link href="#project2" className="font-medium text-teal-400 underline-offset-4 hover:underline">BloomChats</Link>
                    </p>
                  </div>
                </li>
              </List>
            </Section>

            <Section className="mt-8 md:mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                Projects
              </h2>
              <List className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <li id="project1" className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_8px_25px_rgba(15,23,42,0.5)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_20px_35px_rgba(15,23,42,0.7)]">
                  <a
                    href="https://github.com/Edantuti/vihlog"
                    target="_blank"
                    className="flex items-start justify-between gap-3"
                  >
                    <Heading>Indielog</Heading>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-400" />
                  </a>
                  <p className="mt-3 text-sm text-slate-300">
                    Self-hosting blogging website for content publishing and personal writing.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">Supabase</span>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">Next.js</span>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">Tailwind</span>
                  </div>
                  <div className="mt-4">
                    <Badge>Building</Badge>
                  </div>
                </li>

                <li id="project2" className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_8px_25px_rgba(15,23,42,0.5)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_20px_35px_rgba(15,23,42,0.7)]">
                  <a
                    href="https://github.com/Edantuti/bloomchats"
                    target="_blank"
                    className="flex items-start justify-between gap-3"
                  >
                    <Heading>BloomChats</Heading>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
                  </a>
                  <p className="mt-3 text-sm text-slate-300">
                    End-to-end encrypted chat application focused on privacy and secure communication.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">Convex</span>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">React Native</span>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">TweetNacl.js</span>
                  </div>
                  <div className="mt-4">
                    <Badge>Building</Badge>
                  </div>
                </li>

                <li id="project3" className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_8px_25px_rgba(15,23,42,0.5)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_20px_35px_rgba(15,23,42,0.7)] md:col-span-2 xl:col-span-1">
                  <a
                    href="https://github.com/Edantuti/hikmat-frontend"
                    target="_blank"
                    className="flex items-start justify-between gap-3"
                  >
                    <Heading>Hikmat</Heading>
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
                  </a>
                  <p className="mt-3 text-sm text-slate-300">
                    E-commerce website with dashboard-driven product and storefront workflows.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">React</span>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">Tailwind</span>
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1">Express</span>
                  </div>
                  <div className="mt-4">
                    <Badge>Archived</Badge>
                  </div>
                </li>
              </List>
            </Section>

            <footer className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <h4 className="font-medium text-slate-200">Edan Solomon Tuti</h4>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1.5 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-slate-50"
                    title={`${label} Account`}
                  >
                    <Icon className="size-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
