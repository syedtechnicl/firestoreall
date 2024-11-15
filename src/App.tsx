import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Addproduct from "./pages/addproduct/Addproduct";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";
import MyState from "./Context/data/myState";

function App() {
  return (
    <div className="App">
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
        </Router>
      </MyState>
    </div>
  );
}

export default App;

// 1:24 end
