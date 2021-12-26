// First we need to set the price per good. Once the user presses a button the function below sets the corresponding value and starts the chain of functions.

let goodPrice;

function setGoodPrice(typeOfGoods){
  if(goodPrice > 0){
    alert ("Refresh the page using F5 if you need to perform another merge / If you need more bidding options, then use the Show More button");
    return;
  } else if(typeOfGoods == "shipping"){
    goodPrice = 10;
  } else if(typeOfGoods == "rice"){
    goodPrice = 20;
  } else if(typeOfGoods == "spice"){
    goodPrice = 25;
  } else if(typeOfGoods == "rubber"){
    goodPrice = 30;
  } else if(typeOfGoods == "siapFaji"){
    goodPrice = 35;
  } else if(typeOfGoods == "oil"){
    goodPrice = 40;
  } else if(confirm("Remember that Siap Faji merges aren't available before era B & C")){
    goodPrice = 25;
      // The confirm is added to help players remember an often forgotten rule in the game. Should the user select cancel, then nothing further needs to happen.
  }
      bidTable();
}


/*
  bidTable gathers user input from 2 HTML labels & checks whether the user has added viable inputs.
  If the user provided viable inputs, then the function uses them to adjust the values of two variables.
  Then the function runs a for loop, which makes use of the 4 variables bidTable() adjusts before starting the loop.
  If the user failed to provide viable inputs an alert is shown.
*/

let player1Goods;
let player2Goods;
let companySize;
let minBid;

function bidTable(){
  player1Goods = document.getElementById("p1Input").value;
  player2Goods = document.getElementById("p2Input").value;

  if (player1Goods > 0 && player2Goods > 0){
    companySize = parseInt(player1Goods) + parseInt(player2Goods);
    minBid = parseInt(companySize) * parseInt(goodPrice);
      for (let i=0; i<25; i++){
      bidLoop(); 
  }
  } else{
  alert ("Type numeric value for goods/ships for both players before pressing which company type is being merged");
  }
}


/* 
In rare cases the user might require more than the 25 bidding options our initial loop creates. Pressing the Show More HTML-button runs this and adds 10 options more. 
It relies on the function bidTable() to have run and altered variables, so an if statement is added to either run the for loop, or alert the user with troubleshooting advice.
The function is repeatable and can be run as many times as the user needs it to.
*/

function bidTableMore(){
  if (minBid > 0){
    for (let i=0; i<10; i++){
    bidLoop(); 
    }
  } else{
  alert ("Select which company type is being merged, afterwards use this button if you need higher bidding options");
  }
}


/*
The function being run by the for loops. It does some simple math and then adds the 3 interesting values to a HTML-table.
The variable minBid is adjusted at the end, and this adjustment is utilized to alter the other 2 values our user needs.
*/

function bidLoop(){
  let player1Payout = parseInt(minBid) / parseInt(companySize) * parseInt(player1Goods);
  let player2Payout = parseInt(minBid) / parseInt(companySize) * parseInt(player2Goods);

    let table = document.getElementById("BidOutputTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
      cell1.innerHTML = minBid;
      cell2.innerHTML = player1Payout;
      cell3.innerHTML = player2Payout;

  minBid = parseInt(minBid)+parseInt(companySize);
}