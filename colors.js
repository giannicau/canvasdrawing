var colors = ['black','blue','red','green','yellow'];
//per aggiungere un colore basta aggiungerlo semplicemente nell'array

/*var swatches = document.getElementsByClassName('swatch');

for(var i = 0 ,n =swatches.length; i < n; i++){
	swatches[i].addEventListener('click', setSwatch);
} */

for(var i = 0 ,n =colors.length; i < n; i++){
	var swatch = document.createElement('div'); //creo l'elemento esetto le proprietà
	swatch.className ='swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);//inserisco l'elemento creato
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className= 'swatch';
	}
}

function setSwatch(e){
	// identifico lo swatch
	var swatch = e.target;
	//set color
	setColor(swatch.style.backgroundColor);
	// give active class
	swatch.className +=' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});