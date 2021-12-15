import React from "react";
import "../App.css";

const BrushColor = ({ setLineColor }) => {
return (
    <div className="BrushColor">
        <label>Brush Color </label>
        <input
            type="color" id="color"
            onChange={(e) => {
            setLineColor(e.target.value);
            }}
        />
    </div>
    );
};

export default BrushColor;
