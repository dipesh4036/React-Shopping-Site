import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";

const App = () => {
  

  return (
    <div className="h-full max-w-screen bg-gray-500 text-white flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
};

export default App;
