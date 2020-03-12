console.log('Hello world');

function button_click(event) {
    alert("button clicked" + this.id + " woo");
}

function draw() {

    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_board();
    fill_board();

    function draw_board() {
        
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(cell_size,0);
        ctx.lineTo(cell_size,canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cell_size * 2,0);
        ctx.lineTo(cell_size * 2,canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,cell_size);
        ctx.lineTo(canvas.width,cell_size);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0,cell_size * 2);
        ctx.lineTo(canvas.width,cell_size * 2);
        ctx.stroke();
    }

    function fill_board() {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        for (let i = 0; i < map.length; i++) {
            let coords = get_cell_coordinates(i)
        }

        ctx.save();
        ctx.translate(coords.x + cell_size / 2, coords.y + cell_size / 2);
        if (map[i] == X) {
            draw_x();
        } else if (map[i] == O) {
            draw_o();
        } 
        ctx.restore();
    }

    function draw_x() {
        ctx.beginPath();
        ctx.moveTo(-cell_size / 3, -cell_size / 3);
        ctx.lineTo(cell_size / 3, cell_size / 3);
        ctx.moveTo(cell_size / 3, cell_size / 3);
        ctx.lineTo(-cell_size / 3, -cell_size / 3);
        ctx.stroke();
    }

    function draw_o() {
        ctx.beginPath();
        ctx.arc(0,0,cell_size / 3, 0, Math.PI * 2);
        ctx.stroke();
    }

    requestAnimationFrame(draw);
}

function get_cell_coordinates(cell) {
    let x = (cell % 3) * cell_size;
        y = Math.floor(cell / 3) * cell_size;

    return {
        'x': x,
        'y': y,
    };
}

function set_up() {
    // var parent = document.getElementById('content');
    // var canvas = document.createElement('canvas');

    // canvas.style.width = '100%';
    // canvas.height = canvas.width;

    // canvas.style.border = "1px solid";

    // parent.appendChild(canvas);

    // document.getElementById("button").addEventListener("click", button_click());
    // let parent = document.getElementById('content');
    let canvas = document.getElementById('ttt'), 
        ctx = canvas.getContext('2d'), 
        msg = document.getElementById('message'), 
        cell_size = 100;
        map = [
            1,0,0,
            0,1,0,
            -1,0,-1
        ];
        win_patterns = [
            0b111000000, 0b000111000, 0b000000111,
            0b100100100, 0b010010010, 0b001001001,
            0b100010001, 0b001010100
        ];
        BLANK = 0, X = 1, O = -1;

    canvas.width = canvas.height = 3 * cell_size;
}

function play() {
    console.log('Play Tic-tac-toe');

    set_up();
    draw();

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