const {
  createDeck,
  shuffleDeck,
  drawCard,
  compareCards,
} = require("./SAP_card1");

// Create a deck of cards
const deck = createDeck();

// Create discard piles array for each player and tie cards array
const player1DiscardPile = [];
const player2DiscardPile = [];
const tieCards = [];

// Shuffule the deck
shuffleDeck(deck);

// Create draw piles for each player
const player1DrawPile = deck.slice(0, 20);
const player2DrawPile = deck.slice(20, 40);

// Play the game

while (
  player1DrawPile.length > 0 ||
  player1DiscardPile.length > 0 ||
  player2DrawPile.length > 0 ||
  player2DiscardPile.length > 0
) {
  if (player1DrawPile.length === 0 && player1DiscardPile.length === 0) {
    console.log("Player 2 wins the game");
    break;
  } else if (player2DrawPile.length === 0 && player2DiscardPile.length === 0) {
    console.log("Player 1 wins the game");
    break;
  } else {
    //Draw a card from the draw pile
    const player1Card = drawCard(player1DrawPile, player1DiscardPile);
    const player2Card = drawCard(player2DrawPile, player2DiscardPile);
    compareCards(
      player1Card,
      player1DiscardPile,
      player1DrawPile,
      player2Card,
      player2DiscardPile,
      player2DrawPile,
      tieCards
    );
  }
}
