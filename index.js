const answerInputs = ["rock", "paper", "scissors"]

const getPlayerInput = () => {
    let input = document.getElementById("userInput")
    playerInput = input.value.toLowerCase()
    console.log(playerInput)
    return playerInput
}
const play = () => {
    getPlayerInput()
    opponentInput = (answerInputs[Math.floor(Math.random() * answerInputs.length)])
    console.log(`Player input ${playerInput}`)

    if (answerInputs.includes(playerInput)) {

        if (playerInput == answerInputs[0] && opponentInput == answerInputs[2] || (playerInput == answerInputs[1] && opponentInput == answerInputs[0]) || (playerInput == answerInputs[2] && opponentInput == answerInputs[1])) {
            document.getElementById("result").textContent = ("You win")
        } else if (playerInput == opponentInput) {
            document.getElementById("result").textContent = ("You tie")
        } else {//if (playerInput == answerInputs[0] && opponentInput == answerInputs[1] || (playerInput == answerInputs[1] && opponentInput == answerInputs[2]) || (playerInput == answerInputs[2] && opponentInput == answerInputs[0])) {
            document.getElementById("result").textContent = ("You lose")
        }
    } else {
        console.log(`Invalid input`)
    }
}
