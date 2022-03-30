import React from "react";
import PageHeader from "./components/PageHeader";
import CategoryListNav from "./components/CategoryListNav";
import PageContent from "./components/PageContent";
import { useParams } from "react-router-dom";

function CategoryList(props) {
 const productName = useParams()
 console.log("productName",productName.category)
  return (
    <div>
      {/* page-heading-start */}
      <PageHeader />
      {/* page-heading-end */}
      {/* page-list-nav start */}
      <CategoryListNav />
      {/* page-list-nav end */}
      {/* main-content-start */}
      <PageContent />
      {/* main-content-end */}
    </div>
  );
}

export default CategoryList;
