import CategoriesBar from "./components/CategoriesBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col p-4">
      <Navbar />
      <CategoriesBar />
    </div>
  );
}

export default App;
