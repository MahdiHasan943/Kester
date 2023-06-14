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
            <th class="mx-auto pr-5">${i + 1}</th>
            <td class='mx-auto'>${name}</td>
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
};
const takeInputValue = (id) => {
    const inputValue = document.getElementById(id);
    const inputValueString = parseFloat(inputValue.value)
    inputValue.value = '';
    return inputValueString;
}
const TextValue = (id,money) => {
    const TextFeild = document.getElementById(id);
    const newTextFeild = parseFloat(TextFeild.innerText);
    const currentTextFeild = newTextFeild + money;
    if (currentTextFeild) {
        return  TextFeild.innerText =currentTextFeild;  

    }
}


document.getElementById('calculate').addEventListener('click', function () {
    const playersCosts = takeInputValue('perPlayer')
   
    // console.log(playersCosts * playerArray.length);
    const playerCostSum = playersCosts * playerArray.length;
    // console.log(typeof playerCostSum);
   TextValue('playerTotalCost',playerCostSum)
    
   

})

document.getElementById('total').addEventListener('click', function () {
     const coach =takeInputValue('coach')
    const manager = takeInputValue('manager')
    const playerCost = document.getElementById('playerTotalCost');
    const playerString = parseFloat(playerCost.innerText);
    const sub = coach + manager+playerString;
    TextValue('totalCost',sub)

})