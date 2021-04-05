function navOpen() {
  var height = document.getElementById("nav_height");
  height.style.height = "100%";
  var a_zindex = document.getElementById("open_menu");
  a_zindex.style.zIndex = -1111111111;
  var b_zindex = document.getElementById("close_menu");
  b_zindex.style.zIndex = 1111111111;
}
function navClose() {
  var height = document.getElementById("nav_height");
  height.style.height = "0px";
  var a_zindex = document.getElementById("open_menu");
  a_zindex.style.zIndex = 1111111111;
  var b_zindex = document.getElementById("close_menu");
  b_zindex.style.zIndex = -1111111111;
}
