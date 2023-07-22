import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import SearchTrain from "./pages/Search.js";

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Navbar/>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<SearchTrain/>}/>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
