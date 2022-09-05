import {Route,Routes} from "react-router-dom"
import Client from "./pages/Client";
import Index from "./pages/Index";
import Product from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/clientes" element={<Client />} />
      </Routes>
    </div>
  );
}

export default App;
