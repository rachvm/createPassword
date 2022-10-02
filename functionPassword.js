let attempts = 3

//function that prompts user for info - stores the password  and checks if it is correct

function authenticateUser() {
    let userPassword = prompt("Please enter the password.");
    while (userPassword != "myPassword1!" && attempts > 0) {
        userPassword = prompt("Please enter the password."); 
        attempts--; alert("You have " + attempts + " attempt left")};
    if (userPassword === "myPassword1!") {
        return true;
    }   else    {
        return false;
    };

}

//if statement to give a readout whether the password is correct or incorrect

let isLoggedIn = authenticateUser();
  
 if (isLoggedIn == true)    {
    alert("The secret is: Javascript is the best!");
 }  else    {
    alert("Your Login Has Failed")
 }
 