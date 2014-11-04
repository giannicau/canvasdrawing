var annulla = document.getElementById('annulla'),
	ripristina = document.getElementById('ripristina');
	
	var images {};
	
	var image = context.getImageData(0,0,canvas.width,canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image,0,0);
	
	
annulla.addEventListener('click', function(){
	
});

ripristina.addEventListener('click', function(){
	
});
