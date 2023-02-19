const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", () => {
    if (textInput.value === "") {
        textOutput.textContent = "Anonymus"
    }
    else { textOutput.textContent = textInput.value };
})