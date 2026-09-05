import { useState } from "react";

function useForm () {
  const [formData,setFormData] = useState({
    name:"",
    category:"",
    price:0,
    stock:0,
    brand:""
  })
  function handleChange(e){
    const {name,value} = e.target
    setFormData(prevFormData => ({...prevFormData,[name]:value}))
  }
  return {formData,handleChange}
}

export default useForm