canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var last_position_of_touch_x, last_position_of_touch_y;
colour = "Red";
linewidth = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("Colour").value;
    linewidth = document.getElementById("Line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    color = document.getElementById("Colour").value;
    linewidth = document.getElementById("Line").value;
}
canvas.addEventListener("touchmove", touchmove);

function touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = linewidth;
    console.log("Last position of X and Y coordinates = ");
    console.log("X = " + last_position_of_touch_x + "Y = " + last_position_of_touch_y);
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);

    console.log("Current position of X and Y coordinates = ");
    console.log("X = " + current_position_of_touch_x + "Y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);

    ctx.stroke();
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = linewidth;
        console.log("Last position of X and Y coordinates = ");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of X and Y coordinates = ");
        console.log("X = " + current_position_of_x + "Y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);

        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}