const UI = {
  statusElement: document.getElementById("statusText"),
  angleValueElement: document.getElementById("angleValue"),
  speedValueElement: document.getElementById("speedValue"),

  setStatus(message) {
    this.statusElement.textContent = message;
  },

  setJumpParameters(angle, speed) {
    this.angleValueElement.textContent = `${angle}°`;
    this.speedValueElement.textContent = `${speed} m/s`;
  },
};
