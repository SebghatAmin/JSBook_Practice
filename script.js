let balance = 0;
const userInput = document.querySelector(".balanceEntry");
const btnpurchase = document.querySelector(".purchasebtn");

btnpurchase.addEventListener("click", () => {
  const raw = userInput.value;
  if (raw === "") {
    alert("please enter a number");
    return;
  }
  const value = Number(raw);
  if (Number.isNaN(value)) {
    alert("invalid Number");
    return;
  }
  balance = value;
  alert("your balance is " + balance + " $");
});
