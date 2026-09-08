function SearchBar({search,setSearch}){
  return(
    <div className="seachContainer">   
        <input type="text" placeholder="Search Product" onChange={(e) => setSearch(e.target.value)} value={search} className="searchInput"/>
    </div>
  )
}
export default SearchBar