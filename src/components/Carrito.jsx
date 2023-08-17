import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className='carrito' >
        <h1 style={{color:'darkred'}} >Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3 style={{color:'darkred'}} >{prod.marca} {prod.car_model}</h3>
                   
                    <p>Precio unidad: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad} días</p>
                    <br />
                </div>
            ))
        }
        
        { 
            carrito.length > 0 ?
            <>      
                <h2 style={{color:'darkred'}} >Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <br />
                <br />
                <Link className='end' to="/checkout">Terminar compra</Link>
            </> :
            <h2 style={{color:'darkred'}} >El carrito está vacío</h2>
        }
    </div>
    
       
       
       
        
    
  )
}

export default Carrito