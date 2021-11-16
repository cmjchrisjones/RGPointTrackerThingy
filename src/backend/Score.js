module.exports = function Score(remainingPlayers, totalScore) {
    console.log(`Hit Called with player count ${remainingPlayers} and a score of ${totalScore}`)

    const plus1 = [75, 70, 50, 45, 19, 18, 17, 13, 12, 11, 7];
    const plus2 = [65, 60, 40, 35, 30, 25, 20, 15, 10, 8];
    const plus3 = [14, 5, 3];
    const plus4 = [6];
    const plus5 = [55];
    const plus6 = [4];
    const plus10 = [1];
     
    switch (true) {
        case plus1.includes(remainingPlayers):
            totalScore += 1;
            break;
        case plus2.includes(remainingPlayers):
            totalScore += 2;
            break;
        case plus3.includes(remainingPlayers):
            totalScore += 3;
            break;
        case plus4.includes(remainingPlayers):
            totalScore += 4;
            break;
        case plus5.includes(remainingPlayers):
            totalScore += 5;
            break;
        case plus6.includes(remainingPlayers):
            totalScore += 6;
            break;
        case plus10.includes(remainingPlayers):
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