import React, { useEffect, useState } from "react";
import Category from "./Category";
import List from "./List";
import PageNav from "./PageNav";
import { useSelector } from "react-redux";
import Toolbox from "./Toolbox";
const PageContent = ({ category }) => {
  const All_Products = useSelector((state) => state?.product?.data); // all product
  const [filter, setFilter] = useState([]); //fiter array for check box(value)
  const [filterdata, setFilterdata] = useState([]); //check box no filter data
  const [sort, setSort] = useState(); //short
  // const [displayfinaldata, setDisplayfinaldata] = useState([]); //final data

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
  //filter for category
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
      alert("No result found");
      setFilter([category]);
    }
  }, [category]);

  //filter for checkbox
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
      // setDisplayfinaldata(data);
    }
  }, [filter]);

  const sortingFilterData = (e) => {
    setSort(e);
  };

  const changeFilter = (arr) => {
    setFilter(arr);
  };

  useEffect(() => {
    switch (sort) {
      case "popularity":
        console.log("switch", sort);
        setFilterdata(
          filterdata.sort(function(a, b) {
            return b.rating.count - a.rating.count;
          })
        );
        break;
      case "mostRated":
        console.log("switch", sort);
        setFilterdata(
          filterdata.sort(function(a, b) {
            return b.rating.rate - a.rating.rate;
          })
        );
        console.log(filterdata);
        break;
      case "lowtoHigh":
        console.log("switch", sort);
        setFilterdata(
          filterdata.sort(function(a, b) {
            return a.price - b.price;
          })
        );
        break;
      case "hightoLaw":
        console.log("switch", sort);
        setFilterdata(
          filterdata.sort(function(a, b) {
            return b.price - a.price;
          })
        );
        break;
      default:
        break;
    }
  }, [sort]);

  //sorting function
  // const sortingFilterData = (value) => {
  //   var data = [];
  //   console.log(value);
  //   if (value === "popularity") {
  //     data = filterdata.sort(function (a, b) {
  //       return b.rating.count - a.rating.count;
  //     });
  //   } else if (value === "mostRated") {
  //     data = filterdata.sort(function (a, b) {
  //       return b.rating.rate - a.rating.rate;
  //     });
  //   } else if (value === "lowtoHigh") {
  //     data = filterdata.sort(function (a, b) {
  //       return a.price - b.price;
  //     });
  //   } else if (value === "hightoLaw") {
  //     data = filterdata.sort(function (a, b) {
  //       return b.price - a.price;
  //     });
  //   }
  //   console.log("sorting",data);
  //   setDisplayfinaldata(data);
  // };

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="toolbox">
                {/* start .toolbox-left */}
                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select
                        name="sortby"
                        id="sortby"
                        className="form-control"
                        onClick={(e) => sortingFilterData(e.target.value)}
                      >
                        {/* <option value="" selected="selected">
                          Sort by
                        </option> */}
                        <option value="popularity">Most Popular</option>
                        <option value="mostRated">Most Rated</option>
                        <option value="lowtoHigh">Price -- Low to High</option>
                        <option value="hightoLaw">Price -- High to Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* End .toolbox-right */}
              </div>
              {/* proucts-start */}
              <div className="products mb-3">
                {currentProducts.map((data, index) => {
                  // console.log(displayfinaldata);
                  // console.log("iuehrgieur");
                  return <List data={data} key={index} />;
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
