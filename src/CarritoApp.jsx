import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./Context/ProductosProvider";


export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ComprasPage />}></Route>
          <Route path="/carrito" element={<CarritoPage />}></Route>
          <Route path="/*" element={<Navigate to={"/"} />}></Route>
        </Routes>
      </div>
    </ProductosProvider>
  );
};
