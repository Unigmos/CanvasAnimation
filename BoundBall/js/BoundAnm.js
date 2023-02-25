let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x = 1;
let add_x = 3;
let y = 1;
let add_y = 5;

let callback_id;

function BoundAnm(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // x_pos
    if (x <= 0 || canvas.width <= x){
		add_x *= -1;
    }
    x = x + add_x;

    // y_pos
    if (y <= 0 || canvas.height <= y){
		add_y *= -1;
    }
    y = y + add_y;

	// 描画
	ctx.beginPath();
	ctx.fillStyle = 'dodgerblue';
    // x, y, radius, startAngle, endAngle, anticlockwise	
    ctx.arc(x, y, 5, 0, Math.PI * 2, true);
    ctx.fill()

    callback_id = requestAnimationFrame(BoundAnm) ;
}

BoundAnm();

document.getElementById("start-button").onclick = function(){
    window.cancelAnimationFrame(callback_id);
    BoundAnm();
}

document.getElementById("stop-button").onclick = function(){
    window.cancelAnimationFrame(callback_id);
}