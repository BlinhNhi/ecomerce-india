import { Route, Routes } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import NoPage from "./page/NoPage/NoPage";
import ProductInfo from "./page/ProductInfor/ProductInfor";
import ScrollTop from "./component/ScrollTop/ScrollTop";
import CartPage from "./page/Cart/Cart";
import AllProduct from "./page/AllProduct/AllProduct";
import Signup from "./page/registration/Signup";
import Login from "./page/registration/Login";
import UserDashboard from "./page/User/UserDashboard";
import AdminDashboard from "./page/Admin/AdminDashboard";
import AddProductPage from "./component/admin/AddProductPage";
import UpdateProductPage from "./component/admin/UpdateProductPage";
import MyState from "./context/myState";

function App() {
  return (
    <div>
      <MyState>
        <ScrollTop></ScrollTop>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/*" element={<NoPage></NoPage>}></Route>
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/updateproduct" element={<UpdateProductPage />} />


        </Routes>
      </MyState>
    </div>
  );
}

export default App;
