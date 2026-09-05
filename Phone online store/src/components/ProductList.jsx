import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"

function ProductList(){
 const [search, setSearch] = useState("")
 const {data} = useContext(ProductContext)
 const filteredProducts = data.filter(product => {
  return product.name.tolowercase().includes(search.tolowercase())
  
 })
 return (
  <div>
    <input type="text" placeholder="Search Product" onChange={(e) => setSearch(e.target.value)} value={search}/>
    {filteredProducts.map((product) => {
      <ProductCard key={product.id} product={product}/>
    })}
  </div>
 )
}
export default ProductList