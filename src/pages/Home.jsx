import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center px-6 text-center text-white">
      
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🍽️ RecipeKeeper
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A slick React app to create, update, and manage your favorite recipes.<br />
        Simple CRUD, tasty results. 😋
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/create-recipes"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          + Create Your Recipe
        </Link>
      </motion.div>
      
    </div>
  );
};

export default Home;
