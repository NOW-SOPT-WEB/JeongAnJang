import { useCallback, useEffect, useState } from "react";
import { compareCards, generateCardsByLevel } from "../util/util";
import { LEVEL, NUMBER } from "../constants/constants";

const useCardGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(NUMBER.ZERO);
  const [choices, setChoices] = useState([null, null]);
  const [completed, setCompleted] = useState(NUMBER.EASY_LEVEL);

  const handleLevelBtnClick = useCallback((level) => {
    shuffledCards(level);
  }, []);

  const shuffledCards = useCallback(
    (level) => {
      const cards = generateCardsByLevel(level, setCompleted);
      setChoices([null, null]);
      setCards(cards);
      setTurns(NUMBER.ZERO);
    },
    [setCompleted]
  );

  const handleChoice = (card) => {
    if (choices.every((choice) => choice === null)) {
      setChoices([card, null]);
    } else if (choices[0] && !choices[1]) {
      setChoices([choices[0], card]);
    }
  };

  const resetCardValue = () => {
    setChoices([null, null]);
  };

  const resetGame = () => {
    setChoices([null, null]);
    setTurns(NUMBER.ZERO);
    setCompleted(NUMBER.EASY_LEVEL);
    shuffledCards(LEVEL.EASY);
  };

  useEffect(() => {
    shuffledCards(LEVEL.EASY);
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      compareCards(
        choices,
        cards,
        setCards,
        setTurns,
        resetCardValue,
        setChoices
      );
      console.log("turns", turns);
      console.log("completed", completed);
    }
  }, [choices]);

  return {
    handleLevelBtnClick,
    shuffledCards,
    handleChoice,
    resetCardValue,
    resetGame,
    turns,
    completed,
    cards,
    choices,
  };
};

export default useCardGame;
