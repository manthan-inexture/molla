import Header from "./screens/components/header/header";
import Footer from "./screens/components/footer/footer";
import Router from "./Router";
// import { fetchProducts } from "./redux/fetchAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Admin/Component/redux/Product/productAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById("adminCSS")?.remove();
  }, []);

  useEffect(() => {
    dispatch(getData());
  }, []);
  const data = useSelector((state) => state);
  console.log(data);
  const islog = localStorage.getItem("islogin");
  console.log(islog);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
export default App;
