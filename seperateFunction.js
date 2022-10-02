let attempts = 3 //starts with three attempts at guessing the correct passwork

//function for the while loop which calculates and displays number of attempts and tells user
function attempts() {
    while (userPassword != "myPassword1!" && attempts > 0) {
        userPassword = prompt("Please enter the password."); 
        attempts--; 
        alert("You have " + attempts + " attempt left")};
 
//function for the if statement to give a true or false based on if the password is correct
function authenticateUser () {
    if (userPassword === "myPassword1!") {
        return true;
    }   else    {
        return false;
    };

}
 
let isLoggedIn = authenticateUser(); //variable to call the if statement above
  
//if statement to give a readout whether the password is correct or incorrect
if (isLoggedIn == true)    {
    alert("The secret is: Javascript is the best!");
}  else    {
    alert("Your Login Has Failed")
}
}
 