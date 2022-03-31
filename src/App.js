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

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}
export default App;
