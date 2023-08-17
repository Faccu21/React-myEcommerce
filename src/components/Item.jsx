import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export const Item = ({autos}) => {
    return (
    <Card 
        style={{ width: '18rem' }}
        key={autos.id}
        className="float-start"
    >
        <Card.Img variant="top" src={autos.car_img} />
        
        <Card.Body>
            <Card.Title>{autos.car_model}</Card.Title>
            <Card.Text>Año {autos.car_year}</Card.Text>
            <Link to={`/item/${autos.id}`}>
                <Button style={{borderColor:'darkred', backgroundColor: 'darkred' }} variant="primary">Más info</Button>
            </Link>
        </Card.Body>
    </Card>
    )
    }

