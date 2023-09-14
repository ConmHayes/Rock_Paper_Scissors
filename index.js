
answerInputs = ["Rock", "Paper", "Scissors"]

playerInput = answerInputs[0]
opponentInput = (answerInputs[Math.floor(Math.random() * answerInputs.length)])

console.log(`P:${playerInput} O:${opponentInput}`)

if (playerInput == answerInputs[0] && opponentInput == answerInputs[2] || (playerInput == answerInputs[1] && opponentInput == answerInputs[0]) || (playerInput == answerInputs[2] && opponentInput == answerInputs[1])) {
    console.log("You win")
} else if (playerInput == opponentInput) {
    console.log("You tie")
} else if (playerInput == answerInputs[0] && opponentInput == answerInputs[1] || (playerInput == answerInputs[1] && opponentInput == answerInputs[2]) || (playerInput == answerInputs[2] && opponentInput == answerInputs[0])) {
    console.log("You lose")
}