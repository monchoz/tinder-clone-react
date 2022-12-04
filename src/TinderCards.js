import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3",
    },
    {
      name: "Bill Gates",
      url: "https://static01.nyt.com/images/2021/05/17/business/14altGates-print/14Gates--top-mediumSquareAt3X.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url: "https://mastersofscale.com/wp-content/uploads/sites/2/2017/05/mark_zuckerberg.jpg",
    },
  ]);

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div class="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
