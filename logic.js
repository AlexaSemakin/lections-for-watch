function st(){
document.getElementById("img").style.width =  300 + "%";
}

function addchange_zoom(id) {
  document.getElementById("img").style.width =
    parseInt(document.getElementById("img").style.width) + 50 + "%";
}
function eggchange_zoom(id) {
  document.getElementById("img").style.width =
    parseInt(document.getElementById("img").style.width) - 30 + "%";
}
