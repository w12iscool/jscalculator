let calculatorFrame = document.createElement('div');

calculatorFrame.style.cssText = `
  position: fixed;
  transform: translate(-50%, -50%);
  padding: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  background: hsla(0, 0%, 0%, 1);

background: radial-gradient(circle, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 29%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);

background: -moz-radial-gradient(circle, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 29%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);

background: -webkit-radial-gradient(circle, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 29%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#4A4A4A", GradientType=1 );
  background-blend-mode: multiply,multiply;
  height: 400px;
  width: 300px;
  animation: borderAnimation 4s infinite linear;
`;


let styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes borderAnimation {
    0% {
      border: 4px solid red;
    }
    25% {
      border: 4px solid blue;
    }
    50% {
      border: 4px solid green;
    }
    75% {
      border: 4px solid yellow;
    }
    100% {
      border: 4px solid red;
    }
  }
`;
document.head.appendChild(styleSheet);

document.body.appendChild(calculatorFrame);

let input = document.createElement('h1');

input.textContent = " "
input.style.border = "none";
input.style.display = "flex";
input.style.justifyContent = "center";
input.style.textAlign = "center";
input.style.outline = "none";
input.style.width = "300px";
input.style.height = "40px";
input.style.color = "#fff";
input.style.backgroundColor = "rgb(70, 70, 70)";
input.style.position = "fixed";
input.style.left = "12%";
input.style.top = "8%";
input.style.fontFamily = "math";
input.style.fontSize = "36px"


calculatorFrame.appendChild(input);





function createButton(number, top, left, backgroundClr) {
  let button = document.createElement('button');
  button.textContent = number;
  button.style.backgroundColor = backgroundClr;
  button.style.fontFamily = 'math';
  button.style.fontSize = '20px';
  button.style.position = 'fixed';
  button.style.transform = 'translate(-50%, -50%)';
  button.style.padding = '20px';
  button.style.display = 'flex';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.top = top;
  button.style.left = left;
  button.style.backgroundColor = backgroundClr;
  button.style.color = '#fff';

  if (number === "CLR") {
    button.style.animation = 'rgbAnimation 3s infinite';
  }

  calculatorFrame.appendChild(button);

  return button;
}

styleSheet.innerHTML += `
  @keyframes rgbAnimation {
    0% {
      background-color: rgb(255, 0, 0);
    }
    50% {
      background-color: rgb(0, 255, 0);
    }
    100% {
      background-color: rgb(0, 0, 255);
    }
  }
`;

  
const buttonOne = createButton("1", "35%", "15%", "rgb(70, 70, 70)");
const buttonTwo = createButton("2", "35%", "34%", "rgb(70, 70, 70)");
const buttonThree = createButton("3", "35%", "53%", "rgb(70, 70, 70)");
const buttonFour = createButton("4", "55%", "15%", "rgb(70, 70, 70)");
const buttonFive = createButton("5", "55%", "34%", "rgb(70, 70, 70)");
const buttonSix = createButton("6", "55%", "53%", "rgb(70, 70, 70)");
const buttonSeven = createButton("7", "75%", "15%", "rgb(70, 70, 70)");
const buttonEight = createButton("8", "75%", "34%", "rgb(70, 70, 70)");
const buttonNine = createButton("9", "75%", "53%", "rgb(70, 70, 70)");
const buttonAdd = createButton("+", "35%", "72%", "rgb(20, 20, 20)");
const buttonSubtract = createButton("-", "35%", "91%", "rgb(20, 20, 20)");
const buttonMultiply = createButton("X", "55%", "72%", "rgb(20, 20, 20)");
const buttonDivide = createButton("/", "55%", "91%", "rgb(20, 20, 20)");
const buttonZero = createButton("0", "75%", "72%", "rgb(70, 70, 70)");
const buttonEquals = createButton("=", "91%", "53%", "rgb(20, 20, 20)")
const buttonClear = createButton("CLR", "75%", "91%", "rgb(70, 70, 70)");

let num1;
let num2;
let operator;
let result;

buttonAdd.addEventListener('click', () => {
  input.textContent += "+";
  operator = "+";
  num1 = input.textContent.slice(0, input.textContent.length - 1);
});
buttonDivide.addEventListener('click', () => {
  input.textContent += "/"
  operator = "/";
  num1 = input.textContent.slice(0, input.textContent.length - 1);
});
buttonMultiply.addEventListener('click', () => {
  input.textContent += "*"
  operator = "*";
  num1 = input.textContent.slice(0, input.textContent.length - 1);
});
buttonEquals.addEventListener('click', () => {
  num2 = input.textContent.slice(num1.length + 1);
  if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2)
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2)
  }else if (operator === "*") {
    result = parseFloat(num1) * parseFloat(num2)
  } else if (operator === "/") {
    result = parseFloat(num1) / parseFloat(num2)
  }

  input.textContent = result

});
buttonSubtract.addEventListener('click', () => {
  input.textContent += "-"
  operator = "-";
  num1 = input.textContent.slice(0, input.textContent.length - 1);
});


buttonClear.addEventListener('click', () => {
  input.textContent = " ";
})




buttonOne.addEventListener('click', () => {
  input.textContent += "1"
});
buttonTwo.addEventListener('click', () => {
  input.textContent += "2"
});
buttonThree.addEventListener('click', () => {
  input.textContent += "3"
});
buttonFour.addEventListener('click', () => {
  input.textContent += "4"
});
buttonFive.addEventListener('click', () => {
  input.textContent += "5"
});
buttonSix.addEventListener('click', () => {
  input.textContent += "6"
});
buttonSeven.addEventListener('click', () => {
  input.textContent += "7"
});
buttonEight.addEventListener('click', () => {
  input.textContent += "8"
});
buttonNine.addEventListener('click', () => {
  input.textContent += "9"
});
buttonZero.addEventListener('click', () => {
  input.textContent += "0"
});





document.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    input.textContent += "1"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '2') {
    input.textContent += "2"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '3') {
    input.textContent += "3"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '4') {
    input.textContent += "4"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '5') {
    input.textContent += "5"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '6') {
    input.textContent += "6"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '7') {
    input.textContent += "7"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '8') {
    input.textContent += "8"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '9') {
    input.textContent += "9"
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '0') {
    input.textContent += "0"
  }
});








document.addEventListener('keydown', (event) => {
  if (event.key === '-') {
    input.textContent += "-"
    operator = "-";
    num1 = input.textContent.slice(0, input.textContent.length - 1);
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '+') {
    input.textContent += "+"
    operator = "+";
    num1 = input.textContent.slice(0, input.textContent.length - 1);
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '*') {
    input.textContent += "*"
    operator = "*";
    num1 = input.textContent.slice(0, input.textContent.length - 1);
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === '/') {
    input.textContent += "/"
    operator = "/";
    num1 = input.textContent.slice(0, input.textContent.length - 1);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    num2 = input.textContent.slice(num1.length + 1);
   if (operator === "+") {
    result = parseFloat(num1) + parseFloat(num2)
  } else if (operator === "-") {
    result = parseFloat(num1) - parseFloat(num2)
  }else if (operator === "*") {
    result = parseFloat(num1) * parseFloat(num2)
  } else if (operator === "/") {
    result = parseFloat(num1) / parseFloat(num2)
  }

  input.textContent = result
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    input.textContent = " ";
  }
});



