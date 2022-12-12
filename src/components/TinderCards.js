import React from "react";
import { useQuery, gql } from "@apollo/client";
import TinderCard from "react-tinder-card";
import "../styles/TinderCards.css";

const GET_PEOPLE = gql`
  query {
    cards {
      name
      age
      company
      photo
    }
  }
`;

function TinderCards() {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div class="tinderCards__cardContainer">
        {data.cards.map((card) => (
          <TinderCard
            className="swipe"
            key={card.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${card.photo})` }}
              className="card"
            >
              <h3>{card.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
