import React from "react";
import "../App.css";

const BrushOpacity = ({ setLineOpacity }) => {
return (
    <div className="BrushOpacity">
        <label>Brush Opacity</label>
        <input
            type="range" id="opacity"
            min="1"
            max="100"
            onChange={(e) => {
            setLineOpacity(e.target.value / 100);
            }}
        />
    </div>
    );
};

export default BrushOpacity;
