function play(){
	var randomDice=Math.floor(Math.random()*6)+1;
	document.querySelectorAll(".diceImage")[0].setAttribute("src","dice"+randomDice+".png");

	var randomDice2=Math.floor(Math.random()*6)+1;
	document.querySelectorAll(".diceImage")[1].setAttribute("src","dice"+randomDice2+".png");
	document.querySelector("h2").classList.remove("invisible");

	if(randomDice>randomDice2){
		document.querySelector("h2").innerHTML="Congratulations Player 1";
	}
	else if (randomDice===randomDice2){
		document.querySelector("h2").innerHTML="Draw";
	}
	else{
		document.querySelector("h2").innerHTML="Congratulations Player 2";
	}
}
document.querySelector(".btn").addEventListener ("click",play);

