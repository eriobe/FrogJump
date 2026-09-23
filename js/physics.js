const Physics = {
  defaultGravity: 9.82,
  defaultAirResistance: 0,
  airResistanceWhenEnabled: 0.35,
  pixelsPerMeter: 60,

  getInitialVelocity(angleDegrees, startSpeed) {
    const angle = (angleDegrees * Math.PI) / 180;
    const speed = startSpeed * this.pixelsPerMeter;

    return {
      x: speed * Math.cos(angle),
      y: -speed * Math.sin(angle),
    };
  },

  getPosition(
    start,
    velocity,
    time,
    gravity = this.defaultGravity,
    airResistance = this.defaultAirResistance,
  ) {
    const gravityPixels = gravity * this.pixelsPerMeter;

    if (airResistance <= 0) {
      return {
        x: start.x + velocity.x * time,
        y: start.y + velocity.y * time + 0.5 * gravityPixels * time * time,
      };
    }

    // Enkel linjär luftmotståndsmodell: a_luft = -k * v.
    const k = airResistance;
    const damping = Math.exp(-k * time);
    const oneMinusDamping = 1 - damping;

    return {
      x: start.x + (velocity.x / k) * oneMinusDamping,
      y:
        start.y +
        ((velocity.y - gravityPixels / k) / k) * oneMinusDamping +
        (gravityPixels / k) * time,
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
