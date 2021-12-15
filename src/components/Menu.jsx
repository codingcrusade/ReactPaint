import React from "react";
import "../App.css";
import BrushColor from "./BrushColor";
import BrushOpacity from "./BrushOpacity";
import BrushWidth from "./BrushWidth";


const Menu = ({ setLineColor, setLineWidth,
setLineOpacity }) => {
return (
	<div className="Menu">
        <BrushColor
        setLineColor={setLineColor}
        />
        <BrushWidth
        setLineWidth={setLineWidth}
        />
        <BrushOpacity
        setLineOpacity={setLineOpacity}
        />
	</div>
);
};

export default Menu;
