const elForm = document.querySelector("#form"),
  elInput = document.querySelector("#input"),
  elGuess = document.querySelector(".guess-text"),
  elRight = document.querySelector(".right-text"),
  elWrong = document.querySelector(".wrong-text");

const randomNumber = Math.floor(Math.random() * 10) + 1;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const result = Number(elInput.value);
  elGuess.textContent = `${"Taxminlar:"} ${result}`;
  elInput.value = " ";
  if (result > randomNumber) {
    elWrong.textContent = `Kichikroq raqam kiriting`;
    elRight.textContent = " ";
  } else if (result < randomNumber) {
    elWrong.textContent = `Kattaroq raqam kiriting`;
    elRight.textContent = " ";
  } else if (result === randomNumber) {
    elRight.textContent = `Raqamni to'g'ri topdingiz`;
    elWrong.textContent = " ";
  }
});

function refresh() {
  window.location.reload("Refresh");
}
