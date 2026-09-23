const Input = {
  angle: 45,
  startSpeed: 9,

  init() {
    const jumpButton = document.getElementById("jumpButton");
    const angleSlider = document.getElementById("angleSlider");
    const speedSlider = document.getElementById("speedSlider");

    jumpButton.addEventListener("click", () => Game.jump());
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        Game.jump();
      }
    });

    angleSlider.addEventListener("input", () => {
      this.angle = Number(angleSlider.value);
      UI.setJumpParameters(this.angle, this.startSpeed);
    });

    speedSlider.addEventListener("input", () => {
      this.startSpeed = Number(speedSlider.value);
      UI.setJumpParameters(this.angle, this.startSpeed);
    });

    UI.setJumpParameters(this.angle, this.startSpeed);
  },
};

Input.init();
