//optimized code

document.getElementById("cashout-btn").addEventListener("click", function(){
    //1. get the agent number and validate  
    const cashoutNumber = getValueFromInput("cashout-number");
        console.log(cashoutNumber);

       if (cashoutNumber.length != 11){
        alert("Inavlid Cashout Number");
        return;
       }

       //2. get the amount, validate , convert to number
       const cashoutAmount = getValueFromInput("cashout-amount");
       console.log(cashoutAmount);

       //3. get the current balcnce, validate , convert to number
       const currentBalance = getBalance(); //machine thk just function ta call krlam

       //4. calculate new balance
       const newBalance = currentBalance - Number(cashoutAmount);
       console.log(newBalance);

       if (newBalance < 0){
        alert ("Invalid Amount");
        return
       }

        //5. get the pin and verify
       const pin = getValueFromInput("cashout-pin");
       if (pin === "1234"){
        //5-1  true hole show alert and set new blanace
        alert ("Cashout successful");
        setBalance(newBalance); //machine thk function k call krlam r kon value set hobe seta just pass kore dilam.
       }
       else{
        //5-2 false hole show error alert and return
        alert("Invalid Pin");
        return;
       }

});






//not optimized code


// document.getElementById("cashout-btn").addEventListener("click", function(){
//     //1. get the agent number and validate
// const cashoutNumberInput = document.getElementById("cashout-number");
// const cashoutNumber = cashoutNumberInput.value ;
// console.log(cashoutNumber);

// if (cashoutNumber.length != 11){
//     alert("Inavlid Agent Number");
//     return;
// }

//     //2. get the amount, validate , convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value ;
//     console.log(cashoutAmount);

//     //3. get the current balcnce, validate , convert to number4
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //4. calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    
//     if (newBalance < 0){
//         alert("Invalid Amount");
//     }
//     console.log("New Balance", newBalance);

//     //5. get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value ;

//     if (pin === '1234'){
//         //5-1  true hole show alert and set new blanace
//         alert("Cashout Successful");
//         console.log("New Balance", newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//          //5-2 false hole show error alert and return
//         alert("Invalid Pin");
//         return;
//     }
    
    
// })