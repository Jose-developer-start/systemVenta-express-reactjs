import {Route,Routes} from "react-router-dom"
import Client from "./pages/Client";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Ventas from "./pages/Ventas";
//Toastify
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/clientes" element={<Client />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
