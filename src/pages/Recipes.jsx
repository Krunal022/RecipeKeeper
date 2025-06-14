import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data, setdata } = useContext(recipecontext);
  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap p-10">
      {data.length > 0 ? renderRecipes : "No recipes found!"}
    </div>
  );
};

export default Recipes;
