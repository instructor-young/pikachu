const pikachuEl = document.getElementById("pikachu") as HTMLElement;

function moveRight() {
  const currentX = Number((pikachuEl.style.left || "0px").replace("px", ""));
  if (currentX === 360) return;

  const nextX = `${currentX + 40}px`;
  pikachuEl.style.left = nextX;
  pikachuEl.style.transform = "scaleX(1)";
}

function moveLeft() {
  const currentX = Number((pikachuEl.style.left || "0px").replace("px", ""));
  if (currentX === 0) return;

  const nextX = `${currentX - 40}px`;
  pikachuEl.style.left = nextX;
  pikachuEl.style.transform = "scaleX(-1)";
}

function moveUp() {
  const currentY = Number((pikachuEl.style.top || "0px").replace("px", ""));
  if (currentY === 0) return;

  const nextY = `${currentY - 40}px`;
  pikachuEl.style.top = nextY;
}

function moveDown() {
  const currentY = Number((pikachuEl.style.top || "0px").replace("px", ""));
  if (currentY === 360) return;

  const nextY = `${currentY + 40}px`;
  pikachuEl.style.top = nextY;
}

function jump() {
  const currentY = Number((pikachuEl.style.top || "0px").replace("px", ""));
  if (currentY === 0) return;

  const jumpingY = `${currentY - 20}px`;
  pikachuEl.style.top = jumpingY;

  setTimeout(() => {
    pikachuEl.style.top = `${currentY}px`;
  }, 200);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) return jump();

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
