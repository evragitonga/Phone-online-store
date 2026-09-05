import { useContext } from "react"
import useForm from "../hook/useForm"
import { ProductContext } from "../context/ProductContext"


function NewProductForm () {
  const {formData,handleChange} = useForm()
  const {handleCreate} = useContext(ProductContext)
  function handleSubmit(e){
    e.preventDefault()
    handleCreate(formData)
  }
 return (
  <div>
    <h1>Add phone details below.</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChange} value={formData.name} name="name"/>

      <label htmlFor="category">Category</label>
      <input type="text" id="category" onChange={handleChange} value={formData.category} name="category"/>

      <label htmlFor="price">Price</label>
      <input  id="price" onChange={handleChange} value={formData.price} name="price"/>

      <label htmlFor="stock">Stock</label>
      <input id="stock" onChange={handleChange} value={formData.stock} name="stock"/>

      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" onChange={handleChange} value={formData.brand} name="brand"/>

      <button type="submit">Add Product</button>
    </form>
  </div>
 )
}
export default NewProductForm