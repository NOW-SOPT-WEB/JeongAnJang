import { NUMBER } from "../constants/constants";
import { CARD_DATA } from "../constants/data";

export const shuffleCards = (array) => {
  return array
    .sort(() => Math.random() - NUMBER.SHUFFLE_HELP_NUM)
    .map((card) => ({ ...card, id: Math.random() }));
};

export const generateCardsByLevel = (level, setCompleted) => {
  let totalPairs;
  switch (level) {
    case "Easy":
      totalPairs = NUMBER.EASY_LEVEL;
      setCompleted(NUMBER.EASY_LEVEL);
      break;
    case "Normal":
      totalPairs = NUMBER.NORMAL_LEVEL;
      setCompleted(NUMBER.NORMAL_LEVEL);
      break;
    case "Hard":
      totalPairs = NUMBER.HARD_LEVEL;
      setCompleted(NUMBER.HARD_LEVEL);
      break;
    default:
      totalPairs = NUMBER.EASY_LEVEL;
      break;
  }

  const cardPairs = CARD_DATA.slice(0, totalPairs);
  const cards = [...cardPairs, ...cardPairs];

  return shuffleCards(cards);
};

export const compareCards = (
  choices,
  cards,
  setCards,
  setTurns,
  resetCardValue
) => {
  const isMatch = choices[0]?.name === choices[1]?.name;
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
