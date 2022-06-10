//const pikachu = document.querySelector('.pikachu')

let pikachu = document.getElementById('pikachu')

const jump = () => {
    pikachu.classList.add('jump')

    setInterval(() =>{

        pikachu.classList.remove('jump')

    }, 500)

}

document.addEventListener('keydown', jump)

var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;

function inicia(){
    dx=0;
    dy=0;
    px=0;
    py=0;
    vel=10;
    obj=document.getElementById("pikachu");
    document.addEventListener('keydown',teclaDw);
    document.addEventListener('keyup',teclaUp);
    tmp=setInterval(enterFrame,20);
}

function teclaDw(event) {
    let tecla = event.key;
    if (tecla === "ArrowLeft") {
        dx = -1;
    } else if (tecla === "ArrowUp") {
        dy = -1;
    } else if (tecla === "ArrowRight") {
        dx = 1;
    } else if (tecla === "ArrowDown") {
        dy = 1;
    }
}

function teclaUp(event) {
    let tecla = event.key;
    if (tecla === "ArrowLeft") {
        dx = 0;
    } else if (tecla === "ArrowUp") {
        dy = 0;
    } else if (tecla === "ArrowRight") {
        dx = 0;
    } else if (tecla === "ArrowDown") {
        dy = 0;
    }
}

function enterFrame(){
    px+=dx*vel;
    py+=dy*vel;
    obj.style.left=px +"px";
    obj.style.top=py +"px";
}

window.addEventListener('load',inicia);














