import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./pages/shareLayout/ShareLayout";
import Home from "./pages/home/Home";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import Nopage from "./pages/noPage/Nopage";
import Recipe from "./pages/recipes/Recipe";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShareLayout/>}> 
            <Route index element={<Home/>}/>
            <Route path="/recipe/:id" element={<Recipe/>}/>
            <Route path="addRecipe" element={<AddRecipe/>}/>
            
            <Route path="*" element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
export default App