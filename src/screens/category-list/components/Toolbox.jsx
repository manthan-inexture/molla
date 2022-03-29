import React from "react";

const Toolbox = (props) => {
  return (
    <div className="toolbox">
      {/* End .toolbox-left */}
      <div className="toolbox-right">
        <div className="toolbox-sort">
          <label htmlFor="sortby">Sort by:</label>
          <div className="select-custom">
            <select name="sortby" id="sortby" className="form-control">
              <option value="popularity" selected="selected">
                Most Popular
              </option>
              <option value="rating">Most Rated</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>
      {/* End .toolbox-right */}
    </div>
  );
};

export default Toolbox;
