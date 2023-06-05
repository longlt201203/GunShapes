function InventoryItemPagination(){
    function myFunction() {
        document.querySelector("#dropdown").classList.toggle("show");
        var div, a, i;
        div = document.getElementById("dropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
        }
    }
    document.getElementById("Checkout").addEventListener("click", checkFuncion);
        function checkFuncion() {
            document.getElementById("Checkout").innerHTML = "YOU CLICKED ME!";
        }
        
    return(
    
        <div className="inventoryItemPagination">

           
            <button onClick={()=>myFunction()} className="dropbtn">Sort Item</button>
            <div id="dropdown" className="dropdown-content">
                <a href="" ><p id="Checkout">Sort By Alphabet</p></a>
                <a href="" ><p id="Checkout">Sort by Date Obtained</p></a>
                <a href="" ><p id="Checkout"></p>Sort by Rarity</a>
                <a href="" ><p id="Checkout">Sort by Type</p></a>
            </div>

            <button className="pre" onclick="previous()">Previous</button>
            <p>1/100</p>
            <button className="next" onclick="next()">Next</button>
        </div>
    );
}

export default InventoryItemPagination;