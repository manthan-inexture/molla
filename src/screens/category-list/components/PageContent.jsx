import React,{ useEffect } from "react";
import Category from "./Category";
import List from "./List";
import PageNav from "./PageNav";
import Toolbox from "./Toolbox";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../../../redux/fetchAction";

const PageContent = (props) => {
  const dispatch = useDispatch();
  const All_Products = useSelector(state => state.fetchReducer.data)
  console.log(All_Products)
  useEffect(() => {
    dispatch(fetchProducts())
  },[])
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
                <List />
              </div>
              {/* proucts-end */}
              {/* page-nav-start */}
              <PageNav />
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
