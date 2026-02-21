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
        setBalance(newBalance); //called set balance funtion from machine 

        //1. history-container k dhore niye ashbo
        const history = document.getElementById("history-container");

        //2. new div create krbo
        const newHistory = document.createElement("div");

        //3. new div e innerHtML add krbo
        newHistory.innerHTML = `
        <div class="transection-card p-5 bg-base-200 border-1 border-gray-500 rounded">
                Add Money Success ${bankAccount}, acc-no ${accno} at ${new Date()}


            </div>
        `
        //4. history-container e new div k append krbo
        history.append(newHistory);

    }
    else{
        alert("Invalid Pin");
        return;
    }

});