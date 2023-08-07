import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (autos, cantidad) => {
        const autosAgregados = { ...autos, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((products) => products.id === autosAgregados.id);
   
        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(autosAgregados);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadDelCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        <CartContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            cantidadDelCarrito,
            precioTotal,
            vaciarCarrito
        } }>
            {children}
        </CartContext.Provider>
    )



} 