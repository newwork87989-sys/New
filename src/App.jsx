import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar/Navbar'
import Home from "./pages/Home" 
import About from "./pages/About" 
import Contact from "./pages/contact" 

function App() {

  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
