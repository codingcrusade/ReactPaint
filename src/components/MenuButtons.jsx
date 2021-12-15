import React from "react";
import "../App.css";

const MenuButtons = ({ reset, DownloadCanvasAsImage }) => {
return (
	<div className="MenuButtons">
        <button
        onClick={() => {
            reset();
        }
        }
        >Reset</button>
        <button
        onClick={() => {
            DownloadCanvasAsImage();
        }
        }
        >Save</button>
	</div>
);
};

export default MenuButtons;
