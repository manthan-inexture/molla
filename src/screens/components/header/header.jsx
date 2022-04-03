import React, { useEffect } from "react";
import HeaderCenter from "./components/HeaderCenter";
import HeaderMiddle from "./components/HeaderMiddle";
import TopHeader from "./components/TopHeader";
import MobileMenu from "./components/MobileMenu";
function Header() {
  useEffect(() => { 
    document.getElementById("adminCSS")?.remove();
  }, []);

  return (<>
    <header className="header header-intro-clearance header-4">
      {/* <div className="py-3"></div> */}
      <HeaderMiddle />
      <TopHeader />
      <HeaderCenter />
    </header>
    <MobileMenu />
  </>
  );
}

export default Header;
