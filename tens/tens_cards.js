var readline = require('readline-sync');

// create a readline interface for reading input from user
const prompt = require('prompt');

prompt.start();

function onErr(err) {
    console.log(err);
    return 1;
}

// create the suits and the card values to create a deck of cards
let suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
let values = [2,3,4,5,6,7,8,9,10,11,12,13,14];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    to_string() {

        if (value == 11) {
            value = 'Jack';
        } else if (value == 12) {
            value = 'Queen';
        } else if (value == 13) {
            value = 'King';
        } else if (value == 14) {
            value = 'Ace'
        }

        return this.value + " of " + this.suit;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    create_deck(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
    }

    shuffle_deck() {
        let counter = this.deck.length, temp, i;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }

        return this.deck;
    }

    deal(hand, cards) {

        while (hand.length < cards) {
            hand.push(this.deck.pop());
        }

        return hand;
    }
}

class Player {
    constructor(position) {
        this.position = position;
        this.hand = [];
        this.tricks = 0;
    }

    get_trump() {

        var trump;

        // deal five cards to the first player
        p1.hand = deck.deal(p1.hand, 5);

        console.log(p1.hand);

        var index = -1;

        // ensures one trump is chosen
        while (index == -1) {
            index = readline.keyInSelect(suits, 'Which suit?');
        }

        console.log('Ok, ' + suits[index] + ' is now the trump.');

        trump = suits[index];

        return trump;
    }

    // can play a card
    play(card) {
        console.log('Played ' + card.to_string());
    }
}

class Trick {
    constructor() {
        this.cards = [];
    }

    get_suit() {
        return this.cards[0].suit;
    }

    // gets the winner assuming all cards played are valid
    get_winner() {
        var cards = this.cards,
            card,
            suit,
            best = cards[0],
            player = 1;

        suit = cards[0].suit;

        console.log(best);

        for (let i = 1; i < cards.length; i++) {
            card = cards[i];

            console.log(card);

            // if the first card is not a trump
            if (suit != trump) {
                // we compare values to the first card
                if (card.suit == suit) {
                    if (card.value > best.value && best.suit != trump) {
                        best = card;
                        player = i+1;
                    }
                } else if (card.suit != suit && card.suit != trump) {
                    continue;
                } else {
                    if (best.suit != trump) {
                        best = card;
                        player = i+1;
                    } else if (card.value > best.value) {
                        best = card;
                        player = i+1;
                    }
                }
            } else {
                if (card.suit == trump) {
                    if (card.value > best.value) {
                        best = card;
                        player = i+1;
                    }
                }
            }
        }

        return player;
    }
}

// create the playing card deck
let deck = new Deck();
deck.create_deck(suits, values);

// shuffle the deck
deck.shuffle_deck();

// create the four players
let p1 = new Player(1),
    p2 = new Player(2),
    p3 = new Player(3),
    p4 = new Player(4);

let players = [p1,p2,p3,p4];

let trump;

// choose the trump
trump = players[0].get_trump();

// we will keep track of the number of rounds so that we can 
// rotate who is choosing the trump

// deal 13 cards each in players hands
for (let p of players) {
    p.hand = deck.deal(p.hand, 13);
}

// now that the hands are all dealt, p1 will start.
// game starts
let winner = false;

let trick = new Trick();

trick.cards.push(p1.hand[0]);
trick.cards.push(p2.hand[0]);
trick.cards.push(p3.hand[0]);
trick.cards.push(p4.hand[0]);



let winning_player = trick.get_winner();
console.log(winning_player);

// while (!winner) {

// }