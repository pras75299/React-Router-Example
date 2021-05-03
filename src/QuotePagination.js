import React from "react";

function QuotePagination(props) {
  const { postsPerPage, totalPosts, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default QuotePagination;
