import React, { useEffect, useState } from "react";
import Category from "./Category";
import List from "./List";
import PageNav from "./PageNav";
import { useSelector } from "react-redux";
import Toolbox from "./Toolbox";
const PageContent = ({ category }) => {
  const [filter, setFilter] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [sortfilterdata, setsortFilterdata] = useState([]);
  // console.log("category", category);

  const changeFilter = (arr) => {
    setFilter(arr);
  };
  const sortingFilterData =(arr)=>{
    setsortFilterdata(arr);
  }

  useEffect(() => {
    if (category === "all" || category === undefined) {
      setFilter(["all"]);
    } else if (category.toLowerCase().includes("man")) {
      setFilter(["men's clothing"]);
    } else if (category.toLowerCase().includes("women")) {
      setFilter(["women's clothing"]);
    } else if (
      category.toLowerCase().includes("clothe") ||
      category.toLowerCase().includes("clothing")
    ) {
      setFilter(["men's clothing", "women's clothing"]);
    } else if (category.toLowerCase().includes("jewelery")) {
      setFilter(["jewelery"]);
    } else if (category.toLowerCase().includes("electronics")) {
      setFilter(["electronics"]);
    } else {
      setFilter([category]);
    }
  }, [category]);

  const All_Products = useSelector((state) => state?.product?.data);
  // console.log("All_Products", All_Products);

  useEffect(() => {
    // console.log("hey", All_Products);
    if (All_Products.length !== 0) {
      const data = All_Products?.filter((item, index) => {
        // console.log(filter, item.category, filter.includes(item.category));
        if (filter.includes("all")) {
          return true;
        } else return filter.includes(item.category);
      });
      setFilterdata(data);
    }
  }, [All_Products, filter]);

  //sorting

  useEffect(()=>{
    console.log("MADAARCHOD",sortfilterdata)
    if (sortfilterdata == "popularity") {
      const data = filterdata.sort(function (a, b) {
        return b.rating.count - a.rating.count;
      });
      if (sortfilterdata == "mostRated") {
        const data = filterdata.sort(function (a, b) {
          return b.rating.rate - a.rating.rate;
        });
      }
      // console.log("count",data);
      // data.forEach((customer) => {
      //   console.log(customer);
      // });
       setFilterdata(data);
    }
   
  },[All_Products, sortfilterdata])
  
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
              <Toolbox sortingFilter={sortingFilterData} />
              {/* proucts-start */}
              <div className="products mb-3">
                {currentProducts?.map((data, index) => {
                  return <List data={data} />;
                })}
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
