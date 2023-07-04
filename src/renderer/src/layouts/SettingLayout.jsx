import "./Setting.css";
import MainLayout from "./MainLayout";

function SettingLayout(props) {
	return (
		<MainLayout>
			<div className='settingLayout'>{props.children}</div>
		</MainLayout>
	);
}

export default SettingLayout;
