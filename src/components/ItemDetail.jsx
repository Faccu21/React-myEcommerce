import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
//import { CartContext } from "../context/CartContext";


export const ItemDetail = ({ autos }) => {

  const {carrito, agregarAlCarrito } = useContext(CartContext);

  //const { carrito, agregarAlCarrito} = useContext(CartContext);
  //console.log(carrito);

  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad -1)
  }

  const handleSumar = () => {
      setCantidad(cantidad +1)
  }

  


    return (
      <>
        <div>{autos.marca}</div>
        <div>{autos.car_model}</div>
        <div>{autos.car_year}</div>
        <div>{autos.price}</div>
        <img src={autos.car_img} alt={autos.car_model} />
        <ItemCount
       cantidad={cantidad}
       handleSumar={handleSumar}
       handleRestar={handleRestar}
       handleAgregar={() => { agregarAlCarrito(autos, cantidad)}}
        />
      </>
    );
  };
    