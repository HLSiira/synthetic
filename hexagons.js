//     (c) 2019 Liam Siira (liam@siira.us)

'use strict';
function drawHexOverlay() {
	var canvas = document.getElementById('hexOverlay');
	if(!canvas) { return;}

	canvas.width = document.body.clientWidth; //document.width is obsolete
	canvas.height = document.body.clientHeight; //document.height is obsolete
	var canvasW = canvas.width,
	canvasH = canvas.height;

	var hexHeight,
		hexRadius,
		hexRectangleHeight,
		hexRectangleWidth,
		hexagonAngle = 0.523598776, // 30 degrees in radians
		sideLength = 15,
		boardWidth = 400,
		boardHeight = 600;

	hexHeight = Math.sin(hexagonAngle) * sideLength;
	hexRadius = Math.cos(hexagonAngle) * sideLength;
	hexRectangleHeight = sideLength + 2 * hexHeight;
	hexRectangleWidth = 2 * hexRadius;
	
	boardWidth = canvasW / hexHeight;
	boardHeight = canvasH / hexHeight;

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		ctx.fillStyle = "#000000";
		ctx.strokeStyle = "#CCCCCC";
		ctx.lineWidth = 1.5;

		drawBoard(ctx, boardWidth, boardHeight);
	}

	function drawBoard(canvasContext, width, height) {
		var i,
			j,
			gradientX = 255 / width,
			gradientY = 255 / height;

		for (i = 0; i < width; ++i) {
			for (j = 0; j < height; ++j) {
				canvasContext.strokeStyle = `rgba(0,0,
				${Math.floor(255 - gradientY * j)},
				${Math.random() * (0.5) + 0.2})`;

				drawHexagon(
					ctx,
					i * hexRectangleWidth + ((j % 2) * hexRadius),
					j * (sideLength + hexHeight),
					false
				);
			}
		}
	}


	function drawHexagon(canvasContext, x, y, fill) {
		canvasContext.beginPath();
		canvasContext.moveTo(x + hexRadius, y);
		canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
		canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
		canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
		canvasContext.lineTo(x, y + sideLength + hexHeight);
		canvasContext.lineTo(x, y + hexHeight);
		canvasContext.closePath();
		canvasContext.stroke();
	}

}

document.addEventListener("DOMContentLoaded", function() {
	drawHexOverlay();
});


window.addEventListener('resize', function(){
	drawHexOverlay();
}, true);