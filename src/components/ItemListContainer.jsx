import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import data from "../data/products.json"
import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";


export const ItemListContainer = props => {
    const [products, setProducts] = useState([])

    const { id } = useParams() 

    useEffect(() => {
        
    
        const productsRef = collection (db, "products");

        getDocs(productsRef)
            .then((resp) => {
            
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )


            })
      
    }, [id]) 

    return (
    <Container className="h1">
        <h1>{props.greeting}</h1>
        
    </Container>
    )
    
} 

 /* 
 const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
            
        })
 
 promesa.then(result => { 
            if (id) {
                setProducts(
                    result.filter(products => products.segmento === id)
                )
            } else {
                setProducts(result)
            }
        })
        
   {products.length === 0 ? ( 
        <div>Loading...</div>
        ):( 
            <ItemList products={products}/>
            )}     
        
        */ 