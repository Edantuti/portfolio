import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Section } from "./components/section";
import { List } from "./components/list";

export default function Home() {
  return (
    <main className="min-h-screen md:max-w-3xl mx-auto min-w-96 flex flex-1 flex-col border-x md:px-10 px-4 border-dashed border-gray-500 gap-10">
      <Section className="mt-12">
        <h1 className="text-xl">Edan Solomon Tuti</h1>
        <p>
          An undergrad student, pursing Bachelor of Technology at National
          Institute of Technology, Agartala. Loves exploring new tech.
        </p>
        <p>Sports: Chess</p>
        <p>Other Activities: Watching Anime, Exploration</p>
      </Section>
      <Section>
        <h2 className="text-lg underline">Experience</h2>
        <List>
          <li className="space-y-2">No Experience Yet..., Please Hire me</li>
        </List>
      </Section>
      <Section>
        <h2 className="text-lg underline">Achievements</h2>
        <List>
          <li className="space-y-2">
            <h3 className="text-base">2nd Runner-Up: Ethos Hackathon</h3>
            <div>
              <h4 className="text-sm">Description:</h4>
              <p className="text-xs">
                Ethos, hackathon conducted by IIT-Guwahati, participated in
                Software Development Track.
              </p>
            </div>
            <p>
              Project: <Link href="#project2">BloomChat</Link>
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
              <h3 className="text-base">
                Vihlog - Self Hosting Blogging Website
              </h3>
              <span>
                <SquareArrowOutUpRight className="size-4" />
              </span>
              <span className="border border-dashed rounded-full text-xs px-4 py-1 text-gray-500">
                Building
              </span>
            </a>
            <p>Tech-Stack: Supabase, NextJS, TailWindCSS, PostgreSQL</p>
          </li>
          <li className=" space-y-2" id="project2">
            <a
              href="https://github.com/Edantuti/bloomchat"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <h3 className="text-base">
                BloomChat - End to End Encrypted Chatting Application
              </h3>
              <span>
                <SquareArrowOutUpRight className="size-4" />
              </span>
              <span className="border border-dashed rounded-full text-xs px-4 py-1 text-gray-500">
                Building
              </span>
            </a>
            <p>Tech-Stack: Convex, React-Native, TweetNacl.js</p>
          </li>
          <li className="space-y-2" id="project3">
            <a
              href="https://github.com/Edantuti/hikmat-frontend"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <h3 className="text-base">Hikmat - Ecommerce Website</h3>
              <span>
                <SquareArrowOutUpRight className="size-4" />
              </span>
              <span className="border border-dashed rounded-full text-xs px-4 py-1 text-gray-500">
                Archived
              </span>
            </a>
            <p>
              Tech-Stack: React, TailWindCSS, Victory, Express, PostgreSQL,
              Redux
            </p>
          </li>
        </List>
      </Section>
      <footer className="flex items-center justify-between border-t border-dashed border-gray-400 p-2 mt-auto">
        <h4 className="font-mono text-xs text-gray-600">Edan Solomon Tuti</h4>
        <div className="font-mono text-xs text-gray-600 flex gap-4">
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
        </div>
      </footer>
    </main>
  );
}
