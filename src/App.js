import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";



export default function App() {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Vehículos para alquilar"/>}  
        />
         <Route path="/marca/:id" element={<ItemListContainer greeting="Vehículos"/>}
        />
        <Route path="/item/:id" element={<ItemDetailContainer/>}
        />
      </Routes>
  </BrowserRouter>
  )
}




 
