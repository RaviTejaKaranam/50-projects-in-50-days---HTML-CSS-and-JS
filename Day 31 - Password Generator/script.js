const resultEl = document.getElementById("result");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
clipboardEl.addEventListener("click",()=>{
  const textarea = document.createElement("textarea")
  const password = resultEl.innerText;
  if(password.length === 0){
    return
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()
  alert("Password copied to clipboard")
})
generateButton.addEventListener("click", () => {
  const length = +lengthEl.value;
  const lower = lowercaseEl.checked;
  const upper = uppercaseEl.checked;
  const number = numbersEl.checked;
  const symbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(lower, upper, number, symbol, length);
});
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => {
      return Object.values(item)[0];
    }
  );
  const typesCount = typesArr.length;
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((item) => {
      let functionName = Object.keys(item)[0];
      generatedPassword += randomFunc[functionName]();
    });
  }
  generatedPassword = generatedPassword.slice(0, 20);
  return generatedPassword;
}
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";

  return symbols[Math.floor(Math.random() * symbols.length)];
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
