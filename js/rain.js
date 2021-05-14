const createRains = () => {
  const rains = document.querySelector(".rains");
  const rain = document.querySelector(".rain");
  const numberOfRains = 40;
  for (let i = 0; i < numberOfRains; i++) {
    rains.appendChild(rain.cloneNode());
  }
  let elements = document.getElementsByClassName("rain");
  let min = 1; // 最小値
  let max = 30; // 最大値
  for (let i = 0; i < numberOfRains; i++) {
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    let dropSpeed = "animation: falldown " + randomNum + "s infinite;";
    elements[i].setAttribute("style", dropSpeed);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  createRains();
});
