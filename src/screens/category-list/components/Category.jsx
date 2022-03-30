import React from "react";

const Category = (props) => {

  return (
    <div>
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-1"
            role="button"
            aria-expanded="true"
            aria-controls="widget-1"
          >
            Category
          </a>
        </h3>
        {/* End .widget-title */}
        <div className="collapse show" id="widget-1">
          <div className="widget-body">
            <div className="filter-items filter-items-count">
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cat-1"
                    value="all"
                    onClick={(e)=>{
                      let checked =e.target.checked;
                      if(checked)
                      {
                        console.log("category selected is ",checked,e.target.value)
                      }
                      else  console.log("category not selected ")
                    }}
                  />
                  <label className="custom-control-label" htmlFor="cat-1">
                    All
                  </label>
                </div>
                {/* End .custom-checkbox */}
               
              </div>
              {/* End .filter-item */}
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cat-2"
                    value="men's clothing"
                    onClick={(e)=>{
                      let checked =e.target.checked;
                      if(checked)
                      {
                        console.log("category selected is ",checked,e.target.value)
                      }
                      else  console.log("category not selected ")
                    }}
                  />
                  <label className="custom-control-label" htmlFor="cat-2">
                    Man
                  </label>
                </div>
                {/* End .custom-checkbox */}
                
              </div>
              {/* End .filter-item */}
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cat-3"
                    value="women's clothing"
                    onClick={(e)=>{
                      let checked =e.target.checked;
                      if(checked)
                      {
                        console.log("category selected is ",checked,e.target.value)
                      }
                      else  console.log("category not selected ")
                    }}
                  />
                  <label className="custom-control-label" htmlFor="cat-3">
                    Women
                  </label>
                </div>
                {/* End .custom-checkbox */}
               
              </div>
              {/* End .filter-item */}
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cat-4"
                    value="jewelery"
                    onClick={(e)=>{
                      let checked =e.target.checked;
                      if(checked)
                      {
                        console.log("category selected is ",checked,e.target.value)
                      }
                      else  console.log("category not selected ")
                    }}
                  />
                  <label className="custom-control-label" htmlFor="cat-4">
                    Jewellery
                  </label>
                </div>
                {/* End .custom-checkbox */}
              
              </div>
              {/* End .filter-item */}
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cat-5"
                    value="electronics"
                    onClick={(e)=>{
                      let checked =e.target.checked;
                      if(checked)
                      {
                        console.log("category selected is ",checked,e.target.value)
                      }
                      else  console.log("category not selected ")
                    }}
                  />
                  <label className="custom-control-label" htmlFor="cat-5">
                    Electronic
                  </label>
                </div>
                {/* End .custom-checkbox */}
              
              </div>
              {/* End .filter-item */}
            </div>
            {/* End .filter-items */}
          </div>
          {/* End .widget-body */}
        </div>
        {/* End .collapse */}
      </div>
      {/* End .widget */}
    </div>
  );
};

export default Category;
