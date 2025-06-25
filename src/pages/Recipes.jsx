import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipecontext);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-10 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        🍲 Your Recipes
      </h1>

      {data.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-200 mt-20 text-xl">
          No recipes found! 👀 Add one to get started.
        </div>
      )}
    </div>
  );
};

export default Recipes;
