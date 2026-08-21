import { Hero } from "@/components/sections/Hero";
import { IntersectionArc } from "@/components/sections/IntersectionArc";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ResearchTeaser } from "@/components/sections/ResearchTeaser";
import { ExperienceTeaser } from "@/components/sections/ExperienceTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <IntersectionArc />
      <SelectedWork />
      <ResearchTeaser />
      <ExperienceTeaser />
    </>
  );
}
