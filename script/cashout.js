document.getElementById("cashout-btn").addEventListener("click", function(){
    //1. get the agent number and validate
const cashoutNumberInput = document.getElementById("cashout-number");
const cashoutNumber = cashoutNumberInput.value ;
console.log(cashoutNumber);

    //2. get the amount, validate , convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value ;
    console.log(cashoutAmount);

    //3. get the current balcnce, validate , convert to number4
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    //4. calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    

    if (newBalance < 0){
        alert("Invalid Amount");
    }
    console.log("New Balance", newBalance);
    //5. get the pin and verify
    //5-1  true hole show alert and set new blanace
    //5-2 show error alert and return
})