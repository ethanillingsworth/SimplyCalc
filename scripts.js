const { Parser } = require('expr-eval')

const input = document.getElementById("input")

document.querySelectorAll(".button").forEach((button) => {
    button.onclick = function () {
        if (input.innerText == "0" && /^[0-9]$/.test(button.innerText)) input.innerText = ""

        if (button.classList.contains("special")) {
            if (button.innerText == "=") {
                input.innerText = Math.floor(Parser.evaluate(input.innerText) * 100) / 100
            }

            if (button.innerText == "AC") {
                input.innerText = "0"
            }

            if (button.innerText == "+/-") {
                input.innerText = Math.floor(Parser.evaluate(input.innerText) * 100) / 100
            }

            if (button.innerText == "%") {
                input.innerText = Math.floor(Parser.evaluate(input.innerText) * 100) / 100 / 100
            }
        }
        else {
            input.innerText += button.innerText
        }
    }
})