import React from "react";
import PageHeader from "./components/PageHeader";
import CategoryListNav from "./components/CategoryListNav";
import PageContent from "./components/PageContent";

function CategoryList(props) {
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
