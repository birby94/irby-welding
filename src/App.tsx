import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Credibility } from "./components/Credibility";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
