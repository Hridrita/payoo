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
    const newBalance = getBalance() + Number(amount);
    console.log(newBalance) ;

    const pin = getValueFromInput("add-money-pin");
    if (pin === "1234"){
        alert("Add money success");
        setBalance(newBalance); //called set balal
    }
    else{
        alert("Invalid Pin");
        return;
    }

});