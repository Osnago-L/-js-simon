function randomNumber(){
    let randomNumber = Math.floor(Math.random()*100+1);
    return randomNumber;
}

function newNumbersAI(loopcycles) {
    for (let i = 0; i < loopcycles; i++) {
        numListAI.push(randomNumber());
        document.getElementById('numberslist').innerHTML += `${numListAI[i]} `;
    }
}
function newNumbersUser(loopcycles) {
    
    for (let i = 0; i < loopcycles; i++) {
        let numberUser = parseInt(prompt ("Prova ad indovinare i numeri uno alla volta"))
        numListUser.push(numberUser);
    }
}
function matchNumbers(numArrAI,numArrUser) {
    for (let i = 0; i < numArrUser.length; i++) {
        if(numArrAI.includes(numArrUser[i])){
            matchedNumList.push(numArrUser[i]);
            checkMatched+=1;
        }
    }  
}
