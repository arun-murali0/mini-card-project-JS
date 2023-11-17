// generate cards and suits

function generateDeck() {
  const deck = [];
  const suits = ["Hearts", "clubs", "diamonds", "spiders"];
  const cards = [
    "ace",
    "king",
    "queen",
    "joker",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  // setting 4 pair values for each suits
  for (let card of cards) {
    for (let suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }

  return deck;
}
const deck = generateDeck();

// draw cards
function randomCards(deck) {
  const deckSize = deck.length;
  const generateIndex = Math.floor(Math.random() * deckSize);
  const card = deck[generateIndex];

  // deleting taken or chosen card 1 time
  deck.splice(generateIndex, 1);
  return card;
}

// hands player
playerHands = [];
playerDeliver = [];

playerHands.push(randomCards(deck));
playerHands.push(randomCards(deck));
playerDeliver.push(randomCards(deck));
playerDeliver.push(randomCards(deck));

// calculating a points based on card
const checkScore = (handCard) => {
  let total = 0;
  for (let cardObj of handCard) {
    //  taking as 10 points for these
    if (
      cardObj.card === "queen" ||
      cardObj.card === "joker" ||
      cardObj.card === "king"
    ) {
      return (total += 10);
    } else if (cardObj.card === "ace") {
      return (total += 1);
    } else {
      total += Number(cardObj.card);
    }
  }
  return total;
};

const score = checkScore(playerHands);

console.log("Starting player hand", playerHands);
console.log("starting player score", checkScore(playerHands));
console.log("starting deal hand", playerDeliver);
console.log("starting dealer score", checkScore(playerDeliver));

console.log("------------------------------------------");

// player loops
while (true) {
  // player 1
  playerHands.push(randomCards(deck));
  const playerScore = checkScore(playerHands);
  let dealerScore = checkScore(playerDeliver);
  if (playerScore > 21) {
    console.log(
      `You Lose!The Final score is :${playerScore} and The dealerScore is :${dealerScore} `
    );
    break;
  }
  if (playerScore === 21) {
    console.log(
      `You win!The Final score is :${playerScore} and The dealerScore is :${dealerScore} `
    );
    break;
  }

  // player 2
  playerDeliver.push(randomCards(deck));
  const playerScore1 = checkScore(playerDeliver);
  let dealerScore1 = checkScore(playerHands);
  if (playerScore1 > 21) {
    console.log(
      `You Win!The Final score is :${playerScore1} and The dealerScore is :${dealerScore1} `
    );
    break;
  }
  if (playerScore1 === 21) {
    console.log(
      `You Loss!The Final score is :${playerScore1} and The dealerScore is :${dealerScore1} `
    );
    break;
  }
}

console.log("--------------------------------");

console.log("ending player hand", playerHands);
console.log("ending player score", checkScore(playerHands));
console.log("ending deal hand", playerDeliver);
console.log("ending dealer score", checkScore(playerDeliver));

console.log("----------------------------------");
