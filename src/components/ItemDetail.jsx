

export const ItemDetail = ({autos}) => {
    return (
        <>
            <div>{autos.marca}</div>
            <div>{autos.car_model}</div> 
            <div>{autos.car_year}</div> 
            <img src={autos.car_img} alt={autos.car_model} />
        </>
        
        )
    }

    