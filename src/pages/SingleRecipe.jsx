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
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      chef: recipe.chef,
      desc: recipe.desc,
      ingr: recipe.ingredients,
      inst: recipe.instructions,
      category: recipe.category,
    },
  });
  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    // console.log(index);
    const updatedRecipe = [...data];
    updatedRecipe[index] = { ...updatedRecipe[index], ...recipe };
    toast.success("Recipe updated!", {
      position: "top-right",
      autoClose: 700,
      transition: Flip,
    });
    setdata(updatedRecipe);
    // reset();
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

  // If recipe is found
  return recipe ? (
    <div className="flex flex-col md:flex-row w-full px-4 md:px-10 py-6 gap-6">
      {/* Left Section - Recipe Details */}
      <div
        style={glassStyle}
        className="md:w-[45%] w-full p-4 md:p-6 rounded-2xl border flex flex-col"
      >
        <h1 className="text-2xl md:text-3xl capitalize font-semibold text-black mb-3">
          {recipe.title}
        </h1>

        <img
          className="h-[200px] md:h-[40vh] w-full object-cover rounded-xl mb-4"
          src={recipe.image}
          alt={recipe.title}
        />

        <h2 className="text-lg md:text-xl capitalize font-semibold text-blue-600">
          Chef: {recipe.chef}
        </h2>

        <h3 className="text-md md:text-lg capitalize text-black">
          Category: {recipe.category}
        </h3>

        <p className="my-3 text-sm md:text-md text-indigo-900">{recipe.desc}</p>

        <div className="mb-4">
          <h2 className="text-xl text-green-700 font-semibold mb-1">
            Ingredients:
          </h2>
          <ul className="list-disc list-inside text-sm">
            {recipe.ingredients.split(",").map((item, index) => (
              <li key={index} className="text-black">
                {item.trim()}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-green-700 font-semibold mb-1">
            Instructions:
          </h2>
          <ol className="list-decimal list-inside text-sm">
            {recipe.instructions.split(",").map((step, index) => (
              <li key={index} className="text-black">
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
        <h1 className="text-2xl md:text-3xl font-semibold text-black mb-5">
          Update / Delete Recipe
        </h1>
        <input
          {...register("image")}
          type="url"
          placeholder="Drop Image URL"
          className="w-full py-2 pl-5 text-base md:text-xl mb-4 rounded border text-black outline-0"
        />
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="w-full py-2 pl-5 text-base md:text-xl mb-4 rounded border text-black outline-0"
        />
        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="w-full py-2 pl-5 text-base md:text-xl mb-4 rounded border text-black outline-0"
        />
        <textarea
          {...register("desc")}
          placeholder="Description..."
          className="w-full min-h-[80px] py-2 pl-3 text-base rounded border text-black outline-0 mb-4"
        ></textarea>
        <textarea
          {...register("ingr")}
          placeholder="Ingredients (comma separated)..."
          className="w-full min-h-[80px] py-2 pl-3 text-base rounded border text-black outline-0 mb-4"
        ></textarea>
        <textarea
          {...register("inst")}
          placeholder="Instructions (comma separated)..."
          className="w-full min-h-[100px] py-2 pl-3 text-base rounded border text-black outline-0 mb-4"
        ></textarea>

        <select
          {...register("category")}
          className="w-full py-2 text-base text-black border rounded mb-4"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-400 text-black text-base rounded-2xl active:scale-95"
          >
            Update Recipe
          </button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="px-4 py-2 bg-red-400 text-black text-base rounded-2xl active:scale-95"
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="text-center mt-10 text-red-500 text-xl">
      No recipe found!
    </div>
  );
};

export default SingleRecipe;
