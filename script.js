//while loop counts down attempts and if statement to give a readout based on whether the password is correct or incorrect

let userPassword = prompt("Please enter the password.");

let attempts = 0

while (userPassword != "myPassword1!" && attempts < 2) {userPassword = prompt("Please enter the password."); attempts++}

if (userPassword === "myPassword1!") {
    alert("My secret information here");
}   else    {
    alert("log in failed")
}
