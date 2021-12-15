import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import MenuButtons from "./components/MenuButtons";
import "./App.css";

function App() {
const DEFAULT_COLOR = '#000000';
const DEFAULT_OPACITY = 0.1;
const DEFAULT_WIDTH = 5;

const canvasRef = useRef(null);
const ctxRef = useRef(null);
const [isDrawing, setIsDrawing] = useState(false);
const [lineWidth, setLineWidth] = useState(DEFAULT_WIDTH);
const [lineColor, setLineColor] = useState(DEFAULT_COLOR);
const [lineOpacity, setLineOpacity] = useState(DEFAULT_OPACITY);

// Initialization when the component
// mounts for the first time
useEffect(() => {
	const canvas = canvasRef.current;
	const ctx = canvas.getContext("2d");
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.globalAlpha = lineOpacity;
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	ctxRef.current = ctx;
}, [lineColor, lineOpacity, lineWidth]);

// Function for starting the drawing
const startDrawing = (e) => {
	ctxRef.current.beginPath();
	ctxRef.current.moveTo(
	e.nativeEvent.offsetX,
	e.nativeEvent.offsetY
	);
	setIsDrawing(true);
};

// Function for saving canvas to PDF
const DownloadCanvasAsImage = () => {
  let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'CanvasAsImage.png');
	let canvas = document.getElementById('canvas');
  let dataURL = canvas.toDataURL('image/png');
  let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
	downloadLink.setAttribute('href',url);
	downloadLink.click();
}

// Function for resetting
const reset = () => {
  //clear the canvas
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //reset color
  const color = document.getElementById('color');
  color.value = DEFAULT_COLOR;
  setLineColor(DEFAULT_COLOR);

  //reset brush width
  const width = document.getElementById('width');
  width.value = DEFAULT_WIDTH;
  setLineWidth(DEFAULT_WIDTH);

  //reset brush opacity
  const opacity = document.getElementById('opacity');
  opacity.value = DEFAULT_OPACITY;
  setLineOpacity(DEFAULT_OPACITY);
}

// Function for ending the drawing
const endDrawing = () => {
	ctxRef.current.closePath();
	setIsDrawing(false);
};

const draw = (e) => {
	if (!isDrawing) {
	return;
	}
	ctxRef.current.lineTo(
	e.nativeEvent.offsetX,
	e.nativeEvent.offsetY
	);
	
	ctxRef.current.stroke();
};

return (
	<div className="App">
	<h1>Paint App</h1>
	<div className="draw-area">
		<Menu
		setLineColor={setLineColor}
		setLineWidth={setLineWidth}
		setLineOpacity={setLineOpacity}
		/>
    <MenuButtons
    reset = {reset}
    DownloadCanvasAsImage = {DownloadCanvasAsImage}
    />
		<canvas id="canvas"
		onMouseDown={startDrawing}
		onMouseUp={endDrawing}
		onMouseMove={draw}
		ref={canvasRef}
		width={`1280px`}
		height={`720px`}
		/>
	</div>
	</div>
);
}

export default App;
