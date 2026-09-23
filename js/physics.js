const Physics = {
  gravity: 9.81,
  pixelsPerMeter: 60,

  getInitialVelocity(angleDegrees, startSpeed) {
    const angle = (angleDegrees * Math.PI) / 180;
    const speed = startSpeed * this.pixelsPerMeter;

    return {
      x: speed * Math.cos(angle),
      y: -speed * Math.sin(angle),
    };
  },

  getPosition(start, velocity, time) {
    return {
      x: start.x + velocity.x * time,
      y:
        start.y + velocity.y * time +
        0.5 * this.gravity * this.pixelsPerMeter * time * time,
    };
  },

  hasLandedOnTarget(previousPosition, currentPosition, target) {
    const frogBottomOffset = 38;
    const frogHalfWidth = 32;
    const targetTop = target.y - target.radius * 0.72;
    const landingY = targetTop - frogBottomOffset;
    const horizontalOverlap =
      Math.abs(currentPosition.x - target.x) <=
      target.radius + frogHalfWidth;
    const crossedLandingSurface =
      previousPosition.y < landingY && currentPosition.y >= landingY;
    const descending = currentPosition.y > previousPosition.y;

    return descending && crossedLandingSurface && horizontalOverlap;
  },
};
