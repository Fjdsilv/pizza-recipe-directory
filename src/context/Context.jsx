import { createContext, useContext, useState } from "react";
import { data } from "../assets/data/Data"

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [recipes, setRecipes] = useState(data);

    const deleteRecipe = (id) => {
        const newRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(newRecipes);
    }

    return (
        <AppContext.Provider value={
            {
                recipes,
                setRecipes,
                deleteRecipe,
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const myUseContext = () => useContext(AppContext);
