var time = new Date().getTime();

window.onload = function () {
  var now = new Date().getTime();
  if (now - time <= 1000) {
    setTimeout(load, 1000 - (now - time));
    return;
  } else {
    load();
  }
};

function load() {
  const loading = document.getElementById("loading");
  loading.classList.add("loaded");
}
