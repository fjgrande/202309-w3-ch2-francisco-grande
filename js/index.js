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

const cardUserSuit = document.querySelectorAll(".card-user-suit");
const cardUserFigure = document.querySelector(".card-user.card-figure");

const buttonGreater = document.querySelector(".button-greater");
const buttonSmaller = document.querySelector(".button-smaller");

buttonGreater.addEventListener("click", () => {
  cardUserSuit.forEach((suit) => {
    suit.textContent = `${hiddenCard.suit}`;
  });

  cardUserFigure.textContent = `${hiddenCard.cardsValue}`;
});

const cardVisibleSuit = document.querySelectorAll(".card-visible-suit");
const cardVisibleFigure = document.querySelector(".card-visible.card-figure");

const buttonStart = document.querySelector(".button-start");

buttonStart.addEventListener("click", () => {
  cardVisibleSuit.forEach((suit) => {
    suit.textContent = `${visibleCard.suit}`;
  });
  cardVisibleFigure.textContent = `${visibleCard.cardsValue}`;
});

buttonSmaller.addEventListener("click", () => {
  cardUserSuit.forEach((suit) => {
    suit.textContent = `${hiddenCard.suit}`;
  });
  cardUserFigure.textContent = `${hiddenCard.cardsValue}`;
});

const getComparateResultGame = () => {
  if (visibleCard.score > hiddenCard.score) {
    return -1;
  } else if (visibleCard.score < hiddenCard.score) {
    return 1;
  } else {
    return 0;
  }
};

const getCheckResultGame = () => {
  if (getComparateResultGame() === 1) {
    console.log("Tu carta es mayor");
  } else if (getComparateResultGame() === -1) {
    console.log("tu carta es menor");
  } else {
    console.log("tu carta es igual");
  }
};
