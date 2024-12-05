import Image from "next/image";
import Hero from "./components/Hero";
import ProjectManagement from "./components/ProjectManagement";
import Section from "./components/Section";
import Customize from "./components/Customize";
import WorkSection from "./components/WorkSection";
import Sponser from "./components/Sponser";


export default function Home() {
  return (
    <>
    <Hero />
    <ProjectManagement />
    <Section />
    <Customize />
    <WorkSection />
    <Sponser />
    </>
  );
}
