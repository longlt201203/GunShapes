function SettingResolution() {
    return(
        <div className="resolutionSetting">
        <h3>RESOLUTION</h3>
        <div className="solutionBox">
            <form>
                <select name="resolution" id="resolution">
                  <option value="3840x2160">3840 x 2160 (full screen)</option>
                  <option value="1920x1080">1920 x 1080 (windowed)</option>
                  <option value="1600x900">1600 x 900 (windowed)</option>
                  <option value="640x480">640 x 480 (windowed)</option>
                </select>
            </form>
        </div>
    </div>
    );
}

export default SettingResolution;