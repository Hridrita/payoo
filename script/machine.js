console.log("Machine array");

//ei machine j kono ekta id niye input value ta dite parbe
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value ;
    console.log(id , value);
    return value ;   // jodi kono machine k ba function k call kori tahole sey return na dile store rakhte pare na..ekhan thk must value return krte hobe
}

 // kaw jodi takey call kore sey balance ta k output hishbe pathy dibe
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance" , balance);
    return Number(balance);

}

//balance set krbe

function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value ;
}