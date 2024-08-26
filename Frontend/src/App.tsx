import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import PrivateRoute1, { PrivateRoute2 } from "./utils/PrivateRoute";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home type="Random"/>} />
        <Route element={<PrivateRoute2/>}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute1/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/payment" element={<PaymentPage/>}/>
        </Route>
        <Route path="/support" element={<Support />} />
        <Route path="/BreakfastFoods" element={<Home type="BreakfastFoods" />} />
        <Route path="/Dalaata" element={<Home type="Dalaata"/>} />
        <Route path="/Eggsandmeat" element={<Home type="Eggsandmeat"/>} />
        <Route path="/Electronic" element={<Home type="Electronic"/>} />
        <Route path="/Fruits" element={<Home type="Fruits"/>} />
        <Route path="/Healthandnutrition" element={<Home type="Healthandnutrition"/>} />
        <Route path="/Hygiene" element={<Home type="Hygiene"/>} />
        <Route path="/Vegetable" element={<Home type="Vegetable"/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
