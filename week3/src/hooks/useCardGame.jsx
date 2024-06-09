import { useCallback, useEffect, useState } from "react";
import { compareCards, generateCardsByLevel } from "../util/util";
import { LEVEL, NUMBER } from "../constants/constants";

const useCardGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(NUMBER.ZERO);
  const [choices, setChoices] = useState([null, null]);
  const [requiredMatch, setRequiredMatch] = useState(NUMBER.EASY_LEVEL);

  const handleLevelBtnClick = useCallback((level) => {
    shuffledCards(level);
  }, []);

  const generateCards = (level) => {
    const cards = generateCardsByLevel(level);
    return cards;
  };

  const shuffledCards = useCallback(
    (level) => {
      const cards = generateCards(level);
      setCards(cards);
      selectRequiredMatch(level);
      resetCardValue();
      setTurns(NUMBER.ZERO);
    },
    [setRequiredMatch]
  );

  const selectRequiredMatch = (level) => {
    switch (level) {
      case LEVEL.EASY:
        setRequiredMatch(NUMBER.EASY_LEVEL);
        break;
      case LEVEL.NORMAL:
        setRequiredMatch(NUMBER.NORMAL_LEVEL);
        break;
      case LEVEL.HARD:
        setRequiredMatch(NUMBER.HARD_LEVEL);
        break;
      default:
        setRequiredMatch(NUMBER.EASY_LEVEL);
        break;
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
    resetCardValue();
    setTurns(NUMBER.ZERO);
    setRequiredMatch(NUMBER.EASY_LEVEL);
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
    requiredMatch,
    cards,
    choices,
  };
};

export default useCardGame;
