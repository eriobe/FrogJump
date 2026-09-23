// Startvärdena är avsiktligt dolda från gränssnittet.
// Vi börjar med en enkel hoppmodell.
// Senare bygger vi matematikmodellen här: vinkel, hastighet,
// gravitation, vind och beräkning av bana.

const Physics = {
  initialVerticalSpeed: 360,
  gravity: 900,
  velocityX: 120,

  getInitialVelocity() {
    return { x: this.velocityX, y: -this.initialVerticalSpeed };
  },

  getPosition(start, velocity, time) {
    return {
      x: start.x + velocity.x * time,
      y: start.y + velocity.y * time + 0.5 * this.gravity * time * time,
    };
  },
};
