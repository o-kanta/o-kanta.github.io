const time = new Date().getTime();

const loadingAnimation = () => {
  const now = new Date().getTime();
  if (now - time <= 500) {
    setTimeout(load, 500 - (now - time));
    return;
  } else {
    load();
  }
  const loading = document.getElementById("loading");
  loading.classList.add("loaded");
};

function load() {
  const loading = document.getElementById("loading");
  loading.classList.add("loaded");
}

document.addEventListener("DOMContentLoaded", function () {
  loadingAnimation();
});
