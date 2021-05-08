import React, { useState, useEffect } from "react";
import QuotePagination from "./QuotePagination";

const QuoteAPIURL = "https://breakingbadapi.com/api/quotes";

function Quotes() {
  const [quote, setQuote] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  useEffect(() => {
    fetchQuotes();
  }, []);
  const fetchQuotes = async () => {
    const data = await fetch(QuoteAPIURL);
    const item = await data.json();
    setQuote(item);
  };

  // Pagination logic starts here
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = quote.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <h1 className="commontitleclass">Breaking Bad Quotes</h1>
      {currentPosts.map((el) => {
        const { quote_id, quote, author, series } = el;
        return (
          <>
            <div className="quotesCard" key={quote_id}>
              <h4>{quote}</h4>
              <p>
                <span>~ {author}</span>, {series}
              </p>
            </div>
          </>
        );
      })}
      <QuotePagination
        postsPerPage={postPerPage}
        totalPosts={quote.length}
        paginate={paginate}
      />
    </>
  );
}

export default Quotes;
