import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemsListContainer";
import { NAvBar } from "./components/NavBar";

export default function App() {
  return (
  <BrowserRouter>
      <NAvBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Productos"/>}
        />
         <Route path="/category/:id" element={<ItemListContainer greeting="Productos"/>}
        />
      </Routes>
  </BrowserRouter>
  )
}

 
