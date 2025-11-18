function registerUser() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if(username && password) {
        if(localStorage.getItem(username)) {
            document.getElementById('reg-message').innerText = "Username already exists!";
        } else {
            localStorage.setItem(username, password);
            document.getElementById('reg-message').style.color = "green";
            document.getElementById('reg-message').innerText = "Registration successful!";
        }
    } else {
        document.getElementById('reg-message').innerText = "Please enter username and password!";
    }
}
