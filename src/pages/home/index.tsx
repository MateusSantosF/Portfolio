import About from "@/modules/Home/Components/AboutSection";
import LandPage from "@/modules/Home/Components/LandpageSection";
import Projects from "@/modules/Home/Components/ProjectsCardsSection";
import AppContainer from "@shared/components/AppContainer";

function Home() {
  return (
    <main>
      <AppContainer>
        <LandPage />
        <Projects />
        <About />
      </AppContainer>
    </main>
  );
}
export default Home;
