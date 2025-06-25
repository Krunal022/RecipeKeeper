import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, setdata } = useContext(recipecontext);
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: recipe
      ? {
          title: recipe.title,
          image: recipe.image,
          chef: recipe.chef,
          desc: recipe.desc,
          ingr: recipe.ingredients,
          inst: recipe.instructions,
          category: recipe.category,
        }
      : {},
  });

  const submitHandler = (recipeFormData) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const updatedRecipe = [...data];

    updatedRecipe[index] = {
      ...updatedRecipe[index],
      title: recipeFormData.title,
      image: recipeFormData.image,
      chef: recipeFormData.chef,
      desc: recipeFormData.desc,
      ingredients: recipeFormData.ingr,
      instructions: recipeFormData.inst,
      category: recipeFormData.category,
    };

    setdata(updatedRecipe);
    toast.success("Recipe updated!", {
      position: "top-right",
      autoClose: 700,
      transition: Flip,
    });
  };

  const DeleteHandler = () => {
    const filteredData = data.filter((recipe) => recipe.id != params.id);
    setdata(filteredData);
    toast.error("Recipe deleted!", {
      position: "top-right",
      autoClose: 500,
      transition: Flip,
    });
    navigate("/recipes");
  };

  const glassStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "#fff",
  };

  return recipe ? (
    <div className="flex flex-col md:flex-row w-full px-4 md:px-10 py-6 gap-6 text-white bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      {/* Left Section - Recipe Details */}
      <div
        style={glassStyle}
        className="md:w-[45%] w-full p-4 md:p-6 rounded-2xl border flex flex-col"
      >
        <h1 className="text-2xl md:text-3xl capitalize font-semibold text-blue-400 mb-3">
          {recipe.title}
        </h1>

        <img
          className="h-[200px] md:h-[40vh] w-full object-cover rounded-xl mb-4"
          src={recipe.image}
          alt={recipe.title}
        />

        <h2 className="text-lg md:text-xl capitalize font-semibold text-green-400">
          Chef: {recipe.chef}
        </h2>

        <h3 className="text-md md:text-lg capitalize text-gray-300">
          Category: {recipe.category}
        </h3>

        <p className="my-3 text-sm md:text-md text-gray-400">{recipe.desc}</p>

        <div className="mb-4">
          <h2 className="text-xl text-green-400 font-semibold mb-1">
            Ingredients:
          </h2>
          <ul className="list-disc list-inside text-sm">
            {(recipe.ingredients || "")
              .split(",")
              .filter((item) => item.trim() !== "")
              .map((item, index) => (
                <li key={index} className="text-gray-200">
                  {item.trim()}
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-green-400 font-semibold mb-1">
            Instructions:
          </h2>
          <ol className="list-decimal list-inside text-sm">
            {(recipe.instructions || "")
              .split(",")
              .filter((step) => step.trim() !== "")
              .map((step, index) => (
                <li key={index} className="text-gray-200">
                  {step.trim()}
                </li>
              ))}
          </ol>
        </div>
      </div>

      {/* Right Section - Form */}
      <form
        className="md:w-[50%] w-full pt-5 md:pt-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-5">
          Update / Delete Recipe
        </h1>
        <input
          {...register("image")}
          type="url"
          placeholder="Drop Image URL"
          className="w-full py-2 pl-5 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        />
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full py-2 pl-5 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        />
        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="w-full py-2 pl-5 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        />
        <textarea
          {...register("desc")}
          placeholder="Description..."
          className="w-full py-2 pl-4 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        ></textarea>
        <textarea
          {...register("ingr")}
          placeholder="Ingredients (comma separated)..."
          className="w-full py-2 pl-4 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        ></textarea>
        <textarea
          {...register("inst")}
          placeholder="Instructions (comma separated)..."
          className="w-full py-2 pl-4 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        ></textarea>

        <select
          {...register("category")}
          className="w-full py-2 px-4 mb-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-all text-white rounded-2xl active:scale-95"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 transition-all text-white rounded-2xl active:scale-95"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-bold text-red-400 mb-2">🚫 Oops!</h2>
      <p className="text-lg text-gray-300 mb-4">
        We couldn’t find that recipe. Maybe it was deleted or the link is broken.
      </p>
      <button
        onClick={() => navigate("/recipes")}
        className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm mt-2 transition-all"
      >
        🔙 Back to Recipes
      </button>
    </div>
  );
};

export default SingleRecipe;
