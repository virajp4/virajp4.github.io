import WorkHero from "@/components/work/WorkHero";
import { Separator } from "@/components/ui/separator";
import WorkSection from "@/components/work/WorkSection";
import TableImage from "@/assets/work/alai/table.png";
import TimelineImage from "@/assets/work/alai/timeline.png";
import FunnelImage from "@/assets/work/alai/funnel.png";
import Sections1 from "@/assets/work/alai/sections1.png";
import Sections2 from "@/assets/work/alai/sections2.png";
import ChartImage from "@/assets/work/alai/chart.png";

export default function AlaiPage() {
  return (
    <div className="flex flex-col gap-8">
      <WorkHero
        company="Alai"
        description={
          <>
            <span>As a software engineer, I worked across the full stack.</span>
            <span>
              Most of my recent work was on the AI agents at the heart of the
              product: systems that could edit and create entire presentations
              from a simple conversation.
            </span>
            <span>
              That meant building the agents and their tools, the real-time
              streaming behind them, and the React and FastAPI interfaces around
              them.
            </span>
            <span>
              The foundations it all ran on were shared work I helped build: the
              slide elements, the import and export pipeline, and the rendering
              platform.
            </span>
          </>
        }
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Agentic Slide Editing"
        description={
          <>
            <span>
              Designed and built a chat agent that edits Alai&apos;s classic
              slides from a plain-language request — reorder a deck, split a
              slide, swap in an image, and much more, all in one turn.
            </span>
            <span>
              It never touches the live slide. Changes land on an off-screen
              copy first, then the agent screenshots the result and checks its
              own work before calling it done.
            </span>
          </>
        }
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Presentation Creation Agent"
        description={
          <>
            <span>
              Designed and built Alai&apos;s presentation creation agent — give
              it a prompt and it generates a full slide deck. It&apos;s a
              multi-agent system (LangGraph + deepagents): a lead agent that
              hands off to smaller, specialized ones for processing input and
              searching the web.
            </span>
            <span>
              Hardened slide generation, which can produce slides in a classic
              or creative style, and wrote the billing so a failed or cancelled
              slide never gets charged.
            </span>
            <span>
              I owned both ends: the backend agent and the React frontend, a
              step-based creation flow that picks up right where you left off
              after a refresh.
            </span>
          </>
        }
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Brand Design Systems"
        description={
          <>
            <span>
              Built Alai&apos;s &quot;Design Systems&quot; feature end-to-end.
              Hand it a brand&apos;s materials — documents, decks, images, fonts
              — or just a website link, and it turns them into a reusable brand
              kit: design tokens, usage docs, and preview cards.
            </span>
            <span>
              An AI agent does the work in an isolated sandbox. Every output is
              versioned and kept private to you.
            </span>
            <span>
              On the frontend, a &quot;Your Brand&quot; area where you browse
              your design systems as cards and edit them with the agent.
            </span>
          </>
        }
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Durable Agent Streaming"
        description={
          <>
            <span>
              Rebuilt how Alai&apos;s agents stream their responses. The old
              setup ran over a single connection that died on any network blip
              or page refresh, with no way to recover.
            </span>
            <span>
              The new one is durable and resumable (built on S2): if the
              connection drops or the page reloads, it reconnects and picks up
              exactly where it left off, with nothing lost or repeated.
            </span>
            <span>
              Along the way I rewired how cancellation worked, clearing a
              recurring browser error that had thrown about a thousand
              exceptions across 645 users.
            </span>
          </>
        }
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Slide Elements, Import/Export & Rendering Platform"
        description={
          <>
            <span>
              Built the core elements people make slides from — tables, charts,
              timelines, funnels, and more — each with layouts the AI can fill
              in and styles to pick from.
            </span>
            <span>
              Owned presentation import and export pipeline: export to editable
              PowerPoints and PDFs, and import from PowerPoint, PDF, screenshot,
              or even a website link.
            </span>
          </>
        }
        images={[
          Sections1,
          TimelineImage,
          ChartImage,
          TableImage,
          FunnelImage,
          Sections2,
        ]}
      />
      <Separator className="opacity-30" />
    </div>
  );
}
