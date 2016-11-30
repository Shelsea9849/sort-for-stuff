function swap(id) {
	//checks for tiles to the left, right, above and below id.
	var left = 0; right = 0; above = 0; below = 0;
	
	var tile = document.getElementById(id);
	
	if(id - 1 % 4 != 0)
		left = document.getElementById(id-1);
	
	if(id % 4 != 0)
		right = document.getElementById(id+1);
	
	if(id > 4)
		above = document.getElementById(id-4);
	
	if(id < 13)
		below = document.getElementById(id+4);
	
	
	
	if(left != 0 && left.innerHTML == ""){
		left.innerHTML = tile.innerHTML;
		tile.innerHTML = "";
	}
	else if(right != 0 && right.innerHTML == ""){
		right.innerHTML = tile.innerHTML;
		tile.innerHTML = "";
		}
	else if(above != 0 && above.innerHTML == ""){
		above.innerHTML = tile.innerHTML;
		tile.innerHTML = "";
	}
	else if(below != 0 && below.innerHTML == ""){
		below.innerHTML = tile.innerHTML;
		tile.innerHTML = "";
	}
}

//This function scrambles the tiles into a random position.
function shuffleGame(){
	var numbers = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
	for(var i = 1; i <= 15; i++){
		//http://www.w3schools.com/jsref/jsref_random.asp
		//Syntax for random number generator in Javascript.
		var rand = Math.round(Math.random() * (numbers.length -1));
		document.getElementById(i).innerHTML = numbers[rand];
		
		//http://www.w3schools.com/jsref/jsref_splice.asp
		numbers.splice(rand, 1);//This method cancels out the item in the array that has already been checked.
								//Then the array becomes its original (SIZE) - 1.
	}
	document.getElementById(16).innerHTML = "";
}
