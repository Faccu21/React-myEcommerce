import { useState, useEffect } from "react"

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/config";


      


export const ItemDetailContainer = () => {

    const [products, setProducts] = useState(null);
    const  id  = useParams().id;


    useEffect(() => {

        const docRef = doc (db, "products", id);
        getDoc(docRef)
            .then((resp) => {
                setProducts(
                    { ...resp.data(), id: resp.id}
                )
          });
    }, [id]) 


  
    return (
    <div className="detalles">
        <h1 style={{color: 'darkred' }}>Detalle del vehículo</h1>
        {products && <ItemDetail autos={products} />}
    </div>
    )
} 






 
    
