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

    deal(cards) {
        let hand = [];

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

    get_trump(_callback) {

        var trump;

        // deal five cards to the first player
        p1.hand = deck.deal(5);

        // let the player choose the trump
        const properties = [
            {
                name: 'trump_in',
                validator: /^[S|s|C|c|D|d|H|h]{1,1}$/,
                warning: 'trump can only be [s]pades, [c]lubs, [d]iamonds, [h]earts'
            },
        ];

        prompt.get(properties, function (err, result) {
            if (err) { 
                return onErr(err); 
            }
            console.log('Command-line input received:');
            console.log('  Trump: ' + result.trump_in);
        });

        switch(trump_in) {
            case 'S':
            case 's':
                trump = suits[0];
                valid = true;
                break;
            case 'C':
            case 'c':
                trump = suits[1];
                valid = true;
                break;
            case 'D':
            case 'd':
                trump = suits[2];
                valid = true;
                break;
            case 'H':
            case 'h':
                trump = suits[3];
                valid = true;
                break;
        }

        _callback();

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

let trump = null,
    trump_in,
    tricks = 0,
    game = {
        game_over: false
    };

// start the game...
// choose the trump
p1.get_trump(function() {
    console.log('done');
});

// we will keep track of the number of rounds so that we can 
// rotate who is choosing the trump

if (trump != null) {
    console.log('The trump is now ' + trump);
}



// put 13 cards in players hands
for (let p of players) {
    p.hand = deck.deal(13);
}

p1.play(p1.hand[0]);


