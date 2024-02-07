var pikachuEl = document.getElementById("pikachu");
function moveRight() {
    var currentX = Number((pikachuEl.style.left || "0px").replace("px", ""));
    if (currentX === 360)
        return;
    var nextX = "".concat(currentX + 40, "px");
    pikachuEl.style.left = nextX;
    pikachuEl.style.transform = "scaleX(1)";
}
function moveLeft() {
    var currentX = Number((pikachuEl.style.left || "0px").replace("px", ""));
    if (currentX === 0)
        return;
    var nextX = "".concat(currentX - 40, "px");
    pikachuEl.style.left = nextX;
    pikachuEl.style.transform = "scaleX(-1)";
}
function moveUp() {
    var currentY = Number((pikachuEl.style.top || "0px").replace("px", ""));
    if (currentY === 0)
        return;
    var nextY = "".concat(currentY - 40, "px");
    pikachuEl.style.top = nextY;
}
function moveDown() {
    var currentY = Number((pikachuEl.style.top || "0px").replace("px", ""));
    if (currentY === 360)
        return;
    var nextY = "".concat(currentY + 40, "px");
    pikachuEl.style.top = nextY;
}
function jump() {
    var currentY = Number((pikachuEl.style.top || "0px").replace("px", ""));
    if (currentY === 0)
        return;
    var jumpingY = "".concat(currentY - 20, "px");
    pikachuEl.style.top = jumpingY;
    setTimeout(function () {
        pikachuEl.style.top = "".concat(currentY, "px");
    }, 200);
}
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 32)
        return jump();
    switch (e.key) {
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
    }
});
