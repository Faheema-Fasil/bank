function login1() {

    window.location='./login.html'
}

function login() {
    var accno=document.getElementById('accno').value;
    var pass=document.getElementById('passw').value;
    if (accno===""||pass==="") {
        alert('Please enter both Account Number and Password.');
        return;
    }
    var userAccount = localStorage.getItem(accno);
    if (userAccount) {
        var accountDetails = JSON.parse(userAccount);

        if (accountDetails.password === pass) {
            alert("Login successful!");
            localStorage.setItem("currentUser", accountDetails.userName);
            window.location.href = "userpage.html"; 
        } else {
            alert("Invalid password. Please try again.");
        }
    } else {
        alert("Account not found. Please register.");
        window.location = './register.html'; 
    }

}

function register() {
    
    var userName = document.getElementById("username").value;
    var accountNumber = document.getElementById("regAccno").value;
    var password = document.getElementById("regPassw").value;
 

    accountDetails={
        
            userName: userName,
        accountNumber: accountNumber,
        password: password,
        balance: 0
    }
       
    if (localStorage.getItem(accountNumber)) {
        alert("User already registered.");
        window.location.href = "login.html"; 
        return;
    }

    if (userName === "" || accountNumber === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    localStorage.setItem(accountNumber, JSON.stringify(accountDetails));

    alert("Registration successful!");
    window.location.href = "login.html"; 
}

    

function goToLogin() {
    window.location.href = './login.html';
}


function goToRegister() {
    window.location.href = './register.html';
}
function goToRegister1() {
    window.location.href = './register.html';
}
function deposit() {
    var accno = document.getElementById('accno').value; 
    var depositAmount = parseFloat(document.getElementById('amount').value); 


    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }


    var userAccount = localStorage.getItem(accno);
    
    if (userAccount) { 
        var accountDetails = JSON.parse(userAccount); 
        accountDetails.balance += depositAmount; 
        localStorage.setItem(accno, JSON.stringify(accountDetails)); 
        
        alert("Deposit successful! New balance: " + accountDetails.balance);
        
   
        document.getElementById('balance').innerHTML = `CURRENT BALANCE AMOUNT : ${accountDetails.balance}`;
    } else {
        alert("Account not found.");
    }
}



function withdraw() {
    var accno = document.getElementById('withaccno').value; 
    var withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value); 

  
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

  
    var userAccount = localStorage.getItem(accno);
    
    if (userAccount) { 
        var accountDetails = JSON.parse(userAccount); 
        
        
        if (withdrawAmount > accountDetails.balance) {
            alert("Insufficient funds. Current balance: " + accountDetails.balance);
            return;
        }
        
        accountDetails.balance -= withdrawAmount; 
        localStorage.setItem(accno, JSON.stringify(accountDetails)); 
        
        alert("Withdrawal successful! New balance: " + accountDetails.balance);
        document.getElementById('balance').innerHTML = `CURRENT BALANCE AMOUNT : ${accountDetails.balance}`;
    } else {
        alert("Account not found.");
    }
}
function logout() {
    localStorage.clear("userAccount"); 
    window.location.href = './index.html';
}
