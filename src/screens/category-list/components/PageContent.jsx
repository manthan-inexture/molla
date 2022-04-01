import React, { useEffect, useState } from "react";
import Category from "./Category";
import List from "./List";
import PageNav from "./PageNav";
import { useSelector } from "react-redux";

const PageContent = ({ category }) => {
  const [filter, setFilter] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  console.log("category", category);

  const changeFilter = (arr) => {
    setFilter(arr);
  };

  useEffect(() => {
    if (category === "all" || category === undefined) {
      setFilter(["all"]);
    } else {
      setFilter([category]);
    }
  }, [category]);

  const All_Products = useSelector((state) => state?.product?.data);
  console.log("All_Products", All_Products);

  useEffect(() => {
    console.log("hey", All_Products);
    if (All_Products.length !== 0) {
      const data = All_Products?.filter((item, index) => {
        console.log(filter, item.category, filter.includes(item.category));
        if (filter.includes("all")) {
          return true;
        } else return filter.includes(item.category);
      });
      setFilterdata(data);
    }
  }, [All_Products, filter]);

  //  console.log("filterdata", filterdata)
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 3;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filterdata.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (number) => setCurrentPage(number);

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {/* proucts-start */}
              <div className="products mb-3">
                {
                  currentProducts ? currentProducts?.map((data, index) => {
                    return <List data={data} /> 
                  }) : <h3>oops ,  server down</h3>
                }
              </div>
              {/* proucts-end */}
              {/* page-nav-start */}
              <PageNav
                productPerPage={productPerPage}
                totalProducts={filterdata.length}
                paginate={paginate}
              />
              {/* page-nav-end */}
            </div>
            {/* End .col-lg-9 */}
            <aside className="col-lg-3 order-lg-first">
              <div className="sidebar sidebar-shop">
                <Category changeFilter={changeFilter} />
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
