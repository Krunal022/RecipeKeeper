const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center text-white px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
        👨‍🍳 About RecipeKeeper
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        RecipeKeeper is a sleek and simple React app designed to let you create, view, update, and manage your favorite recipes with ease.
        Whether you're a home cook or a chef-in-training, this app helps you stay organized and inspired. Built with 💙 using React, TailwindCSS, and Toastify.
      </p>
    </div>
  );
};

export default About;
