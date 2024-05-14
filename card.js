// Define the deck of cards
function createDeck() {
  const deck = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 0; j < 4; j++) {
      deck.push(i);
    }
  }
  return deck;
}

// Shuffle the deck of cards
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Draw a card from the draw pile
function drawCard(playerDrawPile, playerDiscardPile) {
  if (playerDrawPile.length === 0) {
    // Shuffle the discard pile into the draw pile
    shuffleDeck(playerDiscardPile);
    playerDrawPile.push(...playerDiscardPile);
    playerDiscardPile.length = 0;
  }
  return playerDrawPile.pop();
}

// Function to compare two cards and determine the winner
function compareCards(
  player1Card,
  player1DiscardPile,
  player1DrawPile,
  player2Card,
  player2DiscardPile,
  player2DrawPile,
  tieCards
) {
  if (player1Card > player2Card) {
    console.log(
      `Player 1 (${
        player1DrawPile.length + player1DiscardPile.length + 1
      } cards): ${player1Card}`
    );
    console.log(
      `Player 2 (${
        player2DrawPile.length + player2DiscardPile.length + 1
      } cards): ${player2Card}`
    );
    console.log(`Player 1 wins this round \n `);
    if (tieCards.length > 0) {
      player1DiscardPile.push(player1Card, player2Card, ...tieCards);
      tieCards.length = 0;
    } else {
      player1DiscardPile.push(player1Card, player2Card);
    }
  } else if (player2Card > player1Card) {
    console.log(
      `Player 1 (${
        player1DrawPile.length + player1DiscardPile.length + 1
      } cards): ${player1Card}`
    );
    console.log(
      `Player 2 (${
        player2DrawPile.length + player2DiscardPile.length + 1
      } cards): ${player2Card}`
    );
    console.log(`Player 2 wins this round \n `);
    if (tieCards.length > 0) {
      player2DiscardPile.push(player1Card, player2Card, ...tieCards);
      tieCards.length = 0;
    } else {
      player2DiscardPile.push(player1Card, player2Card);
    }
  } else {
    // In case of a tie, both cards are discarded

    tieCards.push(player1Card, player2Card);
    console.log(
      `Player 1 (${
        player1DrawPile.length + player1DiscardPile.length + 1
      } cards): ${player1Card}`
    );
    console.log(
      `Player 2 (${
        player2DrawPile.length + player2DiscardPile.length + 1
      } cards): ${player2Card}`
    );
    console.log(`No winner in this round \n `);
  }
}

module.exports = { createDeck, shuffleDeck, drawCard, compareCards };
