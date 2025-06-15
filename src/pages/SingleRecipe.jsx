import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    // borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    // padding: "20px",
    color: "#fff",
    // maxWidth: "300px",
    // textAlign: "center",
    // margin: "50px auto",
  };
  return recipe ? (
    <div style={glassStyle} className="w-100 p-3 rounded-2xl m-10 border flex">
      <div className="left w-full p-2 ">
        <h1 className="text-3xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
        <h1 className="text-blue-800">{recipe.chef}</h1>
        <p>{recipe.desc}</p>
      </div>
    </div>
  ) : (
    <div>No recipe found!</div>
  );
};

export default SingleRecipe;
