let loopCycles = 5;
let numListAI =  [];
let numListUser = [];
let matchedNumList=[];
let checkMatched = 0;


newNumbersAI(loopCycles);

setTimeout(function(){
    document.getElementById('numberslist').innerHTML="";
    newNumbersUser(loopCycles);
    matchNumbers(numListAI,numListUser);
    if(checkMatched==loopCycles){
        document.getElementById('numberslist').innerHTML=`Hai indovinato tutti i numeri (${matchedNumList})`;
    }else{
        document.getElementById('numberslist').innerHTML=`Hai indovinato ${checkMatched} numeri (${matchedNumList})`;
    }
}, 30000);