import Background from "./components/Background/background";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Landing from "./components/Landing/landing";
import Projects from "./components/Projects/projects";
// import Languages from "./components/Technologies/languages";
import Technologies from "./components/Technologies/technologies";

export default function Home() {
 return (
  <>
   <Background></Background>
   <Header />
   <Landing />
   {/* <Languages username="zibixD" /> */}
   <Technologies />
   <Projects />
   <Contact />
   <Footer />
  </>
 );
}
