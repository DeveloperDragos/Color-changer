const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexValue = "#";
  for (i = 0; i < 6; i++) {
    hexValue += hexArray[getRandomNumber()];
  }

  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hexArray.length);
};
