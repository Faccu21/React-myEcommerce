import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "./main.css";
import { CartContext } from "./context/CartContext";
import Carrito from "./components/Carrito";
import { useState } from "react";
//import Checkout from "./components/Checkout";



export default function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (autos, cantidad) => {
    const autosAgregados = {...autos, cantidad};

    const estaEnElCarrito = carrito.find((products) => products.id === autosAgregados.id)

    const nuevoCarrito = [...carrito];

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;

    } else {
      nuevoCarrito.push(autosAgregados)
      
    }
    setCarrito(nuevoCarrito);
    
  }

  const cantidadDelCarrito = () => {
    return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0);
  }
  

  const precioTotal = () => {
    return carrito.reduce ((acc, prod) => acc + prod.price * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito ([]);
  }

  return (
    <CartContext.Provider value={ {carrito,agregarAlCarrito, cantidadDelCarrito, precioTotal, vaciarCarrito} }>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Vehículos para alquilar"/>}  
          />
           <Route path="/segmento/:id" element={<ItemListContainer greeting="Vehículos"/>}
          />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          
       </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}




 /* 
 <Route path="/carrito" element={<Carrito />}/>
 <Route path="/checkout" element={<Checkout />}
          />*/ 
