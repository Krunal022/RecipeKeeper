import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  // console.log(data);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);

    // const copydata = [...data];
    // copydata.push(recipe);
    // setdata(copydata);
    setdata([...data, recipe]);

    reset();
  };
  return (
    <div className="text-black w-full min-h-screen p-10 text-4xl">
      <h1 className="mb-10">🥄 Mix It Up — Create a Recipe!</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("image")}
          type="url"
          placeholder="Drop Image URL."
          className="block capitalize py-2 pl-5 text-xl  outline-0 rounded border-b text-black font-md "
        />
        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="block capitalize py-2 pl-5 text-xl  outline-0 rounded-full border-b text-black font-md "
        />
        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="block mt-3 capitalize py-2 text-xl  pl-5 outline-0 rounded-full border-b text-black font-md "
        />
        <textarea
          {...register("description")}
          type="text"
          placeholder="Description..."
          className="w-70 block mt-3 capitalize py-2 pl-3 text-xl outline-0 rounded border text-black font-md "
        ></textarea>
        <textarea
          {...register("ingredients")}
          type="text"
          placeholder="Write ingredients
seperated by comma..."
          className="w-70 block mt-3 capitalize py-2 pl-3 text-xl outline-0 rounded border text-black font-md "
        ></textarea>
        <textarea
          {...register("instructions")}
          type="text"
          placeholder="Write instructions
seperated by comma..."
          className="w-70 block mt-3 capitalize py-2 pl-3 text-xl outline-0 rounded border text-black font-md "
        ></textarea>
        {/* <label htmlFor="Catagory">Choose Catagory</label> */}
        <select {...register("category")} className="block text-2xl mt-3">
          <option className="text-xl  p-2 " value="cat-1">
            Catagory 1
          </option>
          <option className="text-xl  p-2 " value="cat-2">
            Catagory 2
          </option>
          <option className="text-xl  p-2 " value="cat-3">
            Catagory 3
          </option>
        </select>{" "}
        <button className="mt-5 px-4 py-2 bg-emerald-400 text-xl text-black rounded-2xl active:scale-95 cursor-pointer">
          Save Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
