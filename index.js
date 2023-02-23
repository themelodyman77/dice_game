var randomenumber_var = Math.floor(Math.random()*6) + 1;
var target = document.querySelectorAll("img")[0];
target.setAttribute("src","dice"+(randomenumber_var)+'.png');
var randomenumber_var2 = Math.floor(Math.random()*6) + 1;
var target1 = document.querySelectorAll("img")[1];
target1.setAttribute("src","dice"+(randomenumber_var2)+'.png');
if(randomenumber_var > randomenumber_var2)
{
    document.querySelector("centre").textContent = "Player1 has won!!!";
}
else if(randomenumber_var < randomenumber_var2){
    document.querySelector("centre").textContent = "Player2 has won!!!";
}
else{
    document.querySelector("centre").textContent = "Draw!!!"
}
