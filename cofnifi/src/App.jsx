
import './App.css'
import NavBar from './components/navbar/NavBar'
import { Routes, Route} from 'react-router-dom';
import Landing from './pages/LandingPage/Landing';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Games from './pages/GameMenu/Games';
import Contact from './pages/Contact/Contact';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
function App() {


  return (
    <>
    <NavBar />
    
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={ < Home/>} /> 
      <Route path="/about" element={<About />} /> 
      <Route path="/games" element={<Games />} /> 
      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<SignUp />} /> 

    </Routes>
    
    </>
  )
}

export default App
