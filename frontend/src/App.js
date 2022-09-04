import {Route,Routes} from "react-router-dom"
import Index from "./pages/Index";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/productos" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
