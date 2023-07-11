import Navbar from "./components/Navbar";
import CategoriesBar from "./components/CategoriesBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="py-3 px-5">
      <Navbar />
      <CategoriesBar />
      <MainContent />
    </div>
  );
}

export default App;
