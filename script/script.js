
// sing in functionality
document.getElementById('sing-In-btn').addEventListener('click', () => {

    const userInput = document.getElementById('username-input');
    const userValue = userInput.value;
    const passwordInput = document.getElementById('password-input');
    const passwordValue = passwordInput.value;

    if (userValue !== 'admin') {
        alert('wrong username')
        return;

    } else if (passwordValue !== 'admin123') {
        alert('wrong password')
        return;
    }

    if (userValue == 'admin' && passwordValue == 'admin123') {
        window.location.replace("home.html");
        alert('Sing In Successful');
    }



})





