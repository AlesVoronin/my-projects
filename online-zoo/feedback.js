const feedbackButton = document.querySelector("#feedback_btn");
const cover = document.querySelector(".cover");
const form = document.querySelector(".feedback_form_wrapper");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const review = document.querySelector("#review");
const submit = document.querySelector("#submit");

const validate = () =>{
    if (name.validity.valid && email.validity.valid && review.validity.valid) {
        submit.classList.remove("invalide");
    }
    else {
        submit.classList.add("invalide");
    }
}

feedbackButton.addEventListener("click", () =>{
    if (feedbackButton.classList.contains("invalide")) return;
    cover.classList.remove("hidden");
    form.classList.remove("hidden");
});
cover.addEventListener("click", (event) =>{
        cover.classList.add("hidden");
        form.classList.add("hidden");
});

name.addEventListener("input", () => {
    validate();
})
email.addEventListener("input", () => {
    validate();
})
review.addEventListener("input", () => {
    validate();
})
