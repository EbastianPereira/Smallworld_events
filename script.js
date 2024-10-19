function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function newRandomEvent() {
	let event = getRandomInt(54)+1;
	document.getElementById("card").style.backgroundImage="url('images/"+event+".jpg";
}

