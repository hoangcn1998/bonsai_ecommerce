import React from "react";

const Pagination = () => {
  return (
    <div className="shoppage__pagination">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="111.com" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="111.com">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="111.com">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="111.com">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="111.com" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
