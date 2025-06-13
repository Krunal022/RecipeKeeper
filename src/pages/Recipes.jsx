import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);
  const renderRecipes = () => {
    return data.map((recipe) => (
      <div key={recipe.id} className="mb-2 p-5 border rounded-lg">
        <h2 className="text-2xl font-bold mt-3">{recipe.title}</h2>
      </div>
    ));
  };

  return (
    <div className="w-full min-h-screen p-10 text-4xl">
      Recipes {renderRecipes()}
    </div>
  );
};

export default Recipes;
