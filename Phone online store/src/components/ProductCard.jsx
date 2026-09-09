import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import "../index.css"

function ProductCard({product}){
  const {handleDelete} = useContext(ProductContext)
  return (
    <div className="productCard">
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.stock}</p>
        <p>{product.brand}</p>
        <button onClick={() => {handleDelete(product.id)}}>DELETE</button>
      </div>
    
  )
}
export default ProductCard