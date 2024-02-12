// "use strict";

const billsInput = document.querySelector("#bills");
const billsDiv = document.querySelector(".billsDiv");
const billsError = document.querySelector(".error.bills-error");

const tipPercentButtons = document.querySelectorAll(".tipPercentButton");

tipPercentButtons.forEach(function (item, index) {
  item.addEventListener("click", () => {
    console.log(item, index);
    console.log(item.getAttribute("data-value"));
  });
});

// billsInput.addEventListener("change", function (e) {
//   console.log(e);
// });
billsError.style.fontSize = "smaller";
billsInput.addEventListener("keyup", (e) => {
  let value = e.target.value;
  let convertedValue = Number(value);
  console.log(typeof value, typeof convertedValue);
  console.log(isNaN(convertedValue));

  if (isNaN(convertedValue) || !typeof Number(value) === "number") {
    console.log("Enter a valid number");
    billsDiv.classList.add("divError");
    billsError.innerHTML = "Enter a valid Number";
    return "Not A Valid Number";
  } else {
    billsDiv.classList.remove("divError");
    billsError.innerHTML = "";
  }
});

// billsInput.
