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
    <div className="flex w-full">
      <div
        style={glassStyle}
        className="left w-[45%] p-3 rounded-2xl mx-10 mt-10 border flex flex-col"
      >
        <h1 className="text-3xl capitalize font-semibold  text-black mb-3">
          {recipe.title}
        </h1>

        <img
          className="h-[40vh] w-1/2 object-cover rounded-xl mb-4"
          src={recipe.image}
          alt={recipe.title}
        />

        <h2 className="text-xl capitalize font-semibold text-blue-600">
          Chef: {recipe.chef}
        </h2>

        <h3 className="text-lg capitalize text-black">
          Category: {recipe.category}
        </h3>

        <p className="my-4 text-md text-indigo-900">{recipe.desc}</p>

        <div className="mb-4">
          <h2 className="text-2xl text-green-700 font-semibold mb-1">
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
          <h2 className="text-2xl text-green-700 font-semibold mb-1">
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
      <form
        className="right w-[50%] pt-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-3xl font-semibold text-black mb-5">
          Update Recipe & Delete Recipe
        </h1>
        <input
          {...register("image")}
          type="url"
          placeholder="Drop Image URL."
          className="block w-80 capitalize py-2 pl-5 text-xl mb-5 outline-0 rounded border-b text-black font-md "
        />
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="block w-80 capitalize py-2 pl-5 text-xl mb-5 outline-0 rounded-full border-b text-black font-md "
        />
        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="block w-80 mt-3 capitalize py-2 text-xl mb-5 pl-5 outline-0 rounded-full border-b text-black font-md "
        />
        <textarea
          {...register("desc")}
          type="text"
          placeholder="Description..."
          className="w-120 min-h-30 block mt-3 capitalize py-2 pl-3 text-lg outline-0 rounded border text-black font-md "
        ></textarea>
        <textarea
          {...register("ingr")}
          type="text"
          placeholder="Write ingredients
seperated by comma..."
          className="w-120 min-h-30 block mt-3 capitalize py-2 pl-3 text-lg outline-0 rounded border text-black font-md "
        ></textarea>
        <textarea
          {...register("inst")}
          type="text"
          placeholder="Write instructions
seperated by comma..."
          className="w-120 min-h-40 block mt-3 capitalize py-2 pl-3 text-lg outline-0 rounded border text-black font-md  "
        ></textarea>
        {/* <label htmlFor="Catagory">Choose Catagory</label> */}
        <select
          {...register("category")}
          className="block text-2xl mt-3 text-black"
        >
          <option value="breakfast">Breakfast</option>
          <option className="text-xl p-2" value="lunch">
            Lunch
          </option>
          <option className="text-xl p-2" value="supper">
            Supper
          </option>
          <option className="text-xl p-2" value="dinner">
            Dinner
          </option>
        </select>{" "}
        <button className="mt-5 mr-5 px-4 border py-2 bg-emerald-400 text-xl text-black rounded-2xl active:scale-95 cursor-pointer">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-5 px-4 py-2 border bg-red-400 text-xl text-black rounded-2xl active:scale-95 cursor-pointer"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    <div>No recipe found!</div>
  );
};

export default SingleRecipe;
