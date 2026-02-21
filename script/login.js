console.log("Hellloooooooooooo")

document.getElementById("login-btn").addEventListener("click", function(){
    //get the mobile no input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value ;
    console.log(contactNumber);

    //get the pin
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value ;
    console.log(pin);

    //match pin and mobile no and get an alert
    if(contactNumber == "01234567890" && pin == "1234"){
        alert("Login Success");
    }
    //..false hole return kore dibo
    else{
        alert("Login Failed");
        return;
    }
    

    


})