


const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} )  => {

    return(
    <div>
        <div className="item-count">
            <h4>Días</h4>
           <button onClick={handleRestar}>-</button> 
           <p>{cantidad}</p>
           <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-carrito" onClick={handleAgregar}>Agregar</button>
    </div>

    )
}

export default ItemCount