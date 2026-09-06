import { useContext, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "./ProductCard"
import "../index.css"

function ProductList(){
 const [search, setSearch] = useState("")
 const {data} = useContext(ProductContext)
 const filteredProducts = data.filter(product => {
  return product.name.toLowerCase().includes(search.toLowerCase())
  
 })
 return (
  <div>
    <div className="seachContainer">   
        <input type="text" placeholder="Search Product" onChange={(e) => setSearch(e.target.value)} value={search} className="searchInput"/>
    </div>
    <div className="productsContainer">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  </div>
 )
}
export default ProductList