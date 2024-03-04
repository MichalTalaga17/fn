var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var inner_Width = window.innerWidth;

const fps = 60;
const animation_speed = 1; //speed 1 = 1 second; speed 2 = 0.5 second
const gravitation = 80; //80 = 1m/s2
const block_width = 80;
const block_height = 77.14

const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
    [0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 7, 0, 3, 3, 3, 0, 3, 3, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 0],
    [0, 0, 7, 7, 7, 0, 0, 7, 7, 7, 0, 0, 0, 0, 7, 7, 7, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0],
    [0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 7, 7, 7, 7, 7, 0, 3, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 0],
    [0, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 7, 7, 7, 7, 7, 0, 3, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2]
]
const map2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const map_background = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const map_before_player = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

var width = map[0].length * (block_width)
var height = map.length * (block_height)

var backgrounds = {
    "default": "images/backgrounds/background.jpg"
}
for (const el of Object.keys(backgrounds)) {
    let img = new Image();
    img.src = backgrounds[el];
    backgrounds[el] = img;
}

var blocks = {
    0: { "img": "images/blocks/air.png", "name": "air", "solid": false, "can_climb": false, "drop_shadow": false },
    1: { "img": "images/blocks/dirt.png", "name": "dirt", "solid": true, "can_climb": false, "drop_shadow": false },
    2: { "img": "images/blocks/grass.png", "name": "grass", "solid": true, "can_climb": false, "drop_shadow": false },
    3: { "img": "images/blocks/cobblestone.png", "name": "cobblestone", "solid": true, "can_climb": false, "drop_shadow": false },
    4: { "img": "images/blocks/ladder.png", "name": "ladder", "solid": false, "can_climb": true, "drop_shadow": true },
    5: { "img": "images/blocks/black.png", "name": "black", "solid": true, "can_climb": false, "drop_shadow": false },
    6: { "img": "images/blocks/oak_log.png", "name": "oak_log", "solid": true, "can_climb": false, "drop_shadow": false },
    7: { "img": "images/blocks/leaves.png", "name": "leaves", "solid": true, "can_climb": false, "drop_shadow": false },
}
for (const el in blocks) {
    let img = new Image;
    img.src = blocks[el]["img"];
    blocks[el]["img"] = img;
}


c.style.position = "fixed"

class Player {
    constructor() {
        this.size = 192;
        this.movement_speed = 3;
        this.moving_speed = 2;
        this.jump_height = 20;
        this.attack_damage = 1;
        this.gravitation_work = true;
        this.foot = [this.size / 6, this.size / 7 * 3];
        this.y = 600;
        this.x = 50;
        this.row = Math.floor((this.y + this.size) / (block_height));
        this.column = Math.floor(this.x / (block_width));
        this.name = 'timberman';
        this.move = false;
        this.moving = false;
        this.direction = "right";
        this.animation = false;
        this.falling = false;
        this.falling_velocity = 0;
        this.climb = false
        this.can_climb = false;
        this.hp = 10;
        this.exp = 0;
        this.lvl = 0;
        this.exp_bar = document.querySelector("#exp_bar");
        this.exp_bar.style.width = 600 + "px";
        this.exp_bar_full = document.querySelector("#exp_bar_full");
        this.exp_bar_level = document.querySelector("#exp_level");
        this.health_bar = document.querySelector("#health_grid");
        this.fall_damage = true;
        this.ennemies = []
        this.skins = {
            "attack1": "timberman/attack1.png",
            "attack2": "timberman/attack2.png",
            "climb": "timberman/climb.png",
            "craft": "timberman/craft.png",
            "death": "timberman/death.png",
            "hurt": "timberman/hurt.png",
            "icon": "timberman/icon.png",
            "idle": "timberman/idle.png",
            "jump": "timberman/jump.png",
            "push": "timberman/push.png",
            "run": "timberman/run.png",
            "walk": "timberman/walk.png",
        }
        for (var el in this.skins) {
            let skin = this.skins[el]
            skin = new Image();
            skin.src = "images/" + this.skins[el]
            this.skins[el] = skin;
        }

        setInterval(() => {
            if (this.hp > 0) {
                switch (this.animation) {
                    case false:
                        switch (this.move) {
                            case "walk":
                                this.moving_speed = this.movement_speed;
                                check_border([this])
                                break;
                            case "run":
                                this.moving_speed = this.movement_speed * 2;
                                check_border([this])
                                break;
                            case false:
                                this.moving_speed = 0;
                                break;

                        }
                        switch (this.direction) {
                            case "right":
                                this.moving_speed = Math.abs(this.moving_speed);
                                check_border([this])
                                break;
                            case "left":
                                this.moving_speed = Math.abs(this.moving_speed);
                                this.moving_speed = parseInt('-' + String(this.moving_speed));
                                check_border([this])
                                break;
                        }
                        this.x += this.moving_speed;
                        break;
                    case "jump":
                        if (this.move != "jump") {
                            this.move = "jump"
                            setTimeout(() => {
                                check_border([this])
                                let i = 0;
                                let jump_interval = setInterval(() => {
                                    let solid = blocks[map[Math.floor((this.y + this.size + 1) / (block_height))][Math.floor((this.x + this.foot[0] + 15) / (block_width))]]["solid"];
                                    if (i > 10 && i < 30) this.y -= this.jump_height / 20;
                                    if (i > 30 && i < 40 && !solid) {
                                        this.y += this.jump_height / 10;
                                    }
                                    if (i >= 50) {
                                        clearInterval(jump_interval);
                                        i = 0;
                                    } else i++
                                }, 10)
                            }, 0)
                        }
                        this.x += this.moving_speed * 1.5;
                        break;
                }
                let climb_under;
                try {
                    let foot1 = blocks[map2[Math.floor((this.y + this.size + 5) / (block_height))][Math.floor((this.x + this.foot[0] + 15) / (block_width))]]["can_climb"];
                    let foot2 = blocks[map2[Math.floor((this.y + this.size + 5) / (block_height))][Math.floor((this.x + this.foot[1] - 15) / (block_width))]]["can_climb"];
                    climb_under = foot1 || foot2;
                } catch {}
                if (climb_under) {
                    this.gravitation_work = false;
                    this.fall_damage = false;
                } else {
                    this.gravitation_work = true;
                    setTimeout(() => {
                        this.fall_damage = true;
                    }, 10)
                }

                if (this.animation == false) {
                    if (keyboard_map["Space"] && !this.falling) {
                        this.animation = "jump";
                        player_moves["animation_six"] = 0;
                    }
                    if (keyboard_map["0"]) {
                        this.animation = "attack1";
                        player_moves["animation_six"] = 0;
                        animation_counter = 0;
                        keyboard_map["0"] = false
                        this.ennemies.forEach((item) => {
                            if (this.direction == "right") {
                                if ((this.row == item.row && (this.column[1] + 1 == item.column[0] || this.column[1] + 1 == item.column[1])) && item.hp > 0) {
                                    item.getDamage(this.attack_damage);
                                    if (item.hp == 0) {
                                        item.animation = "dead";
                                        this.addExp(item.exp);
                                    }
                                }
                            } else if (this.direction == "left") {
                                if ((this.row == item.row && (this.column[0] - 1 == item.column[0] || this.column[0] - 1 == item.column[1])) && item.hp > 0) {
                                    item.getDamage(this.attack_damage);
                                    if (item.hp == 0) {
                                        item.animation = "dead";
                                        this.addExp(item.exp);
                                    }
                                }
                            }

                        })
                    }
                    if (keyboard_map["2"]) {
                        this.animation = "attack2";
                        player_moves["animation_six"] = 0;
                        animation_counter = 0;
                        keyboard_map["2"] = false
                        this.ennemies.forEach((item) => {
                            if (this.direction == "right") {
                                if ((this.row == item.row && (this.column[1] + 1 == item.column[0] || this.column[1] + 1 == item.column[1])) && item.hp > 0) {
                                    item.getDamage(this.attack_damage);
                                    if (item.hp == 0) {
                                        item.animation = "dead";
                                        this.addExp(item.exp);
                                    }
                                }
                            } else if (this.direction == "left") {
                                if ((this.row == item.row && (this.column[0] - 1 == item.column[0] || this.column[0] - 1 == item.column[1])) && item.hp > 0) {
                                    item.getDamage(this.attack_damage);
                                    if (item.hp == 0) {
                                        item.animation = "dead";
                                        this.addExp(item.exp);
                                    }
                                }
                            }

                        })
                    }
                    if (keyboard_map["KeyD"]) {
                        this.direction = "right";
                        if (keyboard_map["ShiftLeft"]) this.move = "run"
                        else this.move = "walk"
                    }
                    if (keyboard_map["KeyA"]) {
                        this.direction = "left";
                        if (keyboard_map["ShiftLeft"]) this.move = "run"
                        else this.move = "walk"
                    }
                    if (keyboard_map["KeyW"]) {
                        let foot1 = blocks[map2[Math.floor((this.y + this.size - 1) / (block_height))][Math.floor((this.x + this.foot[0] + 15) / (block_width))]]["can_climb"];
                        let foot2 = blocks[map2[Math.floor((this.y + this.size - 1) / (block_height))][Math.floor((this.x + this.foot[1] - 15) / (block_width))]]["can_climb"];
                        if ((foot1 && foot2)) {
                            this.move = false;
                            this.climb = true;
                            this.move = "climb";
                            this.gravitation_work = false;
                            this.y -= this.movement_speed;
                        } else {
                            if (this.move == "climb") this.move = false;
                            this.climb = false;
                        }
                    }
                    if (keyboard_map["KeyS"]) {
                        this.gravitation_work = true;
                    }
                    if (!keyboard_map["Space"] && !keyboard_map["0"] && !keyboard_map["2"] && !keyboard_map["KeyD"] && !keyboard_map["KeyA"] && !keyboard_map["KeyW"]) {
                        this.move = false;
                    }
                }
            }
        }, 10)

    }
    setposition(x, y) {
        this.y = y - this.size / 2;
        this.x = x - this.size / 2;
    }
    setLevel() {
        let size = parseInt(this.exp_bar.style.width.slice(0, -2));
        this.exp_bar_full.style = "clip:rect(0px, " + (size * ((this.exp % 100) / 100)) + "px, 25px, 0px);"
        if (this.exp >= 100) {
            this.lvl = Math.floor(this.exp / 100);
            this.exp = this.exp % 100;
        }
        if (this.lvl > 0) {
            this.exp_bar_level.innerHTML = this.lvl;
        }
    }
    setHealth() {
        let hearts = this.health_bar.children;
        for (let i = 0; i < hearts.length; i++) {
            if (i <= this.hp / 2 - 1) {
                hearts[i].src = "./images/gui/full_heart.png";
            } else if (i == Math.ceil(this.hp / 2 - 1)) {
                hearts[i].src = "./images/gui/half_heart.png";
            } else {
                hearts[i].src = "./images/gui/heart_background.png";
            }
        }
    }
    getDamage(howMuch) {
        this.animation = "hurt";
        player_moves["hurt"] == 0;
        this.hp -= howMuch;
        this.setHealth();
    }
    addExp(howMuch) {
        this.exp += howMuch;
        this.setLevel();
    }
    draw() {
        ctx.save()
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        this.rotate(this.direction);
        if (!this.move && !this.animation && this.hp > 0) ctx.drawImage(this.skins['idle'], 192 * player_moves[4], 0, 192, 192, this.x, this.y, this.size, this.size);
        if (this.animation) {
            play_animation(this.animation, this)
        } else if (!this.jump && this.hp > 0) {
            if (this.move == "run") ctx.drawImage(this.skins['run'], 192 * player_moves[6], 0, 192, 192, this.x, this.y, this.size, this.size);
            else if (this.move == "walk") ctx.drawImage(this.skins['walk'], 192 * player_moves[6], 0, 192, 192, this.x, this.y, this.size, this.size);
            else if (this.move == "climb") ctx.drawImage(this.skins['climb'], 192 * player_moves[6], 0, 192, 192, this.x, this.y, this.size, this.size)
        } else {
            ctx.drawImage(this.skins['death'], 192 * 5, 0, 192, 192, this.x, this.y, this.size, this.size);
        }
        ctx.restore()
    }
    rotate(direction) {
        if (direction == "left") {
            ctx.translate(this.size + this.x * 2 - this.size / 3, 0);
            ctx.scale(-1, 1);
        } else if (direction == "right") {
            ctx.translate(0, 0);
            ctx.scale(1, 1);
        }
    }
}

class Swordsman {
    constructor() {
        this.size = 192;
        this.movement_speed = 2.5;
        this.moving_speed = 2;
        this.jump_height = 20;
        this.gravitation_work = true;
        this.foot = [this.size / 6, this.size / 7 * 3];
        this.y = 0;
        this.x = 1500;
        this.row = Math.floor((this.y + this.size) / (block_height));
        this.column = Math.floor(this.x / (block_width));
        this.name = 'swordsman';
        this.move = false;
        this.moving = false;
        this.direction = "right";
        this.animation = false;
        this.falling = false;
        this.falling_velocity = 0;
        this.climb = false
        this.can_climb = false;
        this.hp = 5;
        this.exp = this.hp * 2;
        this.fall_damage = true;
        this.attack_speed = 0.5;
        this.attack = false;
        this.attack_damage = 1;
        this.skins = {
            "attack1": "swordsman/attack1.png",
            "attack2": "swordsman/attack2.png",
            "attack3": "swordsman/attack3.png",
            "climb": "swordsman/climb.png",
            "craft": "swordsman/craft.png",
            "death": "swordsman/death.png",
            "hurt": "swordsman/hurt.png",
            "icon": "swordsman/icon.png",
            "idle": "swordsman/idle.png",
            "jump": "swordsman/jump.png",
            "push": "swordsman/push.png",
            "run": "swordsman/run.png",
            "walk": "swordsman/walk.png",
            "heart": "gui/full_heart.png"
        }
        for (var el in this.skins) {
            let skin = this.skins[el]
            skin = new Image();
            skin.src = "images/" + this.skins[el]
            this.skins[el] = skin;
        }
        let swordsman_interval = setInterval(() => {

            let climb_under;
            try {
                let foot1 = blocks[map2[Math.floor((this.y + this.size + 5) / (block_height))][Math.floor((this.x + this.foot[0] + 15) / (block_width))]]["can_climb"];
                let foot2 = blocks[map2[Math.floor((this.y + this.size + 5) / (block_height))][Math.floor((this.x + this.foot[1] - 15) / (block_width))]]["can_climb"];
                climb_under = foot1 || foot2;
            } catch {}
            if (climb_under) {
                this.gravitation_work = false;
                this.fall_damage = false;
            } else {
                this.gravitation_work = true;
                setTimeout(() => {
                    this.fall_damage = true;
                }, 10)
            }

            if (this.hp <= 0) clearInterval(swordsman_interval);
            if (this.row == player.row && player.hp > 0) {
                var this_collumn = (this.column[0] + this.column[1]) / 2;
                var player_collumn = (player.column[0] + player.column[1]) / 2;
                if (this_collumn - 1 > player_collumn) {
                    this.move = "run";
                    this.direction = "left";
                    this.x -= this.movement_speed * 2;
                } else if (this_collumn + 1 < player_collumn) {
                    this.move = "run";
                    this.direction = "right";
                    this.x += this.movement_speed * 2;
                } else if (this_collumn - 1 < player_collumn || this_collumn + 1 > player_collumn) {
                    this.move = false;
                    if (this.attack == false) {
                        this.attack = true;
                        this.animation = "attack1";
                        player.getDamage(this.attack_damage);
                        if (player.hp == 0) {
                            player.animation = "dead";
                        }
                        setTimeout(() => {
                            this.attack = false;
                        }, 1000 / this.attack_speed)
                    }

                } else {
                    this.move = false;
                }
            } else {
                this.move = false;
            }
        }, 10)
    }
    setposition(x, y) {
        this.y = y - this.size / 2;
        this.x = x - this.size / 2;
    }
    getDamage(howMuch) {
        this.animation = "hurt";
        player_moves["hurt"] == 0;
        this.hp -= howMuch;
    }
    draw() {
        ctx.save()
        if (this.hp > 0) {
            ctx.fillStyle = "White"
            ctx.font = "20px Arial";
            ctx.textAlign = "center";
            ctx.fillText(this.hp, this.x + this.size / 3 - 15, this.y + 50);
            ctx.drawImage(this.skins['heart'], 0, 0, 192, 192, this.x + this.size / 3, this.y + 34, 20, 20);
        }
        ctx.restore()
        ctx.save()
        ctx.shadowColor = "black";
        ctx.shadowBlur = 5;
        this.rotate(this.direction);
        if (!this.move && !this.animation && this.hp > 0) ctx.drawImage(this.skins['idle'], 192 * player_moves[4], 0, 192, 192, this.x, this.y, this.size, this.size);
        if (this.animation) {
            play_animation(this.animation, this)
        } else if (!this.jump && this.hp > 0) {
            if (this.move == "run") ctx.drawImage(this.skins['run'], 192 * player_moves[6], 0, 192, 192, this.x, this.y, this.size, this.size);
            else if (this.move == "walk") ctx.drawImage(this.skins['walk'], 192 * player_moves[6], 0, 192, 192, this.x, this.y, this.size, this.size);
            else if (this.move == "climb") ctx.drawImage(this.skins['climb'], 192 * player_moves[6], 0, 192, 192, this.x, this.y, this.size, this.size)
        } else {
            ctx.drawImage(this.skins['death'], 192 * 5, 0, 192, 192, this.x, this.y, this.size, this.size);
        }
        ctx.restore()
    }
    rotate(direction) {
        if (direction == "left") {
            ctx.translate(this.size + this.x * 2 - this.size / 3, 0);
            ctx.scale(-1, 1);
        } else if (direction == "right") {
            ctx.translate(0, 0);
            ctx.scale(1, 1);
        }
    }
}

var player = new Player();
player.setLevel()
player.setHealth()

var ennemy = new Swordsman();
player.ennemies.push(ennemy);

function set_canvas_size() {
    c.width = map[0].length * (block_width)
    c.height = map.length * (block_height)
    if (window.innerWidth - inner_Width != 0) {
        let left = parseFloat(c.style.left.slice(0, -2));
        if (left < 0) {
            c.style.left = left + (window.innerWidth - inner_Width) + "px"
        } else {
            c.style.left = 0 + "px"
        }
        inner_Width = window.innerWidth
    }
    if ((player.x + player.size / 2 >= window.innerWidth / 2 && player.x - width + player.size / 2 <= -window.innerWidth / 2)) {
        c.style.left = -player.x + window.innerWidth / 2 - player.size / 2 + "px";
    } else if (player.x - width + player.size / 2 <= -window.innerWidth / 2) {
        c.style.left = "0px";
    }
    if (height / 2 - player.y - player.size < 0) {
        c.style.bottom = 0 + "px"
    } else {
        c.style.bottom = -(height - innerHeight) + "px"
    }
    draw_background(backgrounds["default"], -(parseFloat(c.style.left.slice(0, -2))), height - innerHeight + parseFloat(c.style.bottom.slice(0, -2)))
}

var keyboard_map = {};

var player_moves = {
    6: 0,
    4: 0,
    3: 0,
    "animation_six": 0,
    "hurt": 0
}

var animation_counter = 0;

function play_animation(witch, entity) {
    switch (witch) {
        case "jump":
            ctx.drawImage(entity.skins['jump'], 192 * player_moves["animation_six"], 0, 192, 192, entity.x, entity.y, entity.size, entity.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                entity.animation = false;
            }
            break;
        case "attack1":
            ctx.drawImage(entity.skins['attack1'], 192 * player_moves["animation_six"], 0, 192, 192, entity.x, entity.y, entity.size, entity.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                entity.animation = false;
            }
            break;
        case "attack2":
            ctx.drawImage(entity.skins['attack2'], 192 * player_moves["animation_six"], 0, 192, 192, entity.x, entity.y, entity.size, entity.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                entity.animation = false;
            }
            break;
        case "hurt":
            ctx.drawImage(entity.skins['hurt'], 192 * player_moves["hurt"], 0, 192, 192, entity.x, entity.y, entity.size, entity.size)
            if (player_moves["hurt"] >= 2) {
                player_moves["hurt"] = 0;
                entity.animation = false;
            }
            break;
        case "dead":
            ctx.drawImage(entity.skins['death'], 192 * player_moves["animation_six"], 0, 192, 192, entity.x, entity.y, entity.size, entity.size)
            if (animation_counter >= 6) {
                animation_counter = 0;
                entity.animation = false;
            }
            break;
    }
}

function draw_background(witch, x, y) {
    ctx.save()
    ctx.drawImage(witch, x, y)
    ctx.restore()
}

function draw_block(from, name, opacity = 1) {
    ctx.save()
    for (i = 0; i < from.length; i++) {
        for (j = 0; j < from[i].length; j++) {
            try {
                ctx.drawImage(blocks[from[i][j]]["img"], 0, 0, 192, 192, block_width * j, block_height * i, block_width, block_height)
            } catch {
                console.error("Draw image block: " + name + ". Collumn: " + j + ". Row: " + i);
                console.error("Missing block had been replaced with block id: 0");
                from[i][j] = 0;
                ctx.drawImage(blocks[0]["img"], 0, 0, 192, 192, block_width * j, block_height * i, block_width, block_height)
            }
            if (opacity != 1 && from[i][j] != 0) {
                ctx.save()
                ctx.globalAlpha = opacity
                ctx.drawImage(blocks[5]["img"], 0, 0, 192, 192, block_width * j, block_height * i, block_width, block_height)
                ctx.restore()
            }
        }
    }
    ctx.restore()
}

let iteration = 0;

function gravitation_pull(for_what) {
    for (var el of for_what) {
        el.row = Math.floor((el.y + el.size) / (block_height));
        el.column = [Math.floor((el.x + el.foot[0]) / (block_width)), Math.floor((el.x + el.foot[1]) / (block_width))];

        if ((!blocks[map[el.row][el.column[0]]]["solid"] && (!blocks[map[el.row][el.column[1]]]["solid"])) && !el.falling && el.animation != "jump" && el.gravitation_work) {
            el.falling = true;
            let interval = setInterval(() => {
                el.row = Math.floor((el.y + el.size) / (block_height));
                el.column = [Math.floor((el.x + el.foot[0]) / (block_width)), Math.floor((el.x + el.foot[1]) / (block_width))];
                if (!blocks[map[el.row][el.column[0]]]["solid"]) {
                    iteration += 0.01;
                    el.falling_velocity += gravitation / 100;
                    el.y += el.falling_velocity;
                } else if (el.falling) {
                    if (el.fall_damage && Math.floor((el.falling_velocity - 20) / 10) > 0) {
                        el.getDamage(Math.floor((el.falling_velocity - 20) / 10))
                    }
                    el.falling = false
                    el.falling_velocity = 0;
                    el.y = Math.ceil(el.row * (block_height) - el.size)
                    clearInterval(interval)
                }
            }, 10)
        }

    }
}

function check_border(for_what) {
    for (const el of for_what) {
        if (el.x <= 0 - el.size / 10 && el.direction == "left") {
            el.moving_speed = 0;
        } else if (el.x >= width - el.size / 2 && el.direction == "right") {
            el.moving_speed = 0;
        }
        try {
            check_block_colision(for_what)
        } catch {}
    }
}

function check_block_colision(for_what) {
    for (var el of for_what) {
        if (blocks[map[Math.floor((el.y + el.size - 10) / (block_height))][Math.floor((el.x + el.foot[0] - 10) / (block_width))]]["solid"] && el.direction == "left") {
            el.moving_speed = 0;
        }
        if (blocks[map[Math.floor((el.y + el.size - 10) / (block_height))][Math.floor((el.x + el.foot[1] + 20) / (block_width))]]["solid"] && el.direction == "right") {
            el.moving_speed = 0;
        }

    }
}

var gui = document.querySelector("#in_game_overlay");
gui.style.display = "none";

var game_over = document.querySelector("#game_over");
game_over.style.display = "none";

var start_game = document.querySelector("#reset_level");
start_game.addEventListener('click', () => {
    if (player.hp <= 0) location.href = "./index.html";
    start();
})

function start(game_stop) {
    gui.style.display = "block";
    game_over.style.display = "none";
    var game_interval = setInterval(() => {
        set_canvas_size();

        draw_block(map_background, "map_background", 0.6);
        draw_block(map2, "map2");

        check_border([player])

        ennemy.draw()

        player.draw();
        draw_block(map_before_player, "map_before_player");
        draw_block(map, "map");

        gravitation_pull([player]);
        gravitation_pull([ennemy]);

        onkeydown = onkeyup = function(e) {
            e = e || event;
            keyboard_map[e.code] = e.type == 'keydown';
        }
        onmousedown = function(e) {
            e = e || event
            keyboard_map[e.button] = e.isTrusted;
        }
        oncontextmenu = e => e.preventDefault();
        if (game_stop || player.hp <= 0) {
            // gui.style.display = "none";
            game_over.style.display = "block";
            setTimeout(() => {
                clearInterval(game_interval);
            }, 1000)
        }
    }, 1000 / fps)
}

start(true)


setInterval(() => {
    player_moves[6]++;
    if (player_moves[6] == 6) player_moves[6] = 0;
}, 1000 / (6 * animation_speed))
setInterval(() => {
    player_moves[4]++;
    if (player_moves[4] == 4) player_moves[4] = 0;
}, 1000 / (4 * animation_speed))
setInterval(() => {
    player_moves[3]++;
    if (player_moves[3] == 3) player_moves[3] = 0;
}, 1000 / (3 * animation_speed))
setInterval(() => {
    animation_counter++;
    player_moves["animation_six"]++;
    if (player_moves["animation_six"] == 6) player_moves["animation_six"] = 0;
}, 1000 / (12 * animation_speed))
setInterval(() => {
    player_moves["hurt"]++;
    if (player_moves["hurt"] == 3) player_moves["hurt"] = 0;
}, 100)