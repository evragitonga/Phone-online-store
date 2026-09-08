import { useContext } from "react"
import useForm from "../hook/useForm"
import { ProductContext } from "../context/ProductContext"
import "../index.css"

function NewProductForm () {
  const {formData,handleChange,setFormData} = useForm()
  const {handleCreate} = useContext(ProductContext)
  function handleSubmit(e){
    e.preventDefault()
    handleCreate(formData)
    
    setFormData({
      name:"",
      category:"",
      price:0,
      stock:0,
      brand:""
    })
    
  }
 return (
  <div className="formPage">
    <div className="formContainer">    
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} value={formData.name} name="name" placeholder="eg. Samsung Galaxy S24"/>

        <label htmlFor="category">Category</label>
        <input type="text" id="category" onChange={handleChange} value={formData.category} name="category" placeholder="eg. Smartphones"/>

        <label htmlFor="price">Price</label>
        <input  id="price" onChange={handleChange} value={formData.price} name="price" />

        <label htmlFor="stock">Stock</label>
        <input id="stock" onChange={handleChange} value={formData.stock} name="stock" />

        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" onChange={handleChange} value={formData.brand} name="brand" placeholder="eg. Samsung"/>

        <button type="submit">Submit</button>
      </form>
    </div>  
  </div>
 )
}
export default NewProductForm