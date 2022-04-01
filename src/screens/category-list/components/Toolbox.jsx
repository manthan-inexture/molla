import React, { useEffect, useState } from "react";

const Toolbox = ({sortingFilter}) => {
  const[sortKeyword,setsortKeyeord]=useState('popularity');
  useEffect(()=>{
    sortingFilter(sortKeyword)
   },[sortKeyword])
  return (
    <div className="toolbox">
      {/* End .toolbox-left */}
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <select name="sortby" id="sortby" className="form-control" onChange={(e)=>setsortKeyeord(e.target.value)}>
              <option value="popularity" selected="selected" > Most Popular</option>
              <option value="mostRated">Most Rated</option>
              <option value="lowtoHigh">Price -- Low to High</option>
              <option value="hightoLaw">Price -- High to Low</option>
            </select>
          </div>
        </div>
      </div>
      {/* End .toolbox-right */}
    </div>
  );
};

export default Toolbox;
