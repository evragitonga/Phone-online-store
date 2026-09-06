import { Link } from "react-router"
function Home(){
  return(
    <div>
      <h1>Welcome to our Phone Online Store</h1>
      <p>We have all types of phones</p>
      <Link
      to="/shop"
      >Shop</Link>
    </div>
  )
}
export default Home