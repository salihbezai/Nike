import { FlexContent, Hero, Sales } from "./Components";
import {
  heroapi,
  popularsales,
  topratesales,
  highlight,
  sneaker,
} from "./data/data.js";
const App = () => {
  return (
    <>
      <main className="flex flex-col gap-50 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
};

export default App;
