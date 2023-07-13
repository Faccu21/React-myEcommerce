import { Item } from "./Item"


export const ItemList = ({products}) => products.map(autos => <Item key={autos.id} autos={autos} />)