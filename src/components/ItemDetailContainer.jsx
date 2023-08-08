import { useState, useEffect } from "react"

import data from "../data/products.json"
//import Container from 'react-bootstrap/Container';
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
    <div>
        <h1>Detalle del vehículo</h1>
        {products && <ItemDetail autos={products} />}
    </div>
    )
} 






 // useEffect(() => {
     //   const selectedProduct = data.find(item => item.id === Number(id));
       // if (selectedProduct) {
         //   setTimeout(() => {
           //     setProducts([selectedProduct]); 
            //}, 2000);
        //}
    //}, [id]);

    /*useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)

        })

        promesa.then(result => { 

                setProducts(result[1])
            })
    }, [])
    
     return (
    <Container className="h1">
        <h1>Detalle del vehículo</h1>
        {products.length === 0 ? ( 
        <div>Loading...</div>
        ):( 
            <ItemDetail autos={products}/>
            )}
    </Container>
    )



    const pedirItemPorId = (id) => {
    return new Promise ((resolve, rejected) => {
        
        
        const products = data.find((el) => el.id === id);

        if(products) {
            resolve(products);
        } else {
            rejected({
                error: "No hay vehículo"
        })
    }
    })
}

  const products = data.find((el) => el.id === id);

        if(products) {
            resolve(products);
        } else {
            rejected({
                error: "No hay vehículo"
        })
    }
    })
}
    
        pedirItemPorId(Number(id))
        .then((res) => {
            setProducts(res);
        })
    
    */
    
