import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SearchTrain from "./components/searchtrain";

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Navbar/>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/searchtrain" element={<SearchTrain/>}/>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
