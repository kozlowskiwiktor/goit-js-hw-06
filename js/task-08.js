const form = document.querySelector('.login-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    const user = {
        email: email.value,
        password: password.value,
    }
//bez obiektu: if (email. value === "" || password.value === "")
    if (user.email === "" || user.password === "") {
        alert("Please fill in all the fields!")
    }
//bez obiektu: console.log(`Login: ${email.value}, Password: ${password.value}`);
    console.log(user);
// lub form.reset();
    event.currentTarget.reset();
});
