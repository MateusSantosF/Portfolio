import About from "@/modules/Home/Components/AboutSection";
import LandPage from "@/modules/Home/Components/LandpageSection";
import Projects from "@/modules/Home/Components/ProjectsCardsSection";


function Home() {
  return (
    <main>
     <LandPage />
     <Projects />
     <About />
    </main>
  );
}
export default Home;