import Background from "./components/Background.tsx";
import Foreground from "./components/Foreground.tsx";

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
