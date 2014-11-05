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
    cPushArray.push(canvas);
	console.log('memorizzato canvas : '+canvas);
    
}
function cUndo() {
    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
        console.log('undo : ');
    }
}
function cRedo() {
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
            console.log('redo : ');
    }
}
