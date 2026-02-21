document.getElementById("add-money-btn").addEventListener("click" , function(){
    console.log("add money button clicked");

    //1. get bank account
    const bankAccount = getValueFromInput("add-money-bank");
    console.log("bankAccount");

    if (bankAccount == "Select a Bank"){
        alert("Please select a bank");
        return;
    }

    //2. get bank account number
    const accno = getValueFromInput("add-money-number");
    if( accno.length != 11){
        alert("Invalid account no");
        return;
    }

    //3. get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance) ;

    const pin = getValueFromInput("add-money-pin");
    if (pin === "1234"){
        alert(`Add Money Success ${bankAccount} at ${new Date()}`);  //tilt er vitor string and variable duitai use kora jay..variable use krte hole tar agey doller sign use krte hobe then curly braces er vitor variable...ekhne date oo use kora hoyeche...eta krle jeidin add money krbo seidin er date e dekhabe
        setBalance(newBalance); //called set balance funtion from achine 
    }
    else{
        alert("Invalid Pin");
        return;
    }

});