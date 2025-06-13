import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-full text-black bg-gray-100 py-5 px-5 text-xl  flex items-center justify-center gap-10">
      <NavLink className={(e) => e.isActive ? "text-blue-400" : ""} to="/">Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-blue-400" : ""} to="/about">About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-blue-400" : ""} to="/recipes">Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-blue-400" : ""} to="/create-recipes">Create Recipes</NavLink>
    </div>
  );
};

export default Navbar;
