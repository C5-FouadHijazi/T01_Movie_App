import "./App.css";
import Homepage from "./components/home/home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/nav";
import Detiles from "./components/detiles";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/Detiles/:id"} element={<Detiles />} />
        {/* <Route path={"/Favorites"} element = {<Favorites/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
