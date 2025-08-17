import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Section } from "./components/section";
import { List } from "./components/list";
import { Badge } from "./components/badge";
import { Heading } from "./components/heading";
import { Paragraph } from "./components/paragraph";

export default async function Home() {
  return (
    <main className="min-h-screen md:max-w-3xl mx-auto min-w-96 flex flex-1 flex-col border-x md:px-10 px-4 border-dashed border-gray-500 gap-10 bg-gray-100">
      <Section className="mt-12">
        <h1 className="md:text-2xl text-xl font-semibold">Edan Solomon Tuti</h1>
        <p>
          An undergrad student, pursing Bachelor of Technology at National
          Institute of Technology, Agartala. Loves exploring new tech.
        </p>
        <p>Sports: Chess</p>
        <p>Other Activities: Watching Anime, Exploration</p>
      </Section>
      <Section>
        <h2 className="text-lg underline font-medium">Experience</h2>
        <List>
          <li className="space-y-2">
            <h3 className="text-base font-medium">
              Full Stack Engineer Intern, Kickoff Labs
              <Badge>
                Dec 2024 - Feb 2025 
              </Badge>
            </h3>
            <div className="space-y-1">
              <h4 className="text-sm">Work Details:</h4>
              <Paragraph>
                Integrated Salesforce into the system, for retrieving customer details. 
              </Paragraph>
              <Paragraph>
                Optimized SQL queries by implementing indexes and monitored performance using sentry and silk. 
              </Paragraph>
              <Paragraph>
                Added Unit Tests on Frontend using React Testing Library and Vitest, and Backend using pytest.
              </Paragraph>
            </div>
          </li>
        </List>
      </Section>
      <Section>
        <h2 className="text-lg underline font-medium">Achievements</h2>
        <List>
          <li className="space-y-2">
            <Heading> 
              2nd Runner-Up: Ethos Hackathon
            </Heading>
            <div>
              <h4 className="text-sm">Description:</h4>
              <Paragraph>
                Ethos, hackathon conducted by IIT-Guwahati, participated in
                Software Development Track.
              </Paragraph>
            </div>
            <p>
              Project: <Link href="#project2">BloomChats</Link>
            </p>
          </li>
        </List>
      </Section>
      <Section>
        <h2 className="text-lg underline">Projects</h2>
        <List className="space-y-4">
          <li className="space-y-2">
            <a
              href="https://github.com/Edantuti/vihlog"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <Heading> 
                Indielog - Self Hosting Blogging Website
              </Heading>
                <SquareArrowOutUpRight className="size-3" />
             <Badge> 
                Building
              </Badge>
            </a>
            <p>Tech-Stack: Supabase, NextJS, TailWindCSS, PostgreSQL</p>
          </li>
          <li className=" space-y-2" id="project2">
            <a
              href="https://github.com/Edantuti/bloomchats"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <Heading> 
                BloomChats - End to End Encrypted Chatting Application
              </Heading>
                <SquareArrowOutUpRight className="size-3" />
             <Badge> 
                Building
              </Badge>
            </a>
            <p>Tech-Stack: Convex, React-Native, TweetNacl.js</p>
          </li>
          <li className="space-y-2" id="project3">
            <a
              href="https://github.com/Edantuti/hikmat-frontend"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <Heading> 
                Hikmat - Ecommerce Website
              </Heading>
                <SquareArrowOutUpRight className="size-3" />
             <Badge> 
                Archived
              </Badge>
            </a>
            <p>
              Tech-Stack: React, TailWindCSS, Victory, Express, PostgreSQL,
              Redux
            </p>
          </li>
        </List>
      </Section>
      <footer className="font-mono text-xs text-gray-600 flex items-center justify-between border-t border-dashed border-gray-400 p-2 mt-auto">
        <h4 className="">Edan Solomon Tuti</h4>
        <div className="flex gap-4">
          <a
            href="https://x.com/edantuti11"
            target="_blank"
            title="Twitter Account"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/edan-tuti"
            target="_blank"
            title="LinkedIn Account"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Edantuti"
            target="_blank"
            title="Github Account"
          >
            Github
          </a>
        </div>
      </footer>
    </main>
  );
}
