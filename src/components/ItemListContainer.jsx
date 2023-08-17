import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


export const ItemListContainer = props => {
    const [products, setProducts] = useState([])

    const { id } = useParams() 

    useEffect(() => {
        
    
        const productsRef = collection (db, "products");

        const q = id ? query(productsRef, where("segmento","==", id)) : productsRef;


        getDocs(q)
            .then((resp) => {
            
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )


            })
      
    }, [id]) 

    return (
        <Container className="container" style={{fontFamily:'Times New Roman' }}>
            <h1>{props.greeting}</h1>
            {products.length === 0 ? ( 
            <div style={{color: 'darkred'}}>Loading...</div>
            ):( 
             <ItemList products={products}/>
            )}     
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
        
<Container className="h1">
        <h1>{props.greeting}</h1>
   {products.length === 0 ? ( 
        <div>Loading...</div>
        ):( 
            <ItemList products={products}/>
            )}     
     </Container>
    )     
        */ 