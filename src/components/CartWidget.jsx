import { Link } from "react-router-dom"
import cart from "../assets/cart.png"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const styles = {
    img: {
        height: "2rem",
        width: "auto",
    },
    span: {
        color:"white",
        paddingLeft: 10,

    }
}

export const CartWidget = () => {
    const { cantidadDelCarrito } = useContext(CartContext);

    return (
        <div>
             <Link to="/carrito"><img src={cart} style={styles.img} alt="Shop" /> <span style={styles.span}>{cantidadDelCarrito()}</span> </Link>
        </div>
    )  
 
}