import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../Context/ProductosContext";

export const ComprasPage = () => {

  const {productos} = useContext(ProductosContext)
  return (
    <>
      <h1>Compras</h1>
      <hr />
      {productos.map((producto) => (
        <Card
          key={producto.id} // Añade una key única para cada tarjeta
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
        />
      ))}
    </>
  );
};
