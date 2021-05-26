const createRains = () => {
  const rains = document.querySelector(".rains");
  const rain = document.querySelector(".rain");

  // 雨粒生成
  const numberOfRains = 50;
  for (let i = 0; i < numberOfRains; i++) {
    rains.appendChild(rain.cloneNode());
  }

  let elements = document.getElementsByClassName("rain");
  // 落ちるスピード
  let min = 5; // 最小値
  let max = 15; // 最大値
  for (let i = 0; i < numberOfRains; i++) {
    let randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    let dropSpeed = "animation: ease-in " + randomNum + "s infinite falldown;";
    elements[i].setAttribute("style", dropSpeed);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  createRains();
});
