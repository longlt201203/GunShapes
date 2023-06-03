import InventoryLayout from "../layouts/InventoryLayout";
import itemImg_1 from "../assets/item-1.jpg";
import itemImg_2 from "../assets/item-2.jpg";
import avaImg from "../assets/avatar.png";


function Inventory() {
    return (
        <InventoryLayout>
            <div class="inventoryLayout">
        <div class="inventoryItemDisplayer">
            <div class="weapon" id="weapons">
            </div>
            <div class="avatar">
                <div class="a-slot" id="0">
                    <h1>Character Name</h1>
                    <img src={avaImg}/>
                </div>
            </div>
        </div>
       <div class="inventorySlotDisplay">

          <div class="inventory" id="item-slots">

            <div class="inventoryItemBox" id="1">
              <div class="items" id="scythe">
              <img src={itemImg_1}/>
                <div class="number">
                  33
                </div>
                <div class="itemDetail">
                  <p>Atk: 1000</p>
                  <p>hp: 1000</p>
                  <p>speed: 1000</p>
                </div>
              </div>
            </div>
            <div class="inventoryItemBox" id="2"></div>
            <div class="inventoryItemBox" id="3"></div>
            <div class="inventoryItemBox" id="4"></div>
            <div class="inventoryItemBox" id="5"></div>
            <div class="inventoryItemBox" id="6"></div>
            <div class="inventoryItemBox" id="7"></div>
            <div class="inventoryItemBox" id="8"></div>
            <div class="inventoryItemBox" id="9"></div>
            <div class="inventoryItemBox" id="10"></div>
            <div class="inventoryItemBox" id="11"></div>
            <div class="inventoryItemBox" id="12"></div>
            <div class="inventoryItemBox" id="13"></div>
            <div class="inventoryItemBox" id="14"></div>
            <div class="inventoryItemBox" id="15"></div>
            <div class="inventoryItemBox" id="16"></div>
            <div class="inventoryItemBox" id="17"></div>
            <div class="inventoryItemBox" id="18"></div>
            <div class="inventoryItemBox" id="19">
              <div class="items" id="scythe">
                
                <div class="number">
                  33
                </div>
                <div class="itemDetail">
                  <p>Atk: 100</p>
                  <p>hp: 100</p>
                  <p>speed: 100</p>
                </div>
              </div>
            </div>
            <div class="inventoryItemBox" id="20"></div>
            <div class="inventoryItemBox" id="21"></div>
            <div class="inventoryItemBox" id="22"></div>
            <div class="inventoryItemBox" id="23"></div>
            <div class="inventoryItemBox" id="24"></div>
            <div class="inventoryItemBox" id="25"></div>
            <div class="inventoryItemBox" id="26"></div>
            <div class="inventoryItemBox" id="27"></div>
            <div class="inventoryItemBox" id="28"></div>
            <div class="inventoryItemBox" id="29"></div>
            <div class="inventoryItemBox" id="30"></div>
            <div class="inventoryItemBox" id="31"></div>
            <div class="inventoryItemBox" id="32"></div>
            <div class="inventoryItemBox" id="33"></div>
            <div class="inventoryItemBox" id="34"></div>
            <div class="inventoryItemBox" id="35"></div>
            <div class="inventoryItemBox" id="36"></div>
            <div class="inventoryItemBox" id="37"></div>
            <div class="inventoryItemBox" id="38"></div>
            <div class="inventoryItemBox" id="39"></div>
            <div class="inventoryItemBox" id="40"></div>
            <div class="inventoryItemBox" id="41"></div>
            <div class="inventoryItemBox" id="42"></div>
            <div class="inventoryItemBox" id="43"></div>
            <div class="inventoryItemBox" id="44"></div>
            <div class="inventoryItemBox" id="45"></div>
            <div class="inventoryItemBox" id="46"></div>
            <div class="inventoryItemBox" id="47"></div>
            <div class="inventoryItemBox" id="48"></div>
            <div class="inventoryItemBox" id="49"></div>
            <div class="inventoryItemBox" id="50"></div>
            <div class="inventoryItemBox" id="51">
              <div class="items" id="megumin">
                <img src={itemImg_2}/>
                <div class="number">
                  33
                </div>
                <div class="itemDetail">
                  <p>Atk: 100</p>
                  <p>hp: 100</p>
                  <p>speed: 100</p>
                </div>
              </div>
            </div>
            <div class="inventoryItemBox" id="52"></div>
            <div class="inventoryItemBox" id="53"></div>
            <div class="inventoryItemBox" id="54"></div>
            <div class="inventoryItemBox" id="55"></div>
            <div class="inventoryItemBox" id="56"></div>
            <div class="inventoryItemBox" id="57"></div>
            <div class="inventoryItemBox" id="58"></div>
            <div class="inventoryItemBox" id="59"></div>
            <div class="inventoryItemBox" id="60"></div>
            <div class="inventoryItemBox" id="61"></div>
            <div class="inventoryItemBox" id="62"></div>
            <div class="inventoryItemBox" id="63"></div>


          </div>
              
          <div class="inventoryItemPagination">
            <button class="pre" onclick="previous()">Previous</button>
            <p>1/100</p>
            <button class="next" onclick="next()">Next</button>
          </div>
       </div>
    </div>
        </InventoryLayout>
    );
}

export default Inventory;