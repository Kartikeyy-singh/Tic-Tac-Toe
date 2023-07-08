console.log("tic tac toe");
var music = new Audio('music.mp3');
music.loop = true;
music.volume = 0.19;
var audioturn = new Audio('ting.mp3');
// audioturn.loop = true;
audioturn.volume = 0.4;
var gameover = new Audio('gameover.mp3');
var winner = false;
var turn = 'X';

//function to change the turn

const operation=()=>{
    return turn === 'X' ? '0' : 'X';
}

//function to check the win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&( boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&( boxtext[e[0]].innerText !== ''))
        {
            document.querySelector('#info').innerText = boxtext[e[0]].innerText + " Won";
            winner = true;
            document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.width = "500px";
            gameover.play();
        }
    })
}

//game logic
// music.play();
// music.setVolume(5);
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {

        if (boxText.innerText === '') {
            boxText.innerText = turn;
            if (boxText === 'X') {
                boxText.style.color = 'red';
            }
            turn =operation();
            audioturn.play();
            checkWin();
            if (!winner) {
                document.getElementById("info").innerText = "Turn For " + turn;
            }
       }
    })
})    