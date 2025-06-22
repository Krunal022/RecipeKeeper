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
  recipe.id = nanoid();

  // Map form fields to correct object structure
  const newRecipe = {
    id: recipe.id,
    title: recipe.title,
    chef: recipe.chef,
    desc: recipe.desc,
    image: recipe.image,
    ingredients: recipe.ingr, // map ingr -> ingredients
    instructions: recipe.inst, // map inst -> instructions
    category: recipe.category,
  };

  setdata([...data, newRecipe]);

  toast.success("New recipe created!", {
    position: "top-right",
    autoClose: 1000,
    transition: Flip,
  });

  reset();
  navigate("/recipes");
};


  return (
    <div className="text-black w-full min-h-screen p-4 sm:p-6 md:p-10 flex justify-center items-start">
      <div className="border rounded-2xl p-5 sm:p-8 md:p-10 w-full sm:w-11/12 md:w-3/4 lg:w-1/2">
        <h1 className="mb-8 text-2xl sm:text-3xl md:text-4xl">
          🥄 Mix It Up — Create a Recipe!
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            {...register("image")}
            type="url"
            placeholder="Drop Image URL."
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded border-b text-black font-medium"
          />
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded-full border-b text-black font-medium"
          />
          <input
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded-full border-b text-black font-medium"
          />
          <textarea
            {...register("desc")}
            placeholder="Description..."
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded border text-black font-medium"
          ></textarea>
          <textarea
            {...register("ingr")}
            placeholder="Write ingredients separated by comma..."
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded border text-black font-medium"
          ></textarea>
          <textarea
            {...register("inst")}
            placeholder="Write instructions separated by comma..."
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded border text-black font-medium"
          ></textarea>
          <select
            {...register("category")}
            className="block w-full mt-5 py-3 px-4 text-base sm:text-lg md:text-xl outline-0 rounded border text-black font-medium"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
          </select>
          <button className="mt-6 w-full py-3 bg-emerald-400 text-base sm:text-lg md:text-xl text-black border rounded-2xl active:scale-95 cursor-pointer">
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
