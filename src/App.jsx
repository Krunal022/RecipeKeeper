import Navbar from "./components/Navbar";
import Mainroute from "./routes/Mainroute";

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-blue-400">
      <Navbar />
      <Mainroute />
    </div>
  );
};

export default App;
