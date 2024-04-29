import { useEffect, useState } from "react";
import LevelButton from "./components/@common/levelButton/LevelButton";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import { CARD_DATA } from "./constants/data";
import styled from "styled-components";
import { NUMBER } from "./constants/constants";
import { shuffleCards } from "./util/util";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choices, setChoices] = useState([null, null]);
  // const [disabled, setDisabled] = useState(false);
  const [completed, setCompleted] = useState(NUMBER.EASY_LEVEL);
  const [finished, setFinished] = useState(false);

  const gameFinished = () => {
    setFinished(true);
  };

  const generateCardsByLevel = (level) => {
    let totalPairs;
    switch (level) {
      case "Easy":
        totalPairs = NUMBER.EASY_LEVEL; //5
        setCompleted(NUMBER.EASY_LEVEL);
        break;
      case "Normal":
        totalPairs = NUMBER.NORMAL_LEVEL; //7
        setCompleted(NUMBER.NORMAL_LEVEL);
        break;
      case "Hard":
        totalPairs = NUMBER.HARD_LEVEL; //9
        setCompleted(NUMBER.HARD_LEVEL);
        break;
      default:
        totalPairs = NUMBER.EASY_LEVEL;
        break;
    }

    const cardPairs = CARD_DATA.slice(0, totalPairs); //5
    const cards = [...cardPairs, ...cardPairs]; // 10
    console.log("cardPairs", cardPairs);
    console.log("generateCardsByLevel 내 cards", cards);

    return shuffleCards(cards);
  };

  const handleLevelBtnClick = (level) => {
    shuffledCards(level);
  };

  const shuffledCards = (level) => {
    const cards = generateCardsByLevel(level);
    setChoices([null, null]);
    setCards(cards);
    setTurns(NUMBER.ZERO);
  };

  const handleChoice = (card) => {
    if (choices.every((choice) => choice === null)) {
      setChoices([card, null]);
    } else if (choices[0] && !choices[1]) {
      setChoices([choices[0], card]);
    }
  };

  const compareCards = () => {
    const isMatch = choices[0]?.name === choices[1]?.name;
    // setDisabled(true);
    console.log("compareCards 내 cards", cards);
    if (choices[0] && choices[1]) {
      if (isMatch) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.name === choices[0].name ? { ...card, status: true } : card
          )
        );
        setTurns((prevTurns) => prevTurns + 1);
        resetCardValue();
      } else {
        setTimeout(resetCardValue, 1000);
      }
    }
  };

  const resetCardValue = () => {
    console.log("resetCardValue 실행!");
    setChoices([null, null]);
    // setTimeout(() => setDisabled(false), 1000);
  };

  const resetGame = () => {
    console.log("리셋게임 버튼 클릭");
    setChoices([null, null]);
    setTurns(NUMBER.ZERO);
    setCompleted(5);
  };

  useEffect(() => {
    shuffledCards("Easy");
    console.log("useEffect 내 cards", cards);
  }, []);

  useEffect(() => {
    compareCards();
  }, [choices]);

  return (
    <>
      <Header resetGame={resetGame} turns={turns} completed={completed} />
      <LevelButton handleLevelBtnClick={handleLevelBtnClick} />
      <CardWrapper>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={choices.includes(card) || card.status}
          />
        ))}
      </CardWrapper>
      {/* {finished && 
      <Modal></Modal>} */}
    </>
  );
};

export default App;

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;
