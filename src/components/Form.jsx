import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { myUseContext } from "../context/Context";
import { toast } from "react-toastify";

const Form = () => {
    const navigate = useNavigate();
    
    const { recipes, setRecipes } = myUseContext();

    const [myNewRecipe, setMyNewRecipe] = useState(
        //See handleChange function approach
        {
            title: "",
            info: "",
            method: "",
            cookingTime: "",
        }
    );
    
    const handleChange = (e) => {
        setMyNewRecipe({ ...myNewRecipe, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (myNewRecipe.title === "" || myNewRecipe.info === "" || myNewRecipe.method === "") {
            toast.error("Please Enter a Valid Value!");
        }
        else{
            const newRecife = { id: recipes.length + 1, ...myNewRecipe };
            setRecipes([ ...recipes, newRecife ]);
            toast.success("Recipe Add!");

            setMyNewRecipe({
                title: "",
                info: "",
                method: "",
                cookingTime: "",
            })

            navigate("/");
        }
        
    }

  return (
    <article className="form">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text" 
                    name="title"
                    id="title"
                    value={myNewRecipe.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="info">Info:</label>
                <input 
                    type="text" 
                    name="info"
                    id="info"
                    value={myNewRecipe.info}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="method">Method:</label>
                <input 
                    type="text" 
                    name="method"
                    id="method"
                    value={myNewRecipe.method}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cookingTime">Cooking Time:</label>
                <input 
                    type="number"  
                    name="cookingTime"
                    id="cookingTime"
                    min="15" 
                    step="1" 
                    max="70"
                    value={myNewRecipe.cookingTime}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
            >
                add New Recipe
            </button>
        </form>
    </article>
  )
}
export default Form