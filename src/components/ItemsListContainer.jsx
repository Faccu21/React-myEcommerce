import{ useState, useEffect } from "react"
import data from '.../data/products.json'
import Container from 'react-bootstrap/Container';

export const ItemListContainer = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
            
        })
        promesa.then(result => setProducts(result))
    }, [])

    return (
    <Container classNAme="h1">
        <h1>{props.greeting}</h1>
        {products.length == 0 ? ( 
        <div>Loading...</div>
        ):( 
            products.map(car => (
            <div key={car.id}>{car.Modelo}</div>
            ))
            )}
    </Container>
    )
}