const UI = {
  statusElement: document.getElementById("statusText"),
  angleValueElement: document.getElementById("angleValue"),
  speedValueElement: document.getElementById("speedValue"),
  scoreElement: document.getElementById("score"),
  score: 0,

  setStatus(message) {
    this.statusElement.textContent = message;
  },

  addScore() {
    this.score += 1;
    this.scoreElement.textContent = this.score;
  },

  setJumpParameters(angle, speed) {
    this.angleValueElement.textContent = `${angle}°`;
    this.speedValueElement.textContent = `${speed} m/s`;
  },
};
