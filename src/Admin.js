// import "./App.css";

import Router from "./Router";
import Footer from "./Admin/Component/Footer";
import Header from "./Admin/Component/Header";
import { useEffect } from "react";

function Admin() {
  useEffect(() => {
    var element = document.createElement("link");
    element.type = "text/css";
    element.rel = "stylesheet";
    element.id = "adminCSS";
    element.href = "/dist/css/adminlte.min.css";

    document.getElementsByTagName("head")[0].appendChild(element);

    return () => document.getElementById("adminCSS")?.remove();
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default Admin;
