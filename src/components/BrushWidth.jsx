import React from "react";
import "../App.css";

const BrushWidth = ({ setLineWidth }) => {
return (
    <div className="BrushWidth">
        <label>Brush Width </label>
        <input
            type="range" id="width"
            min="3"
            max="20"
            onChange={(e) => {
            setLineWidth(e.target.value);
            }}
        />
    </div>
    );
};

export default BrushWidth;
