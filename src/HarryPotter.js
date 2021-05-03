import React, { useState, useEffect } from "react";

const HarryPorterApi = "https://hp-api.herokuapp.com/api/characters";

function HarryPotter() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchQuotes();
  }, []);
  const fetchQuotes = async () => {
    const data = await fetch(HarryPorterApi);
    const item = await data.json();
    console.log(item);
    setCharacters(item);
  };

  return (
    <>
      <h1>Harry Potter Characters</h1>
      {characters.map((el) => {
        const {
          name,
          gender,
          house,
          dateOfBirth,
          yearOfBirth,
          ancestry,
          image
        } = el;
        return (
          <>
            <p>
              {name}, {gender}, {house}, {dateOfBirth}, {yearOfBirth},{" "}
              {ancestry}{" "}
            </p>
            <img src={image} alt={name} />
          </>
        );
      })}
    </>
  );
}

export default HarryPotter;
