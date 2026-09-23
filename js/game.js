const Game = {
  frog: { x: GameMap.frogStart.x, y: GameMap.frogStart.y },
  velocity: { x: 0, y: 0 },
  isJumping: false,
  jumpTime: 0,
  lastTimestamp: 0,

  start() {
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  },

  jump() {
    if (this.isJumping) return;
    this.frog = { ...GameMap.frogStart };
    this.velocity = Physics.getInitialVelocity(Input.angle, Input.startSpeed);
    this.jumpTime = 0;
    this.isJumping = true;
    UI.setStatus("Grodan hoppar...");
  },

  update(deltaTime) {
    if (!this.isJumping) return;

    const previousPosition = { ...this.frog };
    this.jumpTime += deltaTime;
    this.frog = Physics.getPosition(
      GameMap.frogStart,
      this.velocity,
      this.jumpTime,
    );

    if (
      Physics.hasLandedOnTarget(
        previousPosition,
        this.frog,
        GameMap.target,
      )
    ) {
      this.frog.y = GameMap.target.y - GameMap.target.radius * 0.72 - 38;
      this.isJumping = false;
      UI.addScore();
      UI.setStatus("Bra! Grodan landade på näckrosen.");
      return;
    }

    if (this.frog.y >= GameMap.frogStart.y) {
      this.frog.y = GameMap.frogStart.y;
      this.frog.x = Math.min(this.frog.x, GameMap.width - 40);
      this.isJumping = false;
      UI.setStatus("Hoppet klart. Försök igen!");
    }
  },

  render() {
    GameMap.draw();
    GameMap.drawFrog(this.frog);
  },

  loop(timestamp) {
    if (!this.lastTimestamp) this.lastTimestamp = timestamp;
    const deltaTime = Math.min((timestamp - this.lastTimestamp) / 1000, 0.033);
    this.lastTimestamp = timestamp;
    this.update(deltaTime);
    this.render();
    requestAnimationFrame(this.loop.bind(this));
  },
};

Game.start();
