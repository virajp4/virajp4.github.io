import WorkHero from "@/components/work/WorkHero";
import { Separator } from "@/components/ui/separator";
import WorkSection from "@/components/work/WorkSection";
import TableImage from "@/assets/work/alai/table.png";
import TimelineImage from "@/assets/work/alai/timeline.png";
import FunnelImage from "@/assets/work/alai/funnel.png";
import Sections1 from "@/assets/work/alai/sections1.png";
import Sections2 from "@/assets/work/alai/sections2.png";
import Sections3 from "@/assets/work/alai/sections3.png";
import RefactorImage from "@/assets/work/alai/refactor.png";
import ChartImage from "@/assets/work/alai/chart.png";

export default function AlaiPage() {
  return (
    <div className="flex flex-col gap-8">
      <WorkHero
        company="Alai"
        description="As a software engineer, I contribute to all parts of the product. 
        My work involves implementing new as well as enhancing the existing slide elements,
        which improves the overall presentation experience."
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Tables, Timelines, Charts & Staged Elements"
        description={
          <>
            <span>
              Tables, Timelines, Charts & Staged Elements like Funnels are vital for high quality
              visualizations. I was responsible for adding these elements end-to-end.
            </span>
            <span>
              This included making sure the AI generates informative layouts using them & showcasing
              them along with various presets & styles for user customization.
            </span>
            <span>
              Furthermore, while building one of the most customizable elements in the product, I
              also established foundational code patterns & design systems, which streamlined future
              element development for faster iteration.
            </span>
          </>
        }
        images={[TimelineImage, TableImage, ChartImage, FunnelImage]}
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Sections & Sidebars"
        description={
          <>
            <span>
              Revamped one of the most crucial elements of every presentation, the Sections. This
              included adding more ways to customize, style & position them, inherently making them
              more vibrant & appealing.
            </span>
            <span>
              I was also responsible for laying the foundation & developing the components for
              element sidebars & the various options that allow for more customization to the
              elements.
            </span>
          </>
        }
        images={[Sections2, Sections3, Sections1]}
      />
      <Separator className="opacity-30" />
      <WorkSection
        title="Core System Refactor"
        description={
          <>
            <span>
              A thorough overhaul of our primary TLDraw shape creation system focused on enhancing
              effectiveness & versatility, as well as reducing shape update latency.
            </span>
            <span>
              The refactor introduced a new, streamlined approach for creating TLDraw shapes from
              our Alai Elements, enabling us to create complex shapes with ease.
            </span>
            <span>
              This allowed for a better user experience, by allowing instantaneous shape creation &
              updates throughout the slide.
            </span>
          </>
        }
        images={[RefactorImage]}
      />
      <Separator className="opacity-30" />
    </div>
  );
}
