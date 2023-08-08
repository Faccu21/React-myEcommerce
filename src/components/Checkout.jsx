import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";


export const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection (db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por la compra</h1>
                <p>En breve te llegará un mail con los pasos a seguir</p>
                <h5>El código de tu compra es: {pedidoId}</h5>
            </div>
        )
    }


    return (

        <div>
        <h1>Terminar compra</h1>
        <form onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button type="submit">Comprar</button>

        </form>
    </div>
    )

}  