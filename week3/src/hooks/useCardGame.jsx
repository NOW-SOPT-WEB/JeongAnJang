import { useEffect, useState } from "react";
import { compareCards, generateCardsByLevel } from "../util/util";
import { NUMBER } from "../constants/constants";

const useCardGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(NUMBER.ZERO);
  const [choices, setChoices] = useState([null, null]);
  const [completed, setCompleted] = useState(NUMBER.EASY_LEVEL);
  const [finished, setFinished] = useState(false);

  const gameFinished = () => {
    if (turns === completed - 1) setFinished(true);
  };

  const handleLevelBtnClick = (level) => {
    shuffledCards(level);
  };

  const shuffledCards = (level) => {
    const cards = generateCardsByLevel(level, setCompleted);
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

  const resetCardValue = () => {
    setChoices([null, null]);
    gameFinished();
  };

  const resetGame = () => {
    console.log("리셋게임 버튼 클릭");
    setChoices([null, null]);
    setTurns(NUMBER.ZERO);
    setCompleted(NUMBER.EASY_LEVEL);
    shuffledCards("Easy");
  };

  useEffect(() => {
    shuffledCards("Easy");
  }, []);

  useEffect(() => {
    compareCards(choices, cards, setCards, setTurns, resetCardValue);
  }, [choices]);

  return {
    gameFinished,
    handleLevelBtnClick,
    shuffledCards,
    handleChoice,
    resetCardValue,
    resetGame,
    turns,
    completed,
    finished,
    setFinished,
    cards,
    choices,
  };
};

export default useCardGame;
