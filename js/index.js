const suitsCards = ["♠", "♣", "♦ ", "♥"];

const cardValue = [
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

const getCardsValue = () => {
  const cards = [];
  suitsCards.forEach((suit) => {
    cardValue.forEach((card, positionCard) => {
      cards.push({ cardsValue: card, suit: suit, value: positionCard });
    });
  });
  return cards;
};

console.log(getCardsValue());
