import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"

function ProductList(){
 const products = useContext(ProductContext)
 return (
  <div>
    {products.map((product) => {
      <ProductCard key={product.id} product={product}/>
    })}
  </div>
 )
}
export default ProductList