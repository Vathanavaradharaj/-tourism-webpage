document.getElementById('value').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const eerror = document.getElementById('eerror');
    const perror = document.getElementById('perror');

    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        eerror.style.display = "block";
        valid = false;
    } else {
        email.style.border = "1px solid black";
        eerror.style.display = "none";
    }

    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        perror.style.display = "block";
        valid = false;
    } else {
        password.style.border = "1px solid black";
        perror.style.display = "none";
    }

    if (valid) {
        window.location.href = "http://127.0.0.1:5500/travel.html";
    }
});

document.getElementById('email').addEventListener('input', function() {
    if (this.value.length >= 9) {
        this.style.border = "1px solid black";
        document.getElementById('eerror').style.display = "none";
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.length >= 6) {
        this.style.border = "1px solid black";
        document.getElementById('perror').style.display = "none";
    }
});