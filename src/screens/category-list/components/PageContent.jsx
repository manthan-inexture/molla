import React,{ useState } from "react";
import Category from "./Category";
import List from "./List";
import PageNav from "./PageNav";
import Toolbox from "./Toolbox";
import { useSelector } from 'react-redux';


const PageContent = (props) => {

  const All_Products = useSelector(state => state.fetchReducer.data)
  console.log(All_Products)
 

  // pagination
  const [currentPage,setCurrentPage] = useState(1);
  const productPerPage = 5;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = All_Products.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate =(number) => setCurrentPage(number)

 

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Toolbox />
              {/* End .toolbox */}

              {/* proucts-start */}
              <div className="products mb-3">
                {currentProducts.map((product) => (
                  <List product={product}/>
                ))}
                
              </div>
              {/* proucts-end */}
              {/* page-nav-start */}
              <PageNav productPerPage={productPerPage} 
                       totalProducts={All_Products.length} 
                       paginate={paginate} />
              {/* page-nav-end */}
            </div>
            {/* End .col-lg-9 */}
            <aside className="col-lg-3 order-lg-first">
              <div className="sidebar sidebar-shop">
                <Category />
              </div>
              {/* End .sidebar sidebar-shop */}
            </aside>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .page-content */}
    </>
  );
};

export default PageContent;
