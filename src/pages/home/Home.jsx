import SingleRecipe from "../../components/SingleRecipe"
import { myUseContext } from "../../context/Context"

const Home = () => {
    const { recipes } = myUseContext()
  return (
    <section className="recipes">
        {
            recipes.map(recipe => {
                return <SingleRecipe key={recipe.id} {...recipe} />
            })
        }
    </section>
  )
}
export default Home