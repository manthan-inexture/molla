import React from "react";
import HeaderCenter from "./components/HeaderCenter";
import HeaderMiddle from "./components/HeaderMiddle";
import TopHeader from "./components/TopHeader";
import MobileMenu from "./components/MobileMenu";
function header() {
  return (<>
    <header className="header header-intro-clearance header-4">
      <TopHeader />
      <HeaderMiddle />
      <HeaderCenter />
    </header>
    <MobileMenu />
    </>
  );
}

export default header;