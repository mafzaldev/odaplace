import CategoriesBar from "./components/CategoriesBar";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col py-3 px-7">
      <Navbar />
      <CategoriesBar />
      <MainContent />
    </div>
  );
}

export default App;
