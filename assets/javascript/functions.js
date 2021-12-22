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
    document.getElementById('numberslist').innerHTML="";
    for (let i = 0; i < loopcycles; i++) {
        let numberUser = prompt ("Prova ad indovinare i numeri uno alla volta")
        numListUser.push(numberUser);
    }
}