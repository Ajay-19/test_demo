let likesCount = document.getElementById("likes-count").innerHTML;
function like()
{
  likesCount = Number(likesCount)+1;
  document.getElementById("likes-count").innerHTML=likesCount;
}
let pCount=document.getElementById("previous-count");

function save()
{
  pCount.innerHTML+=" "+likesCount+" , ";
  likesCount=0;
  document.getElementById("likes-count").innerHTML=0;
}