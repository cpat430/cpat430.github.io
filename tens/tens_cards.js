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
let values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    to_string() {
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
