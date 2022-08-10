let num1=getRandom();
let num2=getRandom();
let sum=num1+num2;
let card=document.getElementById("cards-display");
let total=document.getElementById("total-sum");
let gameStatus=document.getElementById("p1");
let a=total.textContent;

function getRandom()
{
  let number = Math.floor(Math.random()*13+1)
  return number
}
function startgame()
{
  card.textContent+=num1+" , "+num2;
  
  total.textContent=a+sum;
  if(sum<21)
  {
    gameStatus.textContent="Pick a new card";
  }
  else if(sum===21)
  {
    gameStatus.textContent="You Won, Got a blackjack..!";
  }
  else
  {
    gameStatus.textContent="You are out of the game.";
  }
}
function newcard()
{
  let num3=getRandom();
  card.textContent+=" , "+num3;
  sum=sum+num3;
  total.textContent=a+sum;

  if(sum<21)
  {
    gameStatus.textContent="Pick a new card";
  }
  else if(sum===21)
  {
    gameStatus.textContent="You Won, Got a blackjack..!";
  }
  else
  {
    gameStatus.textContent="You are out of the game.";
  }

}