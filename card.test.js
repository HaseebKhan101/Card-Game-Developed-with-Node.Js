const { createDeck, shuffleDeck, drawCard, compareCards } = require("./card");

test("createDeck should return a deck of 40 cards", () => {
  const deck = createDeck();
  expect(deck.length).toBe(40);
});

test("shuffleDeck should shuffle the deck", () => {
  const deck = [1, 2, 3, 4, 5];
  const originalDeck = [...deck];
  shuffleDeck(deck);
  expect(deck).not.toEqual(originalDeck);
});

test("drawCard should draw a card from the draw pile", () => {
  const playerDrawPile = [];
  const playerDiscardPile = [4, 5];
  drawCard(playerDrawPile, playerDiscardPile);
  expect(playerDrawPile.length).toBe(1); // One card should be drawn
  expect(playerDiscardPile.length).toBe(0); // Discard pile should be empty
});

describe("compareCards function", () => {
  let player1DiscardPile,
    player1DrawPile,
    player2DiscardPile,
    player2DrawPile,
    tieCards;

  beforeEach(() => {
    player1DiscardPile = [];
    player1DrawPile = [5, 4, 3];
    player2DiscardPile = [];
    player2DrawPile = [6, 2, 1];
    tieCards = [];
  });

  test("when comparing two cards, the higher card should win", () => {
    compareCards(
      5,
      player1DiscardPile,
      player1DrawPile,
      3,
      player2DiscardPile,
      player2DrawPile,
      tieCards
    );
    expect(player1DiscardPile.length).toBe(2); // Player 1 wins
    expect(player2DiscardPile.length).toBe(0);
  });

  test("when comparing two cards, the higher card should win", () => {
    compareCards(
      3,
      player1DiscardPile,
      player1DrawPile,
      5,
      player2DiscardPile,
      player2DrawPile,
      tieCards
    );
    expect(player1DiscardPile.length).toBe(0);
    expect(player2DiscardPile.length).toBe(2); // Player 2 wins
  });

  test("when comparing two cards of the same value, the winner of the next round should win 4 cards", () => {
    tieCards = [];
    compareCards(
      4,
      player1DiscardPile,
      player1DrawPile,
      4,
      player2DiscardPile,
      player2DrawPile,
      tieCards
    );
    expect(tieCards.length).toBe(2); // Two cards should be in the tie pile
    compareCards(
      5,
      player1DiscardPile,
      player1DrawPile,
      4,
      player2DiscardPile,
      player2DrawPile,
      tieCards
    );
    expect(player1DiscardPile.length).toBe(4); // Player 1 should win 4 cards
    expect(player2DiscardPile.length).toBe(0); // Player 2 should not win any cards
  });
});
