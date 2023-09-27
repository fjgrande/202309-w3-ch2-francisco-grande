const suitsCards = ["♠", "♣", "♦ ", "♥"];

const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const generateDecksCard = () => {
  const cards = [];

  suitsCards.forEach((suit) => {
    cardValues.forEach((card, positionCard) => {
      cards.push({ cardsValue: card, suit: suit, score: positionCard });
    });
  });

  return cards;
};

const getRandomCards = () => {
  const card =
    generateDecksCard()[Math.floor(Math.random() * generateDecksCard().length)];

  return card;
};

const visibleCard = getRandomCards();
const hiddenCard = getRandomCards();

const getComparateResultGame = () => {
  if (visibleCard.score === hiddenCard.score) {
    return 0;
  } else if (visibleCard.score < hiddenCard.score) {
    return 1;
  } else {
    return -1;
  }
};
