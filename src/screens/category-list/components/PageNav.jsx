import React from "react";

const PageNav = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
      
        {pageNumber.map(number => (
          <li onClick={() => paginate(number)} className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            {number}
          </a>
        </li>
        ))}
        
        
      </ul>
    </nav>
  );
};

export default PageNav;