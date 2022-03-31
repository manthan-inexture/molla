import React, {
  useEffect
} from 'react'
import Carosol from "./components/Carosol.jsx";
import PupularCategories from "./components/PupularCategories.jsx";
import PupularDeales from "./components/PupularDeales.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import ShopToday from "./components/ShopToday.jsx";
import Brand from "./components/Brand.jsx";
import Services from "./components/Services.jsx";


import Latestdeal from "./components/latestdeal.jsx";
function Home() {

  return (
    <>
      <div className="page-wrapper">
        {/* start .header */}

        {/* End .header */}
        <main className="main">
          <Carosol />
          {/*carsol header */}

          {/*PupularCategories start */}
          <PupularCategories />
          <PupularDeales />
          {/*PupularCategories end */}

          {/*New Arrivals start */}
          <NewArrivals />
          {/*New Arrivals end */}

          {/*brand start */}
          <Brand />
          {/*brand end */}

          {/*ShopToday start */}
          {/* <ShopToday /> */}
          {/*ShopToday end */}
          <div>
            <div className="mb-4" />
            <div className="container">
              <hr className="mb-0" />
            </div>
          </div>
          {/*Services end */}
          <Services />
          {/*Services end */}
        </main>

        {/*Footer end */}
          <Latestdeal />
        {/*Footer end */}
      </div>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
  
      
    </>
  )
}

export default Home