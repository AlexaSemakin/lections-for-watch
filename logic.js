function st(){
document.getElementById("img").style.width =  500 + "%";
}

function addchange_zoom(id) {
  document.getElementById("img").style.width =
    parseInt(document.getElementById("img").style.width) + 30 + "%";
}
function eggchange_zoom(id) {
  document.getElementById("img").style.width =
    parseInt(document.getElementById("img").style.width) - 30 + "%";
}
