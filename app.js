const numbers = document.querySelectorAll(".number");
const layarCalculator = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".sama__dengan");
const resetBtn = document.querySelector(".btn__clear");
const decimal = document.querySelector(".decimal");
let angkaSebelum = "";
let bilanganOperator = "";
let angkaSekarang = "0";

const updateLayar = (number) => {
  layarCalculator.value = number;
};

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputAngka(event.target.value);
    updateLayar(angkaSekarang);
  });
});

const inputAngka = (number) => {
  if (angkaSekarang === "0") {
    angkaSekarang = number;
  } else {
    angkaSekarang += number;
  }
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (bilanganOperator === "") {
    angkaSebelum = angkaSekarang;
  }

  bilanganOperator = operator;
  angkaSekarang = "";
};

equalSign.addEventListener("click", () => {
  perhitungan();
  updateLayar(angkaSekarang);
});

const perhitungan = () => {
  let hasil = "";

  switch (bilanganOperator) {
    case "+":
      hasil = parseFloat(angkaSebelum) + parseFloat(angkaSekarang);
      break;
    case "-":
      hasil = parseFloat(angkaSebelum) - parseFloat(angkaSekarang);
      break;
    case "*":
      hasil = parseFloat(angkaSebelum) * parseFloat(angkaSekarang);
      break;
    case "/":
      hasil = parseFloat(angkaSebelum) / parseFloat(angkaSekarang);
      break;
    case "%":
      hasil = (parseFloat(angkaSebelum) / parseFloat(angkaSekarang)) * 100;
      break;
    default:
      return;
  }
  angkaSekarang = hasil;
  bilanganOperator = "";
};

resetBtn.addEventListener("click", () => {
  resetAll();
  updateLayar(angkaSekarang);
});

const resetAll = () => {
  angkaSebelum = "";
  bilanganOperator = "";
  angkaSekarang = "0";
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateLayar(angkaSekarang);
});

inputDecimal = (dot) => {
  if (angkaSekarang.includes(".")) {
    return;
  }

  angkaSekarang += dot;
};
