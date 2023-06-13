const playerArray = [];

// Get Player List Click by Select Button
function displayPlayer(selectPlayer){
    const tableBody = document.getElementById('select-players');
    tableBody.innerHTML = '';

    for (let i = 0; i < selectPlayer.length; i++) {
        const name = playerArray[i];
        // Create tr element
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th class="pr-5">${i + 1}</th>
            <td>${name}</td>
        `
        tableBody.appendChild(tr);
    }

}

// Select Player
function selectPlayer(element){
    const playerName = element.parentNode.children[2].innerText;
    if(playerArray.length < 5){
        // button disable after click
        element.disabled = true ;
        element.style.opacity = '0.5';
        // Player Array List Push
        playerArray.push(playerName);
        displayPlayer(playerArray);
    }else{
        alert('Sorry, you have already added 5 players 😶');
        return;
    }
}
