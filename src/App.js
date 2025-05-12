import { Route, Routes } from "react-router-dom";
import HomePage from "./page/Home/HomePage";
import NoPage from "./page/NoPage/NoPage";
import ProductInfo from "./page/ProductInfor/ProductInfor";
import ScrollTop from "./component/ScrollTop/ScrollTop";
import CartPage from "./page/Cart/Cart";
import AllProduct from "./page/AllProduct/AllProduct";
import Signup from "./page/Registration/Signup";
import Login from "./page/Registration/Login";
import UserDashboard from "./page/User/UserDashboard";
import AdminDashboard from "./page/Admin/AdminDashboard";
import AddProductPage from "./component/Admin/AddProductPage";
import UpdateProductPage from "./component/Admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./ProtectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./ProtectedRoute/ProtectedRouteForAdmin";
import Category from "./page/Category/CategoryPage";

function App() {
  return (
    <div>
      <MyState>
        <ScrollTop></ScrollTop>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/*" element={<NoPage></NoPage>}></Route>
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<Category />} />
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster></Toaster>
      </MyState>
    </div>
  );
}

export default App;
