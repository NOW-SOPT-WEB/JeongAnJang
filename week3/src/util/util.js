import { LEVEL, NUMBER } from "../constants/constants";
import { CARD_DATA } from "../constants/data";

const randomShuffle = (array) => {
  return array.sort(() => Math.random() - NUMBER.SHUFFLE_HELP_NUM);
};

export const shuffleCards = (array) => {
  return randomShuffle(array).map((card) => ({ ...card, id: Math.random() }));
};

export const generateCardsByLevel = (level, setCompleted) => {
  let totalPairs;
  switch (level) {
    case LEVEL.EASY:
      totalPairs = NUMBER.EASY_LEVEL;
      setCompleted(NUMBER.EASY_LEVEL);
      break;
    case LEVEL.NORMAL:
      totalPairs = NUMBER.NORMAL_LEVEL;
      setCompleted(NUMBER.NORMAL_LEVEL);
      break;
    case LEVEL.HARD:
      totalPairs = NUMBER.HARD_LEVEL;
      setCompleted(NUMBER.HARD_LEVEL);
      break;
    default:
      totalPairs = NUMBER.EASY_LEVEL;
      break;
  }

  const cardPairs = randomShuffle(CARD_DATA).slice(0, totalPairs);
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
  const updatedCards = cards.map((card) => {
    card.name === choices[0]?.name ? { ...card, status: isMatch } : card;
  });

  if (!choices[0] || !choices[1]) return;

  if (isMatch) {
    setTurns((prevTurns) => prevTurns + 1);
    setCards(updatedCards);
  } else {
    setTimeout(resetCardValue, 1000);
  }
};
