import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"
function FilteredProducts({search}){
  const {data} = useContext(ProductContext)
  const filteredProducts = data.filter(product => {
  return product.name.toLowerCase().includes(search.toLowerCase())})
  return(
    <div className="productsContainer">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}
export default FilteredProducts