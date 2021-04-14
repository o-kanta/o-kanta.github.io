function navOpen() {
  let height = document.getElementById("nav_height");
  height.style.height = "100%";
  let a_zindex = document.getElementById("open_menu");
  a_zindex.style.zIndex = -1111111111;
  let b_zindex = document.getElementById("close_menu");
  b_zindex.style.zIndex = 1111111111;
}
function navClose() {
  let height = document.getElementById("nav_height");
  height.style.height = "0px";
  let a_zindex = document.getElementById("open_menu");
  a_zindex.style.zIndex = 1111111111;
  let b_zindex = document.getElementById("close_menu");
  b_zindex.style.zIndex = -1111111111;
}
