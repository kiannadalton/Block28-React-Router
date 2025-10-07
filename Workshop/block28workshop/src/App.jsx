import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blue">Blue</NavLink>
          <NavLink to="/red">Red</NavLink>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/blue" element={<Blue />}></Route>
            <Route path="/red" element={<Red />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
