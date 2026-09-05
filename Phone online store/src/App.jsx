import { useEffect, useState } from 'react'
import './App.css'
import { ProductContext } from './context/ProductContext'
import ProductList from './components/ProductList'
import NewProductForm from './components/NewProductForm'
function App() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/products").then((res) => {
      if(!res.ok){
        throw new Error("failed to fetch data")//this checks whether the response is okay if not it throws an error message if it is okay it returns the response
      }
      return res.json()
    }).then((data) => {
      setData(data)//here I take the data from the response and put it in the setData variable which updates the Data variable which was initially empty 
      setLoading(false)//we are setting loading to false since the fetching of data is complete therefore loading is done
    }).catch(
      (error) => {setLoading(false)//because once the data is fetched and there is an error loading stops
        setError(error.message)}
    )
  },[])

  function handleCreate(formData){
    fetch("http://localhost:3000/products",{
      method:"POST",
      headers:{"content-type":"Application/json"},
      body: JSON.stringify(formData)
    }).then((res) => {
      if(!res.ok){
        throw new Error("failed to send data")
      }
      return res.json()
    }).then(newProduct => {
      setData(prevData => 
        [...prevData,newProduct]
      )
    }
  ).catch((error) => {
      setError(error.message)
    })
  }

  function handleDelete(id){
    fetch(`http://localhost:3000/products/${id}`,{
      method:"DELETE"
    }).then(res => {
      if(!res.ok){
        throw new Error("failed to delete")
      }
      return res.json()
    }).then(() => (
      setData(prevData => prevData.filter(product => product.id !== id))
    )).catch(error =>{
      setError(error.message)
    })
  }
  return (
    <div>
      <ProductContext value={{data,setData,handleCreate,handleDelete}}>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        <ProductList />
        <NewProductForm />
      </ProductContext>
    </div>
    
  )
}

export default App
