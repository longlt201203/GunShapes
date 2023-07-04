function SettingFPS() {
    return(
        <div className="fpsSetting">
            <h3>FPS</h3>
            <div className="fpsBox">
                <form>
                    <select name="fps" id="fps">
                      <option value="30Hz">30 Hz</option>
                      <option value="60Hz">60 Hz</option>
                      <option value="120Hz">120 Hz</option>
                      <option value="240Hz">240 Hz</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default SettingFPS;