import React from 'react';

function Pagination(props) {
  let {
    articlesCount,
    articlesPerPage,
    activePageIndex,
    updateCurrentPageIndex,
  } = props;
  let numberOfPages = Math.ceil(articlesCount / articlesPerPage);
  let pagesArray = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pagesArray.push(i);
  }
  return (
    <div className="flex justify-center item-center pagination wrap">
      <div className="prev">
        <p
          onClick={() =>
            updateCurrentPageIndex(
              activePageIndex - 1 < 1 ? 1 : activePageIndex - 1
            )
          }
        >
          Prev
        </p>
      </div>
      <div className="pagination-count">
        {pagesArray.map((page) => (
          <span
            key={page}
            onClick={() => updateCurrentPageIndex(page)}
            className={`${activePageIndex === page ? 'active' : ''}`}
          >
            {page}
          </span>
        ))}
      </div>
      <div className="next">
        <p
          onClick={() =>
            updateCurrentPageIndex(
              activePageIndex + 1 > numberOfPages
                ? numberOfPages
                : activePageIndex + 1
            )
          }
        >
          Next
        </p>
      </div>
    </div>
  );
}

export default Pagination;
