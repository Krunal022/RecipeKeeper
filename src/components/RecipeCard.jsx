import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-101 border border-gray-200 mr-3 mb-3 p-3 block w-[23vw] rounded overflow-hidden shadow-2xl"
    >
      <img className="object-cover w-full h-[20vh]" src={image} alt="" />
      <h1 className="px-2 mt-2 font-medium text-black text-xl">{title}</h1>
      <small className="px-2 text-blue-800 text-sm font-medium">{chef}</small>
      <p className="px-2 pb-3 text-white font-light text-sm">
        {desc.slice(0, 100)}... <small className="text-gray-300">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
