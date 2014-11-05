var annulla = document.getElementById('annulla'),
	ripristina = document.getElementById('ripristina');
	
	var images = {};
	
		
	
annulla.addEventListener('click', function(){
	cUndo();
});

ripristina.addEventListener('click', function(){
	cRedo();
});



var cPushArray = new Array();
var cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
	var imgc = context.getImageData(0,0,canvas.width,canvas.height);
    cPushArray.push(imgc);
	console.log('memorizzato canvas : '+imgc);
    
}
function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = cPushArray[cStep];
        context.putImageData(canvasPic,0,0);
        console.log('undo : '+canvasPic);
    }
}
function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = cPushArray[cStep];
        context.putImageData(canvasPic,0,0);
        console.log('redo : '+canvasPic);
    }
}

/*window.onresize =  function{
	var image = context.getImageData(0,0,canvas.width,canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image,0,0);
}*/
