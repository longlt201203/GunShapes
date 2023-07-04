import { useRef, useState, useEffect } from "react";

function SettingMusic() {
    const [processValue, setProcessValue] = useState(50);
    const [sliderValue, setSliderValue] = useState(50);

    function sliderFnc(e) {
       const inputRef = e.target;
       const value = inputRef.value;
       setProcessValue(value);
       setSliderValue(value); 
    }

    return (
        <div className="musicSetting">
            <h3>MUSIC</h3>
            <div className="slider-cont">
                <div className="slider" >
                    <input type="range" onInput={sliderFnc} className="slideRange" min = {0} max = {100} value={processValue} />
                    <progress min={0} max={100} value={processValue}></progress>
                </div>
                <div className="sliderValue">{sliderValue}</div>
            </div>
        </div>
    );
}

export default SettingMusic;