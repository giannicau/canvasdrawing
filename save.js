var saveButton = document.getElementById('save');

saveButton.addEventListener ('click', saveImage);

function saveImage(){
	
	var data = canvas.toDataURL();
	//aprire l'immagine come popup
	//window.open(data, '_blank','location=0','menubar=0');
	
	var request = new XMLHttpRequest();
	
	
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			var response = request.responseText;
			console.log(response);
			//window.open('download.php?file='+response, '_blank','location=0','menubar=0');
	
		}
		
		console.log('nn funge');
	}
	
	request.open('POST','save.php',true);
	request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	request.send('img ='+data);
	
	
}