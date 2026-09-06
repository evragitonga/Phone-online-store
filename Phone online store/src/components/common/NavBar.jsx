import { Link } from "react-router"
function NavBar(){
  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      <Link to="/shop">
                Shop
      </Link>
      <Link to="/admin/portal">
        Admin portal
      </Link>

    </nav>
  )
}
export default NavBar