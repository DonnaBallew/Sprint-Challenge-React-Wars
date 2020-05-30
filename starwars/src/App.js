import React, { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "../src/components/Character";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #dd6413;
  font-size: 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/swapi.py4e.com/api/people")
      .then((response) => {
        console.log(response.data.results);
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log("The force is NOT with you!", error);
      });
  }, []);

  return (
    <div className="App">
      <Title className="Header">Star Wars Characters</Title>
      <Container>
        {info.map((characters, i) => (
          <Character props={characters} key={i} />
        ))}
      </Container>
    </div>
  );
};

export default App;
