import { MdDelete } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom"
import { myUseContext } from "../context/Context";

const SingleRecipe = ({ id, title, info }) => {
  const { deleteRecipe } = myUseContext()
  return (
    <div className="single-recipes">
        <h2>{title}</h2>
        <p>{`${info.substring(0, 150)}...`}</p>
        <div>
          <Link
            className="link" 
            to={`/recipe/${id}`}>
          <FaPlusCircle className="plus"/>See Details</Link>
          {/* <button
            type="button"
            onClick={() => deleteRecipe(id)}
          >
          <MdDelete /> 
          </button> */}
        </div>
    </div>
  )
}
export default SingleRecipe