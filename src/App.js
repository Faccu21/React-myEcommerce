import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import "./main.css";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
//import Checkout from "./components/Checkout";



export default function App() {

  return (
    <CartProvider>
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
    </CartProvider>
  )
}




 /* 
 <Route path="/carrito" element={<Carrito />}/>
 <Route path="/checkout" element={<Checkout />}
          />*/ 
