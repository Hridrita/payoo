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

        // window.location.replace("/home.html");
        window.location.assign("home.html");  //index file r home file ek e jaygay ache tai slash deyar dorkar nai
    }
    //..false hole return kore dibo
    else{
        alert("Login Failed");
        return;
    }
    

    


})