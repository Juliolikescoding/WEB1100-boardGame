//select Element and create vars
const die = document.querySelector('.die')
const roll = document.querySelector('.roll')
const img = die.querySelector('img')
const newRoll = document.querySelector('.newRoll');
// document.getElementsByClassName("newRoll").style.color = "blue";


const players = [
    {player: document.querySelector('.player1'), location: 0},
    {player: document.querySelector('.player2'), location: 0},
    {player: document.querySelector('.player3'), location: 0},
    {player: document.querySelector('.player4'), location: 0}
]

const numPlayer = players.length
let turn = 0
const maxRoll = 21


// define functions
function changeTurn(){
    turn = (turn >= numPlayer -1)? 0 : turn +1
}
function movePlayer(num, spots){
    players[turn].location += num
    players[turn].location = (players[turn].location > 20)? players[turn].location - 20 : players[turn].location
    spots[players[turn].location].appendChild(players[turn].player)
}

// $('.newRoll').on('click', function(e){
//         console.log('Here');
//     })


function rollDie(e){
    // console.log(e)
    roll.textContent = ``
    // toggle
    roll.classList.toggle(".newRoll")

    console.log(e);
    img.src = `img/Dodecahedron3.gif`
    setTimeout(() => {
        const num = Math.ceil(Math.random() * maxRoll)
        roll.textContent = num
        roll.style.fontSize = '50px'
        roll.style.color = 'blue'
        movePlayer(num, getSpots())
        changeTurn()
        console.log(num)
    }, 1700)
}

// function toggle(roll, ".newRoll") {
//     roll.classList.toggle(".newRoll")
//   }







// call functions
die.addEventListener('click', rollDie)