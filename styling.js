document.querySelector("#1st-btn");

function  button() {
  const btn = document.querySelector("#1st-btn");
  const funcBtn = btn.createElement('p');
  funcBtn.textContent = "You Have Been Clicked the Button";
}
btn.funcBtn = button;
