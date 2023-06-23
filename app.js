"use strict"
let resuls = document.querySelector("#result");
let resuls2 = document.querySelector("#result2");
let resuls3 = document.querySelector("#result3");
let winner = document.querySelector("#win-number");
let youLost = document.querySelector("#lost");
let record = document.querySelector(".footer__record-count");
let records = document.querySelector(".footer__record-text");
let winnerRecord = document.querySelector(".footer__record-sum");
let  cont = document.querySelector(".container");
let photo = document.querySelector("img")
var audio = new Audio('lose.mp3');
var wrong = new Audio('failure.mp3');
var winnerMp3 = new Audio('winner.mp3');

let sum = 20;
let currentRecord = 0;
let RandomNumber = Math.trunc(Math.random() *20 +1);
function check(){
    let c = document.getElementById("input").value;
    let inputNumber = Number(c);
   if(sum===0){
        resuls2.innerHTML = " ";
        resuls.innerHTML = " ";
        resuls3.innerHTML = " ";
        youLost.innerHTML = "თქვენ წააგეთ თამაში დამთავრდა";
        records.innerHTML = `დარჩენილი ცდა: ${sum}`
        audio.play();
        
      
    }
    else if(inputNumber===RandomNumber){
        //resuls2.innerHTML = " ";
        //resuls.innerHTML = "თქვენ გამოიცანით რიცხვი";
        winner.innerHTML=RandomNumber;
        resuls2.innerHTML = " ";
        resuls3.innerHTML = " ";
        resuls.innerHTML = "თქვენ გამოიცანით რიცხვი";
        resuls.setAttribute("src","https://png.pngtree.com/png-vector/20190226/ourmid/pngtree-fire-logo-icon-design-template-vector-png-image_705402.jpg")
        records.innerHTML = `დარჩენილი ცდა: ${sum}`
        //currentRecord.innerHTML = `<img src="img/winner.png" alt=""> რეკორდი: ${sum}`
        resuls.classList.add("winner-color");
        cont.classList.add("winn-green");
        winnerMp3.play();
        sum--;
       
        if(sum>currentRecord){
            currentRecord = sum
            winnerRecord.innerHTML = `რეკორდი: ${currentRecord}`
        }
        
    }
 else if(RandomNumber<inputNumber){
        resuls.innerHTML = " ";
        resuls3.innerHTML = " ";
        resuls2.innerHTML = "თქვენი რიცხვი მეტია მომგებიან რიცხვზე კიდევ სცადე";
        sum--;
        records.innerHTML = `დარჩენილი ცდა: ${sum}`
        wrong.play();
    }else if(RandomNumber>inputNumber){
        resuls.innerHTML = " ";
        resuls2.innerHTML = " ";
        resuls3.innerHTML ="თქვენი რიცხვი ნაკლებია მომგებიან რიცხვზე კიდევ სცადე";
        sum--;
        records.innerHTML = ` დარჩენილი ცდა: ${sum} `
        wrong.play();
    } 
  return false;
};

document.querySelector(".header__reset-button").addEventListener("click", function(){
    sum = 20;
    records.innerHTML = `დარჩენილი ცდა: ${sum}`
    RandomNumber = Math.trunc(Math.random() *20 +1);
    resuls.innerHTML = "დაიწყე თამაში";
    resuls2.innerHTML = " ";
    resuls3.innerHTML = " ";
    winner.innerHTML="?";
    cont.classList.remove("winn-green");
    resuls.classList.remove("winner-color");
    let c = document.getElementById("input").value = "";

})





