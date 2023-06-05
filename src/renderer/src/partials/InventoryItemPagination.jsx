function InventoryItemPagination(){
    function myFunction() {
        document.querySelector("#myDropdown").classList.toggle("show");
        var div, a, i;
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
      }
    }
    return(
    
        <div className="inventoryItemPagination">

           
            <button onClick={()=>myFunction()} className="dropbtn">Sort Item</button>
            <div id="myDropdown" className="dropdown-content">
                <a href="">Sort By Alphabet</a>
                <a href="">Sort by Date Obtained</a>
                <a href="">Sort by Rarity</a>
                <a href="">Sort by Type</a>
            </div>

            <button className="pre" onclick="previous()">Previous</button>
            <p>1/100</p>
            <button className="next" onclick="next()">Next</button>
        </div>
    );
}

export default InventoryItemPagination;