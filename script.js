function checkPassword() {

    let password = document.getElementById("password").value;

    let score = 0;
    let tips = [];

    if (password.length >= 8) score += 4;
    else tips.push("Use at least 8 characters");

    if (/[A-Z]/.test(password)) score += 2;
    else tips.push("Add uppercase letters");

    if (/[a-z]/.test(password)) score += 2;
    else tips.push("Add lowercase letters");

    if (/[0-9]/.test(password)) score += 2;
    else tips.push("Include numbers");

    if (/[@$!%*?&]/.test(password)) score += 2;
    else tips.push("Add special symbols (@$!%*?&)");

    let result = "";

    if (score <= 5) {
        result = "🔴 Weak Password<br>Estimated crack time: minutes";
    } else if (score <= 8) {
        result = "🟡 Medium Password<br>Estimated crack time: months";
    } else {
        result = "🟢 Strong Password<br>Estimated crack time: years to centuries";
    }

    document.getElementById("result").innerHTML = result;
    document.getElementById("recommendations").innerHTML =
        tips.join("<br>") + "<br><br>Tip: Never reuse passwords across accounts.";
}

function generatePassword() {

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&";
    let password = "";

    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("password").value = password;
}