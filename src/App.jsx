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
    </div>
  );
}

export default App;
