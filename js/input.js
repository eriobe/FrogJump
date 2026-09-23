const Input = {
  angle: 45,
  startSpeed: 9,
  gravity: 9.82,

  init() {
    const jumpButton = document.getElementById("jumpButton");
    const angleSlider = document.getElementById("angleSlider");
    const speedSlider = document.getElementById("speedSlider");
    const gravityRadios = document.querySelectorAll('input[name="gravity"]');

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

    gravityRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked) {
          this.gravity = Number(radio.value);
        }
      });
    });

    UI.setJumpParameters(this.angle, this.startSpeed);
  },
};

Input.init();
