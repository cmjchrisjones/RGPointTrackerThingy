module.exports = function Score(remainingPlayers, totalScore) {
    console.log(`Hit Called with player count ${remainingPlayers} and a score of ${totalScore}`)


    switch (remainingPlayers) {
        case 75:
        case 70:
        case 50:
        case 45:
        case 19:
        case 18:
        case 17:
        case 13:
        case 12:
        case 11:
        case 7:
            totalScore += 1;
            break;
        case 65:
        case 60:
        case 40:
        case 35:
        case 30:
        case 25:
        case 20:
        case 15:
        case 10:
        case 8:
            totalScore += 2;
            break;
        case 55:
            totalScore += 5;
            break;
        case 14:
        case 5:
        case 3:
            totalScore += 3;
            break;
        case 6:
            totalScore += 4;
            break;
        case 4:
            totalScore += 6;
            break;
        case 1:
            totalScore += 10;
            break;
    }
    var playerCountAfterElimination = remainingPlayers -= 1;
    
    let gameStatus = playerCountAfterElimination > 0 ? "InProgress" : "Won";
    
    let result = {
        "Game status": gameStatus,
        "Players": playerCountAfterElimination,
        "Score": totalScore
    }
    
    console.log(result)
    return result;
}