var menubtn = document.getElementById("menubtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-350px";

menubtn.onclick = function() {
    if (sideNav.style.right == "-350px") {
        sideNav.style.right = "0";
        menu.src = "./assets/imgs/exit-btn.png";
    } else {
        sideNav.style.right = "-350px";
        menu.src = "./assets/imgs/menu-btn.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
});