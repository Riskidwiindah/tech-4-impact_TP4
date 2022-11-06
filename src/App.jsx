import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe"
import Blog from "./pages/Blog"
import Homepage from "./pages/Homepage"
import Skill from "./pages/Skill"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage name = {"Riski Dwi"}/>}/>
      <Route path="/about" element={<AboutMe name = {"Riski Dwi"}/>}/>
      <Route path="/skills" element={<Skill/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
    </>
  )
}

export default App
