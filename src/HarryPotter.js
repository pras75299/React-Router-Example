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
    setCharacters(item);
  };

  return (
    <>
      <h1>Harry Potter Characters</h1>
      <section className="harrypottermaincard">        
        {characters.map((el, index) => {
          const {
            name,
            gender,
            house,
            dateOfBirth,
            yearOfBirth,
            ancestry,
            image,          
          } = el;
          return (
            <>
              <article className="harry-potter-article">
                  <img src={image} alt={name}/>
                  <p>
                    <span className="common-class">Character Name: {name}</span>
                    <span className="common-class">Gender: {gender}</span>
                    <span className="common-class">House: {house}</span>
                    <span className="common-class">Date of Birth: {dateOfBirth}</span>
                    <span className="common-class">Year of Birth: {yearOfBirth}</span>
                    <span className="common-class">Ancestry: {ancestry}</span>
                  </p>              
                </article>
            </>
          );
        })}
      </section>
    </>
  );
}

export default HarryPotter;
