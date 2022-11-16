import "./App.css"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <Navbar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  )
}

export default App