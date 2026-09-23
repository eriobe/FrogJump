const Input = {
  init() {
    const jumpButton = document.getElementById("jumpButton");
    jumpButton.addEventListener("click", () => Game.jump());
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        Game.jump();
      }
    });
  },
};

Input.init();
