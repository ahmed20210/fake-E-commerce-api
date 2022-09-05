import Header from "./components/Header";
import "./App.css";
import Docs from "./components/Docs";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Router>
      <div className=" relative pt-10">
      <div className="bg-slate-200 text-lg text-fuchsia-800 p-5 z-50 absolute bottom-0 right-0 w-screen">

        made with Express by <a href="https://sharabash.herokuapp.com/" target="_blank">Ahmed Sharabash</a>
      </div>
      </div>
    </div>
  );
}

export default App;
