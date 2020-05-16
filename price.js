function funcDisc(){
    let x = document.getElementById("discount").value;
    let price = x * 85;
    document.getElementById("discountTotal").innerHTML = "€" + price.toFixed(2);
}

function funcNoDisc(){
    let x = document.getElementById("noDisc").value;
    let price = x * 100;
    document.getElementById("total").innerHTML = "€" + price.toFixed(2);
}