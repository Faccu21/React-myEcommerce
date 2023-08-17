import { Item } from "./Item"


export const ItemList = ({products}) => 
<div className="productos">
    {products.map(autos => 
    <Item key={autos.id} autos={autos} />)}
</div>