import avatarImg from "../assets/avatar.png"
function InventoryAvatar() {
    return (
        <div className="avatar">
                <div className="a-slot" id="0">
                    <h1>Character Name</h1>
                    <img src={avatarImg}/>
                </div>
            </div>
    );
}
export default InventoryAvatar;