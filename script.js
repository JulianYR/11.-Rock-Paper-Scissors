const rock = document.getElementById('rock')
rock.addEventListener('click', playRock)

const paper = document.getElementById('paper')
paper.addEventListener('click', playPaper)

const scissors = document.getElementById('scissors')
scissors.addEventListener('click', playScissors)

const reload = document.getElementById('reload')
reload.addEventListener('click', () => {
    location.reload()
})

const youHtml = document.getElementById('you')
const enemyHtml = document.getElementById('enemy')

const result = document.getElementById('result')

let player
let playerPoints = 0
let enemy
let enemyPoints = 0

function playGame(){
    
    if (player == enemy){
        result.innerHTML = 'This was a tie 😐.'
    }
    else if (
        player == '🪨' && enemy == '✂️' ||
        player == '📄' && enemy == '🪨' ||
        player == '✂️' && enemy == '📄'
    ){
        playerPoints++
        youHtml.innerHTML = playerPoints
        if (playerPoints == 3){
            result.innerHTML = "Congratulations, you've won! 🎊" + "Your attack was: " + player + ". The enemy attack was: " + enemy + "."
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            reload.style.display = 'block'
        }
        else {
            result.innerHTML = 'Congratulations, you won this round 🥳.' + "Your attack was: " + player + ". The enemy attack was: " + enemy + "."
        }
    }
    else {
        enemyPoints++
        enemyHtml.innerHTML = enemyPoints
        if (enemyPoints == 3){
            result.innerHTML = 'Sorry, You Lost 😔.' + "Your attack was: " + player + ". The enemy attack was: " + enemy + "."
            rock.disabled = true
            paper.disabled = true
            scissors.disabled = true
            reload.style.display = 'block'
        }
        else {
            result.innerHTML = 'Unfortunately, you lost this round 😓.' + "Your attack was: " + player + ". The enemy attack was: " + enemy + "."
        }
    }

}

function playRock(){
    player = '🪨'
    randomEnemy()
}
function playPaper(){
    player = '📄'
    randomEnemy()
}
function playScissors(){
    player = '✂️'
    randomEnemy()
}

function randomEnemy(){

    enemy = randomG(1, 3)
    
    if (enemy == 1){
        enemy = '🪨'
    }
    else if (enemy == 2){
        enemy = '📄'
    }
    else if (enemy == 3){
        enemy = '✂️'
    }

    playGame()

}

function randomG(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', () => {
    reload.style.display = 'none'
})