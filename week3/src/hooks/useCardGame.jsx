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
      const cards = generateCardsByLevel(level);
      selectCompleteLevel(level);
      setChoices([null, null]);
      setCards(cards);
      setTurns(NUMBER.ZERO);
    },
    [setCompleted]
  );

  const selectCompleteLevel = (level) => {
    switch (level) {
      case LEVEL.EASY:
        return setCompleted(NUMBER.EASY_LEVEL);
      case LEVEL.NORMAL:
        return setCompleted(NUMBER.NORMAL_LEVEL);
      case LEVEL.HARD:
        return setCompleted(NUMBER.HARD_LEVEL);
      default:
        return setCompleted(NUMBER.EASY_LEVEL);
    }
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
      compareCards(choices, cards, setCards, setTurns, resetCardValue);
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
