# Card Game Developed with Node.Js

# Introduction

This app will build a card game for 2 players. The logic of the card are subdivided into 4 tasks, which explains the game principle and how each player rotate turns accordingly.

## Task1:

Each card shows a number from 1 to 10. Each number is in the deck four times for a total of 40 cards. At the
beginning of the game, the deck is shuffled (Hint: Look up Fisher-Yates Shuffle Algorithm) to
make sure it is in a random order. Each player receives a stack of 20 cards from the shuffled deck as their
draw pile. The draw pile is kept face-down in front of the player. Each player also keeps a discard pile (see
"Task 3" for more). Tests:

1. A new deck should contain 40 cards
2. A shuffle function should shuffle a deck

## Task2:

Each turn, both players draw the top card. If there are no more cards in the draw pile, shuffle the discard
pile and use those cards as the new draw pile. Once a player has no cards in either their draw or discard
pile, that player loses. Test: If a player with an empty draw pile tries to draw a card, the discard pile is
shuffled into the draw pile

## Task3:

The players present their drawn card and compare the values. The player with the higher value card, takes
both cards and adds them to their discard pile, next to the draw pile. If the cards show the same value, the
winner of the next turn wins these cards as well. If a tie situation appears multiple times in a row the winner
after the tied rounds receives the cards from all tied rounds. Hint: The game will likely result in a stalemate,
if this rule is not implemented. Tests:

1. When comparing two cards, the higher card should win
2. When comparing two cards of the same value, the winner of the next round should win 4 cards

## Task4:

The program should output the cards that are played each turn and who wins. At the end the program
should output the player that won.

```
Player 1 (20 cards): 8
Player 2 (20 cards): 1
Player 1 wins this round

Player 1 (21 cards): 1
Player 2 (19 cards): 10
Player 2 wins this round

[...]

Player 1 (38 cards): 4
Player 2 (2 cards): 4
No winner in this round

Player 1 (37 cards): 7
Player 2 (1 cards): 3
Player 1 wins this round

Player 1 wins the game!

```

## Prerequisites

Before running this code, ensure that you have the following installed:

- Node.Js
- NPM

## Dependencies

To install the required dependencies, navigate to the project directory and run the following command:

$ npm install

## Run the code

Once the dependencies are installed, you can run the card game using following command:

$ node main.js

The console will display the result.

## Testing

The assignment utilizes Jest for unit testing, To run the tests, run the command:

$ npm test
