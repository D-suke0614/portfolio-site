import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Mv from "./components/mv/Mv";
import Skill from "./components/skill/Skill";

export default function Home() {
  return (
    <main className="app">
      <Mv />
      <About />
      <Skill />
      <Contact />
    </main>
  );
}
