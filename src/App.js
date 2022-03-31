import Header from "./screens/components/header/header";
import Footer from "./screens/components/footer/footer";
import Router from "./router/Router";
import { fetchProducts } from "./redux/fetchAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Admin/Component/redux/Product/productAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(getData());
  }, []);
  const data = useSelector((state) => state);
  console.log(data);
<<<<<<< HEAD

=======
  const islog = localStorage.getItem("islogin");
>>>>>>> 7e467bf8b67ccc19b4e395b6bb5b7b11055ea43c
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
