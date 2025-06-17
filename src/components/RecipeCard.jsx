import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] p-3 mb-4 mr-3 rounded shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-200"
    >
      <img
        className="object-cover w-full h-40 sm:h-48 md:h-40 lg:h-32 xl:h-36 rounded-md"
        src={image}
        alt={title}
      />
      <h1 className="mt-3 px-1 text-lg md:text-xl font-semibold text-black">
        {title}
      </h1>
      <small className="px-1 text-blue-700 text-sm">{chef}</small>
      <p className="px-1 mt-1 text-gray-700 text-sm leading-tight">
        {desc.slice(0, 100)}...
        <small className="text-blue-700"> more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
