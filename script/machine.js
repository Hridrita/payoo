console.log("Machine array");

//ei machine j kono ekta id niye input value ta dite parbe
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value ;
    console.log(id , value);
    return value ;   // jodi kono machine k ba function k call kori tahole sey return na dile store rakhte pare na
}