import { Hero } from "@/components/sections/Hero";
import { IntersectionArc } from "@/components/sections/IntersectionArc";
import { BuildingNotice } from "@/components/sections/BuildingNotice";

export default function Home() {
  return (
    <>
      <Hero />
      <IntersectionArc />
      <BuildingNotice />
    </>
  );
}
