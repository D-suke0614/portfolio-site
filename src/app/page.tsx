import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Mv from "./components/mv/Mv";

export default function Home() {
  return (
    <main className="app">
      <Mv />
      <About />
      <Contact />
    </main>
  );
}
