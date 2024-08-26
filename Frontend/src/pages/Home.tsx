import Footer from "../utils/Footer";
import Navbar from "../utils/NavBar";
import ProductCard from "../utils/ProductCard";
function Home({
  type,
}: {
  type:
    | "BreakfastFoods"
    | "Dalaata"
    | "Random"
    | "Eggsandmeat"
    | "Electronic"
    | "Fruits"
    | "Healthandnutrition"
    | "Hygiene"
    | "Vegetable";
}) {
  return (
    <div>
      <Navbar />
      <div>
        <ProductCard data={type} />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
