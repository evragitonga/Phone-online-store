import { useState } from "react"
import "../index.css"
import SearchBar from "./SearchBar"
import FilteredProducts from "./FilteredProducts"

function ProductList(){
 const [search, setSearch] = useState("")
 
 return (
  <div>
    <SearchBar search={search} setSearch={setSearch}/>
    
    <FilteredProducts search={search}/>
    
  </div>
 )
}
export default ProductList