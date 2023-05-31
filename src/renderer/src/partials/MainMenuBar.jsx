
import MenuBar from '../components/MenuBar/MenuBar';
import MenuBarItem from '../components/MenuBar/MenuBarItem';
import PageMapping from '../pages/pages';

function MainMenuBar() {
    return (
        <MenuBar id="main-menu-bar">
            {Object.keys(PageMapping).map((key) => (
                <MenuBarItem title={PageMapping[key].name} page={PageMapping[key].path} />
            ))}
        </MenuBar>
    );
}

export default MainMenuBar;