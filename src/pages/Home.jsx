import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("home mounted");

    return () => {
      console.log("home unmounted");
    };
  });

  return <div className="w-full min-h-screen p-10 text-4xl">Home</div>;
};

export default Home;
