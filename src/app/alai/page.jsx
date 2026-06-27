import WorkHero from "@/components/work/WorkHero";
import { Separator } from "@/components/ui/separator";
import WorkSection from "@/components/work/WorkSection";
import TableImage from "@/assets/work/alai/table.png";
import TimelineImage from "@/assets/work/alai/timeline.png";
import FunnelImage from "@/assets/work/alai/funnel.png";
import Sections1 from "@/assets/work/alai/sections1.png";
import Sections2 from "@/assets/work/alai/sections2.png";
import ChartImage from "@/assets/work/alai/chart.png";
import AE1Image from "@/assets/work/alai/ae1.png";
import AE2Image from "@/assets/work/alai/ae2.png";
import AE3Image from "@/assets/work/alai/ae3.png";
import AE4Image from "@/assets/work/alai/ae4.png";
import CF1Image from "@/assets/work/alai/cf1.png";
import CF2Image from "@/assets/work/alai/cf2.png";
import CF3Image from "@/assets/work/alai/cf3.png";
import CF4Image from "@/assets/work/alai/cf4.png";
import CF5Image from "@/assets/work/alai/cf5.png";
import DS1Image from "@/assets/work/alai/ds1.png";
import DS2Image from "@/assets/work/alai/ds2.png";
import DS3Image from "@/assets/work/alai/ds3.png";
import DS4Image from "@/assets/work/alai/ds4.png";
import S1Image from "@/assets/work/alai/s1.png";
import S2Image from "@/assets/work/alai/s2.png";

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
              I also owned some of the core foundations it all ran on: the slide
              elements, the import and export pipeline, and the rendering
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
        images={[AE1Image, AE2Image, AE3Image, AE4Image]}
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
              I owned both ends: the backend agent and the React frontend, a
              step-based creation flow that picks up right where you left off
              after a refresh.
            </span>
          </>
        }
        images={[CF1Image, CF2Image, CF3Image, CF4Image, CF5Image]}
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
              An AI agent does the work in an isolated E2B sandbox. Every output
              is versioned and kept private to you, thanks to Amazon S3.
            </span>
            <span>
              On the frontend, a &quot;Your Brand&quot; area where you browse
              your design systems as cards and edit them with the agent.
            </span>
          </>
        }
        images={[DS1Image, DS2Image, DS3Image, DS4Image]}
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
              The new one was durable and resumable (built with S2.dev): if the
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
        images={[S1Image, S2Image]}
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Slide Elements, Import/Export & Rendering Platform"
        description={
          <>
            <span>
              Tables, Timelines, Charts & Staged Elements like Funnels are vital
              for high quality visualizations. I was responsible for adding
              these elements end-to-end.
            </span>
            <span>
              Owned presentation import and export pipeline: export to editable
              PowerPoints and PDFs, and import from PowerPoint, PDF, screenshot,
              or even a website link.
            </span>
            <span>
              Also worked with designers & developed the core components on the
              frontend that allow for more customization to the presentation.
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
