console.log('Hello world');

function button_click() {
    alert("button clicked" + this.id + " woo");
}

function set_up() {
    var parent = document.getElementById('content');
    var canvas = document.createElement('canvas');

    canvas.style.width = '100%';
    canvas.height = canvas.width;

    canvas.style.border = "1px solid";

    parent.appendChild(canvas);

    document.getElementById("button").addEventListener("click", button_click());
}

function play() {
    console.log('Play Tic-tac-toe');

    set_up();

    // var winner = check_for_winner();

    // if (!winner) {
    //     console.log('No winner yet');
    //     check_turn();
    // } else {
    //     console.log('Player X won, restarting game...');
    //     setTimeout(reset, 3000);
    // }

    

    // var grid_pane = document.createElement('grid_pane');

    // grid_pane.style.width = '33%';

    // for (var i = 0; i < 9; i++) {
    //     text += cars[i] + "<br>";
    // }


}
play();