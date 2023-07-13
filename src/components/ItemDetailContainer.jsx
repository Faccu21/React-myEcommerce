import { useState, useEffect } from "react"

import data from "../data/products.json"
import Container from 'react-bootstrap/Container';
import { ItemDetail } from "./ItemDetail";



export const ItemDetailContainer = props => {
    const [products, setProducts] = useState([])

    

    useEffect(() => {
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
}