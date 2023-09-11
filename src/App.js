import Landingpage from './landingpage/landingpage';
import About from './about/about';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/about" element={<About />} />
      
      </Routes>
</BrowserRouter>
    
    </div>
  );
}

export default App;
