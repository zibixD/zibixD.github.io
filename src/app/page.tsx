import Background from "./components/Background/Background";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import Projects from "./components/Projects/projects";
import Technologies from "./components/Technologies/technologies";

export default function Home() {
 return (
  <>
   <Background></Background>
   <Header />
   <Landing />
   <Technologies />
   <Projects />
  </>
 );
}
