const textInput = document.querySelector("#validation-input");
const lengthInput = Number(textInput.dataset.length);

textInput.addEventListener('blur', () => {
    if (textInput.value.length === lengthInput) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid")
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
})
