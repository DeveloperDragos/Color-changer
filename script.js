const colors = ["yellow", "blue", "rgba(245,100,300,0.8)", "#f2f3f3"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
