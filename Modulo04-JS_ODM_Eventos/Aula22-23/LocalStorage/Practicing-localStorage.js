
const form = document.querySelector("#form");
const welcome = document.querySelector("#welcome");
const logout = document.querySelector("#logout");
const spanUsername = document.querySelector("#username")

function checkUser() {
    const username = localStorage.getItem("name");
    const password = localStorage.getItem("password");

    if (username && password) {
        form.style.display = "none";
        welcome.style.display = "block";
    } else {
        form.style.display = "block";
        welcome.style.display = "none";
    };

    spanUsername.textContent = username;
}

form.addEventListener("submit", (e) => { /* argumento (e) representa o evento em si */
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const passwordInput = document.querySelector("#password");

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("password", passwordInput.value)

    nameInput.value = '';
    passwordInput.value = '';

    checkUser()
});

logout.addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");

    checkUser();
})

