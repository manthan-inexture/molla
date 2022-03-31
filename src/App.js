import Router from "./Router";

// import { fetchProducts } from "./redux/fetchAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Admin/Component/redux/Product/productAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  const data = useSelector((state) => state.product.data);
  console.log(data);

  return (
    <>
      <Router />
    </>
  );
}
export default App;
