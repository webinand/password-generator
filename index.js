const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

  "!",
  "@",
  "#",
  "$",
  "%",

  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",

  ":",
  ";",

  ".",
  "?",
  "/",
];

let password1 = document.getElementById("pwd1");
let password2 = document.getElementById("pwd2");
let btn = document.querySelector(".generate-btn");
let clear = document.querySelector(".clear-btn");
let input = document.getElementById("input");
let label = document.getElementById("inputs");

btn.addEventListener("click", function () {
  if (input.value === "") {
    console.log("ferd");
    input.style.borderColor = "red";
    label.style.color = "red";
  } else {
    input.style.borderColor = "green";
    label.style.color = "green";
  }

  if (password1.textContent.length < 1 && password2.textContent.length < 1) {
    for (let i = 0; i < input.value; i++) {
      password1.textContent +=
        characters[Math.floor(Math.random() * characters.length)];
      password2.textContent +=
        characters[Math.floor(Math.random() * characters.length)];
    }
  } else {
    // password1.textContent = "";
    // password2.textContent = "";
    // input.value = "";
  }

  //   for (let i = 0; i < 15; i++) {
  //     password1.textContent =
  //       characters[Math.floor(Math.random() * characters.length)];
  //     password2.textContent =
  //       characters[Math.floor(Math.random() * characters.length)];
  //   }
});
clear.addEventListener("click", function () {
  if (password1.textContent.length > 1 && password2.textContent.length > 1) {
    password1.textContent = "";
    password2.textContent = "";
    input.value = "";
    input.style.borderColor = "#273549";
    label.style.color = "white";
  }
});
