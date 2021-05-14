function emptyQte() {
    if (document.getElementById('qte').value === "") {
        document.getElementById('ajout').disabled = true;
    } else {
        document.getElementById('ajout').disabled = false;
    }

}

var delRowList = function (btn2) {
    /*
    var i = btn2.parentNode.parentNode.rowIndex;
    document.getElementById("sellTable").deleteRow(i);
    */
    var delbtn = document.getElementById('sellTable');
    delbtn.deleteRow(btn2.parentNode.rowIndex);
    var arr = document.getElementsByClassName('subTotal');
    console.log(arr.length);

    var tot = 0;
    console.log(tot);
    for (var i = 0; i < arr.length; i++) {
        console.log(tot);
        tot += parseFloat(arr[i].textContent);
    }
    console.log(tot);

    document.getElementById('totalprod').innerHTML = tot.toFixed(3) + " DT";

}


var setupListeners = function () {
    var btn = document.getElementById('ajout');
    btn.addEventListener('click', addShopList);
}

window.addEventListener('load', setupListeners);


var addShopList = function () {
    //Making Table
    var product = document.getElementById("shopList").options[document.getElementById('shopList').selectedIndex].text;
    var quantity = document.getElementById("qte").value;
    var sum = document.getElementById("shopList").value;
    var total = parseInt(quantity) * parseFloat(sum);
    var tbody = document.querySelector('#sellTable tbody');
    var trproduct = document.createElement('TR');
    tbody.appendChild(trproduct);
    var tbodytr = tbody.lastChild;

    //Making 1st Row
    var prdctNameSpace = document.createElement('TD');
    tbodytr.appendChild(prdctNameSpace);
    //First Row content
    var prdctName = document.createTextNode(product);
    prdctNameSpace.appendChild(prdctName);
    var productQteSpace = document.createElement("TD");
    tbodytr.appendChild(productQteSpace);
    //2nd col Content
    var productQte = document.createTextNode(quantity);
    productQteSpace.appendChild(productQte);
    //3rd Col
    var productSinglePriceSpace = document.createElement("TD");
    tbodytr.appendChild(productSinglePriceSpace);
    var productSinglePrice = document.createTextNode(parseInt(sum).toFixed(3));
    productSinglePriceSpace.appendChild(productSinglePrice);
    //4th col
    var productTotalPriceSpace = document.createElement("TD");
    tbodytr.appendChild(productTotalPriceSpace);
    var productTotalPrice = document.createTextNode(parseFloat(total).toFixed(3));
    productTotalPriceSpace.appendChild(productTotalPrice);
    productTotalPriceSpace.className = 'subTotal';

    var productDeleteSpace = document.createElement("TD");
    var productDeletebtn = document.createElement("BUTTON");
    //tbodytr.appendChild(productDeleteSpace);

    productDeletebtn.setAttribute('class', 'btn x');
    productDeletebtn.name = 'delrow';
    productDeletebtn.textContent = "X";
    tbodytr.appendChild(productDeletebtn);
    console.log(productDeletebtn.name);
    productDeletebtn.setAttribute('onclick', 'delRowList(this)');


    var arr = document.getElementsByClassName('subTotal');
    console.log(arr.length);

    var tot = 0;
    console.log(tot);
    for (var i = 0; i < arr.length; i++) {
        console.log(tot);
        tot += Number(arr[i].textContent);

    }
    console.log(tot);

    document.getElementById('totalprod').innerHTML = tot.toFixed(3) + " DT";;



}



var addtoCartNumber = function () {
    var count = document.getElementById('cartCount').textContent;
    parseInt(count);
    count = +count + 1;
    console.log(count);

    console.log(count);
    document.getElementById('cartCount').innerHTML = count;
}





document.addEventListener("DOMContentLoaded", function(event) 
{ 
    total_Somme();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        total_Somme();
    });
});

function total_Somme(){
    var sum = 0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

