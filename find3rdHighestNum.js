const players = [
  { name: 'Zara', score: 78 },
  { name: 'Leo', score: 120 },
  { name: 'Mina', score: 95 },
  { name: 'Juan', score: 130 },
  { name: 'Kofi', score: 102 }
];


function sortPlayerByScore(listOfPlayers) {
    
    for (let i = 0; i < listOfPlayers.length - 1; i++) {

    //     If the left side is less than the right side, swap
        if (listOfPlayers[i].score < listOfPlayers[i+1].score) {

            // Store the value of the left side in temp
            let temp = listOfPlayers[i];
            
            // Swap
            listOfPlayers[i] = listOfPlayers[i+1];
            listOfPlayers[i+1] = temp;

            // Resets the loop back to 0
            i = -1;

        }
        // If false, the loop continues without swapping

    }

    return listOfPlayers;
}

function getTopPlayers(range, rankList) {

    // Set a new array to store the rank list
    let result = [];

    // Loops range times (Number of rank)
    for (let x = 0; x < range; x++) {

        // Spread Operator to create a shallow clone
        let cloneRankList = { ...rankList[x] };

        cloneRankList.rank = x + 1;

        result.push(cloneRankList);

    }
    
    return result;
}

console.log(getTopPlayers(3, sortPlayerByScore(players)));

console.log(players);