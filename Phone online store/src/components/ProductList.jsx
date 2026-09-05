import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"

function ProductList(){
 const {data} = useContext(ProductContext)
 return (
  <div>
    {data.map((product) => (
      <ProductCard key={product.id} product={product}/>
    ))}
  </div>
 )
}
export default ProductList