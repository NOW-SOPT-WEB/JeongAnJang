import { NUMBER } from "../constants/constants";

export const shuffleCards = (array) => {
  return array
    .sort(() => Math.random() - NUMBER.SHUFFLE_HELP_NUM)
    .map((card) => ({ ...card, id: Math.random() }));
};
