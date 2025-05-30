import Header from "@/components/header";
import HeroSection from "@/components/hero";
import About from "@/components/about";
import ProjectsSection from "@/components/project";
import Experience from "@/components/exp";
import CompactContact from "@/components/contact";
import PortfolioFooter from "@/components/footer";
export default function Home (){
  return(
    <div>
      <Header />
      <HeroSection />
      <About />
      <ProjectsSection />
      <Experience></Experience>
      <CompactContact></CompactContact>
      <PortfolioFooter></PortfolioFooter>
    </div>
  )
}
