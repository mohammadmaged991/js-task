 const username = prompt("Enter your username:");

 const correctPassword = "123";
let attempts = 5;

 while (attempts > 0) {
    const password = prompt("Enter your password:");

    if (password === correctPassword) {
        alert(`Welcome, ${username}!`);
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`Incorrect password. You have ${attempts} attempts left.`);
        } else {
            alert("Please try again later.");
        }
    }
}
