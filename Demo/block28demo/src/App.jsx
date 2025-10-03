// 👉 STEP 2 - React Router imports (Routes, Route)
//components
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import ItemsList from "./components/ItemsList";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Penguin&apos;s Emporium</h1>
        <Navbar />
      </nav>
      {/* 👉 STEP 3 - Build Routes for Home, ItemsList and ItemDetails */}

      {/* Things in Routes will not show until triggered */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/:itemId" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
