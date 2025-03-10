console.log('Simple debugging example running.')
debugger

let x = 9
debugger
console.log(x)

let y = 10
console.log(-y)
debugger

function numPointsScored(playerName){
    let game = gameObject()
    let homePlayers = gameObject.home.players
    console.log(homePlayers)
    debugger
}
numPointsScored("Alan Anderson")