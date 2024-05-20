import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div className="wrapper">
            <Link to="/"><h1>🍕Pizza Recipe Directory</h1></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addRecipe">Add Recipe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
export default Header