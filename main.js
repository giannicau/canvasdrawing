var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    radius = 10,
	isDragging = false;

	
	
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*window.onresize =  function{
	var image = context.getImageData(0,0,canvas.width,canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image,0,0);
}*/

function clearCanvas(canvas){
	//canvas.width= canvas.width;
	canvas.width = window.innerWidth;
}

context.lineWidth = radius*2;

var putPoint = function(e){
	if(isDragging){
	
	context.lineTo(e.offsetX, e.offsetY);
		//context.lineTo(e.clietnX, e.clientY);
	context.stroke();
	context.beginPath();
	context.arc(e.offsetX, e.offsetY, radius, 0 , Math.PI*2);
		//context.arc(e.clietnX, e.clientY, radius, 0 , Math.PI*2);
	context.fill();
	context.beginPath();
	context.moveTo(e.offsetX, e.offsetY);
		//context.moveTo(e.offsetX, e.offsetY);
	}
}

var engage = function(e){
	isDragging = true;
	putPoint(e);
}

var disengage = function(){
	cPush();
	isDragging = false;
	context.beginPath();
}

	
canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);


//parte touch

// create a drawer which tracks touch movements
		var drawer = {
			isDrawing: false,
			touchstart: function(coors){
				context.beginPath();
				context.moveTo(coors.x, coors.y);
				this.isDrawing = true;
			},
			touchmove: function(coors){
				if (this.isDrawing) {
			        context.lineTo(coors.x, coors.y);
			        context.stroke();
				}
			},
			
			touchend: function(coors){
				if (this.isDrawing) {
			        this.touchmove(coors);
			        this.isDrawing = false;
				}
			}
		}; //fine drower
		// create a function to pass touch events and coordinates to drawer
		function draw(event){
			// get the touch coordinates
			var coors = {
				x: event.targetTouches[0].pageX,
				y: event.targetTouches[0].pageY
			};
			// pass the coordinates to the appropriate handler
			drawer[event.type](coors);
		}
		
			
		
		// attach the touchstart, touchmove, touchend event listeners.
	    canvas.addEventListener('touchstart',draw, false);
	    canvas.addEventListener('touchmove',draw, false);
	    canvas.addEventListener('touchend',draw, false);
		
				
		
		
		
		
		// prevent elastic scrolling
		document.body.addEventListener('touchmove',function(event){
			event.preventDefault();
		},false);	// end body.onTouchMove
