
import { Link } from "react-router-dom"
import logo from "/src/assets/IMAGE.svg"
export default function Navbar() {
  return (
   <header className="container mx-auto">
    <nav className="flex items-center justify-between py-6">
        <a>
            <img src={logo} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
        </a>
        <ul className="flex gap-16">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/newproduct">New Product</Link>
          </li>
        </ul>
    </nav>
   </header>
  )
}
