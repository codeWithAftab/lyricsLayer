import logo from './logo.svg';
import './App.css';
// import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
  //   <BrowserRouter>
  //   <div className="flex h-full min-h-[100vh]">
  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //     </Routes>
  //   </div>
  // </BrowserRouter>
  <Home/>
  );
}

export default App;
