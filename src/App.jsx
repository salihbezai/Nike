import "./App.css";
import { Hero, Sales } from "./Components";
import { heroapi, popularsales, topratesales } from "./data/data.js";
const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={topratesales} />
      </main>
    </>
  );
};

export default App;
