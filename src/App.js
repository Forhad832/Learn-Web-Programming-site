
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import CSS from './components/Pages/CSS/CSS';
import Homepage from './components/Pages/Homepage';
import HTML from './components/Pages/HTML/HTML';
import Javascript from './components/Pages/javascript/Javascript';
import Project from './components/Pages/Project/Project';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
       <Routes>
        <Route path='/home' element={<Homepage />}/>
        <Route path='/' element={<Homepage />}/>
        <Route path='/html' element={<HTML />}/>
        <Route path='/css' element={<CSS/>}/>
        <Route path='/css/:title' element={<CSS/>}/>
        <Route path='/javascript'  element={<Javascript />}/>
        <Route path='/projects'  element={<Project />}/>
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
