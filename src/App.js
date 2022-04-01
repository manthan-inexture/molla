import Router from "./Router";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Admin/Component/redux/Product/productAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  const data = useSelector((state) => state);
  console.log(data);  
  const spinner = useSelector((state) => state.spinner);
  // console.log(spinner);
  // const islog = localStorage.getItem("islogin");
  // console.log(islog);
  return (
    <>
      {
        spinner &&
        <>
          <div className="w-100 h-100 position-fixed d-flex justify-content-center" style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0,0.1)" }}>
            <lottie-player className="align-middle" src="https://assets9.lottiefiles.com/packages/lf20_ymbx3fps.json" background="transparent" speed="1" style={{ width: "300px", height: "300px", marginTop: "13%" }} loop autoplay></lottie-player>
          </div>
        </>
      }

      <Router />
    </>
  );
}
export default App;
