

const email = document.querySelector("#email");
const contact = document.querySelector(".btn");

const info = document.querySelector(".info");
const imgContainer = document.querySelector(".img-container");
const thanks = document.querySelector(".thanks");

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {

        info.classList.add("d-none");
        imgContainer.classList.add("d-none");
        thanks.classList.remove("d-none");
        thanks.classList.add("d-block");
        return (true)
    }
    email.setAttribute("placeholder", "Please insert a valid email");

    email.classList.add("active-input");
    email.value = "";
    setTimeout(() => {
        email.setAttribute("placeholder", "Enter your email address");
        contact.classList.toggle("active-btn");
        email.classList.remove("active-input");
    }, 1000);
    return (false)
}


contact.addEventListener("click", function () {
    ValidateEmail(email);
});