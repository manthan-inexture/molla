import React ,{useState} from "react";
import Category from "./Category";
import List from "./List";
import PageNav from "./PageNav";
import Toolbox from "./Toolbox";
import {  useSelector } from 'react-redux';

const PageContent = (props) => {
  
  const All_Products = useSelector(state => state?.fetchReducer?.data)
  // console.log("All_Products",All_Products)
  
  const filterdata = All_Products?.filter((items,index)=>{
    if (props.category=='all' || props.category== undefined){
         return items
    }
    else return items?.category==props?.category
  })
 //  console.log("filterdata", filterdata) 
 //pagination
 const [currentPage,setCurrentPage] = useState(1);
 const productPerPage = 3;
 const indexOfLastProduct = currentPage * productPerPage;
 const indexOfFirstProduct = indexOfLastProduct - productPerPage;
 const currentProducts = filterdata.slice(indexOfFirstProduct, indexOfLastProduct);
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
           { currentProducts?.map((data,index)=>{
                return  <List  data={data}/>
           })}
               
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
