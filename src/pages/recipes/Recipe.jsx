import { useNavigate, useParams } from "react-router-dom"
import { myUseContext } from "../../context/Context";
import { IoArrowBackCircle } from "react-icons/io5";
// import { useMemo } from "react";


const Recipe = () => {
    const { recipes } = myUseContext();
    const { id } = useParams()
    const navigate = useNavigate();

  //  const recipe = useMemo(()=> recipes?.find(recipe => recipe.id === id), [id, recipes])
  //  console.log(recipe)
  return (
    <section className="single-recipe">
        {/* <h2>🍕{recipe.title}</h2>
        <p>{recipe.info}</p>
        <hr/>
        <p>{recipe.method}</p>
        <hr/>
        <p><i>Cooking Time: {recipe.cookingTime} Minutes</i></p>
        <button
          type="click"
          onClick={() => { navigate("/") }}
        >
         <IoArrowBackCircle/> Back to Recipes
        </button> */}
        

        <h2>🍕{recipes[id-1].title}</h2>
        <p>{recipes[id-1].info}</p>
        <hr/>
        <p>{recipes[id-1].method}</p>
        <hr/>
        <p><i>Cooking Time: {recipes[id-1].cookingTime} Minutes</i></p>
        <button
          type="click"
          onClick={() => { navigate("/") }}
        >
         <IoArrowBackCircle/> Back to Recipes
        </button>
    </section>
  )
}

export default Recipe