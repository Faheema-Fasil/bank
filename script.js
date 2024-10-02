function login1() {

    window.location='./login.html'
}

// function login() {
//     // Get the values from the input fields
//     var accountNumber = document.getElementById("accno").value;
//     var password = document.getElementById("passw").value;

//     // Simple validation
//     if (accountNumber === "" || password === "") {
//         alert("Please enter both Account Number and Password.");
//         return;
//     }

//     // Example: Simulate login validation (replace this with actual API call)
//     if (accountNumber === "12345" && password === "password") {
//         alert("Login successful!");
//         window.location.href = "dashboard.html";  // Redirect to the dashboard
//     } else {
//         alert("Invalid Account Number or Password. Please try again.");
//         window.location='./register.html'
//     }
// }
function login() {
    var accno=document.getElementById('accno').value;
    var pass=document.getElementById('passw').value;
    if (accno===""||pass==="") {
        alert('Please enter both Account Number and Password.');
        return;
    }
    if (accno&&pass in localStorage) {
        alert("Login successful!");
      window.location.href = "userpage.html";
    }else{
        alert("Invalid Account Number or Password. Please try again.");
         window.location='./register.html'
    }
}
// Function to handle registration
function register() {
    // Get values from registration input fields
    var userName = document.getElementById("username").value;
    var accountNumber = document.getElementById("regAccno").value;
    var password = document.getElementById("regPassw").value;
 

    accountDetails={
            // Get values from registration input fields
            userName: userName,
        accountNumber: accountNumber,
        password: password,
        balance: 0
    }
    if(accountNumber in localStorage){
        alert("User already registered")
    }
    // Simple validation
    if (userName === "" || accountNumber === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    localStorage.setItem(accountNumber, JSON.stringify(accountDetails))


    // Example: Simulate registration process (replace this with actual API call)
    alert("Registration successful!");
    window.location.href = "login.html";  // Redirect to login page after registration
}

// Function to redirect to the login page
function goToLogin() {
    window.location.href = './login.html';
}

// Function to redirect to the registration page
function goToRegister() {
    window.location.href = './register.html';
}
