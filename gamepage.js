Player1_name=localStorage.getItem("player_1");
Player2_name=localStorage.getItem("player_2");
console.log(Player1_name);
console.log(Player2_name);

Score1=0;
Score2=0;

document.getElementById("player1_name").innerHTML=Player1_name + " : &nbsp";
document.getElementById("player2_name").innerHTML=Player1_name + " : &nbsp";

