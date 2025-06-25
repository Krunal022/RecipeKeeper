import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    const newRecipe = {
      id: nanoid(),
      title: recipe.title,
      chef: recipe.chef,
      desc: recipe.desc,
      image: recipe.image,
      ingredients: recipe.ingr,
      instructions: recipe.inst,
      category: recipe.category,
    };

    setdata([...data, newRecipe]);

    toast.success("✅ New recipe added!", {
      position: "top-right",
      autoClose: 1000,
      transition: Flip,
    });

    reset();
    navigate("/recipes");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-start px-4 sm:px-6 md:px-10 py-10 text-white">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5 sm:p-8 md:p-10 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 shadow-lg">
        <h1 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
          🥄 Mix It Up — Create a Recipe!
        </h1>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          <input
            {...register("image")}
            type="url"
            placeholder="Image URL"
            className="w-full py-3 px-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
            className="w-full py-3 px-4 rounded-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <input
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
            className="w-full py-3 px-4 rounded-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <textarea
            {...register("desc")}
            placeholder="Short description..."
            className="w-full py-3 px-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 outline-none"
          ></textarea>
          <textarea
            {...register("ingr")}
            placeholder="Ingredients (comma separated)..."
            className="w-full py-3 px-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 outline-none"
          ></textarea>
          <textarea
            {...register("inst")}
            placeholder="Instructions (comma separated)..."
            className="w-full py-3 px-4 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 outline-none"
          ></textarea>
          <select
            {...register("category")}
            className="w-full py-3 px-4 rounded border border-gray-700 bg-gray-800 text-white outline-none"
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition-all text-base text-white font-semibold rounded-2xl active:scale-95"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
