function ProductCard({product}){
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <p>{product.price} $</p>
        <p>{product.stock}</p>
        <p>{product.brand}</p>
      </div>
    
  )
}
export default ProductCard