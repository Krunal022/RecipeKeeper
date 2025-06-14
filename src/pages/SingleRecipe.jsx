import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
   const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);

    return recipe ? (
        <div className="w-200 flex">
            <div className="left w-1/2 p-2">
                <h1 className="text-3xl font-black">{recipe.title}</h1>
                <img className="h-[20vh]" src={recipe.image} alt="" />
                <h1>{recipe.chef}</h1>
                <p>{recipe.desc}</p>
            </div>
        </div>
    ) : (
        <div>No recipe found!</div>
    );
};

export default SingleRecipe;
