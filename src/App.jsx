import "./App.css"
import { Hero } from "./Components"
import { heroapi } from "./data/data.js"
const App = () => {
  return (
    <>
    <main>
      <Hero heroapi={heroapi}/>
    </main>
    </>
  )
}

export default App