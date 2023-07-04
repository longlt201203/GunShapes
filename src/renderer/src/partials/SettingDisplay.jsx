import SettingMusic from "./SettingMusic";
import SettingResolution from "./SettingResolution";
import SettingFPS from "./SettingFPS";
import SettingClose from "./SettingClose";

function SettingDisplay(){
    return(
        <div className="settingLayout">
            <h1>SETTING</h1>
            <SettingMusic/>
            <SettingResolution/>
            <SettingFPS/>
            <SettingClose/>
        </div>
    );
}

export default SettingDisplay;