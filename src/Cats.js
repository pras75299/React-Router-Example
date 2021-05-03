import React, { useState, useEffect } from "react";


const catAPIUrl = "https://cat-fact.herokuapp.com/facts";

export default function Cats() {
  const [all, setAll] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(catAPIUrl);
    const item = await data.json();
    console.log(item);
    setAll(item);
  };

  return (
    <>
      <h2>Cat Facts</h2>
      {all.map((cat) => {
        const { text, updatedAt } = cat;
        return (
          <>
            <div className="singleCard" key={updatedAt}>
              <p>{text}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
