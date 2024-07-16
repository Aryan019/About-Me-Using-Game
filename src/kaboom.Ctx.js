import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true,

    // Setting up the canvas in the kaboom
    canvas: document.getElementById("game")
});