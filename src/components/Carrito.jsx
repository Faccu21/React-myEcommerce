import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div >
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((autos) => (
                <div key={autos.id}>
                    <br />
                    <h3>{autos.marca}</h3>
                    <p>Precio unit: ${autos.price}</p>
                    <p>Precio total: ${autos.price * autos.cantidad}</p>
                    <p>Cant: {autos.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío : </h2>
        }
        
    </div>
  )
}

export default Carrito