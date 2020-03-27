// create the suits and the card values to create a deck of cards
let suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
let values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    to_string() {
        return this.value + " " + this.suit;
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

    deal() {
        let hand = [];

        while (hand.length < 13) {
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

    // can play a card
    play(card) {
        console.log('Played ' + card.to_string());
    }
}

let deck = new Deck();
deck.create_deck(suits, values)

// put cards in hand
let player_1 = new Player(1);
player_1.hand = deck.deal();

player_1.play(player_1.hand[0]);

let players = 4,
    tricks = 0,
    game = {
        players: [],
        game_over: false
    },
    i = players;
