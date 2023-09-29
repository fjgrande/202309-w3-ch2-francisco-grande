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

const getComparateResultGame = (visibleCard, hiddenCard) => {
  if (visibleCard.score === hiddenCard.score) {
    return "Equal";
  } else if (visibleCard.score > hiddenCard.score) {
    return "Smaller";
  } else {
    return "Greater";
  }
};

const getCheckResultGame = (userInput, computerInput) => {
  if (userInput === computerInput) return `The card it's ${computerInput}😃`;
  else {
    return `The card it's ${computerInput}😥`;
  }
};

const cardUserSuit = document.querySelectorAll(".card-user-suit");
const cardUserFigure = document.querySelector(".card-user.card-figure");
const buttonGreater = document.querySelector(".button-greater");
const buttonSmaller = document.querySelector(".button-smaller");
const cardVisibleSuit = document.querySelectorAll(".card-visible-suit");
const cardVisibleFigure = document.querySelector(".card-visible.card-figure");
const buttonStart = document.querySelector(".button-start");
const elementHiddenCards = document.querySelector(".hidden-cards");
const hiddenButtonGreater = document.querySelector(".button-greater");
const hiddenButtonSmaller = document.querySelector(".button-smaller");
const hiddenInterrogant = document.querySelector(".interrogant");

buttonGreater.addEventListener("click", () => {
  cardUserSuit.forEach((suit) => {
    suit.textContent = `${hiddenCard.suit}`;
    hiddenInterrogant.classList.add("button-greater");
  });

  cardUserFigure.textContent = `${hiddenCard.cardsValue}`;
  document.querySelector(".feedback").textContent = getCheckResultGame(
    "Greater",
    getComparateResultGame(visibleCard, hiddenCard)
  );
  hiddenButtonGreater.classList.add("button-greater");
  hiddenButtonSmaller.classList.add("button-smaller");
});

buttonStart.addEventListener("click", () => {
  cardVisibleSuit.forEach((suit) => {
    suit.textContent = `${visibleCard.suit}`;
  });
  cardVisibleFigure.textContent = `${visibleCard.cardsValue}`;
  elementHiddenCards.classList.remove("hidden-cards");
  hiddenButtonGreater.classList.remove("button-greater");
  hiddenButtonSmaller.classList.remove("button-smaller");
  buttonStart.classList.add("hidden-cards");
});

buttonSmaller.addEventListener("click", () => {
  cardUserSuit.forEach((suit) => {
    suit.textContent = `${hiddenCard.suit}`;
  });
  hiddenInterrogant.classList.add("button-greater");
  cardUserFigure.textContent = `${hiddenCard.cardsValue}`;
  document.querySelector(".feedback").textContent = getCheckResultGame(
    "Smaller",
    getComparateResultGame(visibleCard, hiddenCard)
  );
  hiddenButtonGreater.classList.add("button-greater");
  hiddenButtonSmaller.classList.add("button-smaller");
});
