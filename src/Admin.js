import "./App.css";

import Router from "./Router";
import Footer from "./Admin/Component/Footer";
import Header from "./Admin/Component/Header";

function Admin() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default Admin;
