const UI = {
  statusElement: document.getElementById("statusText"),
  setStatus(message) {
    this.statusElement.textContent = message;
  },
};
