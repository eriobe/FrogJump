const GameMap = {
  canvas: document.getElementById("gameCanvas"),
  ctx: document.getElementById("gameCanvas").getContext("2d"),
  width: 1100,
  height: 620,
  groundY: 535,
  frogStart: { x: 140, y: 505 },
  target: { x: 770, y: 430, radius: 48 },

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, "#b9ead0");
    sky.addColorStop(0.62, "#78b989");
    sky.addColorStop(1, "#4d875e");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fillStyle = "rgba(28,91,57,.18)";
    for (let x = 40; x < this.width; x += 150) {
      ctx.beginPath();
      ctx.ellipse(x, 200, 90, 150, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = "rgba(25,86,52,.45)";
    ctx.lineWidth = 8;
    for (let x = 35; x < this.width; x += 175) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.quadraticCurveTo(x - 20, 95, x + 14, 185);
      ctx.stroke();
    }
    ctx.fillStyle = "#39714d";
    ctx.fillRect(0, this.groundY, this.width, this.height - this.groundY);
    ctx.strokeStyle = "#2d6846";
    ctx.lineWidth = 5;
    for (let x = 0; x < this.width; x += 26) {
      ctx.beginPath();
      ctx.moveTo(x, this.groundY + 8);
      ctx.lineTo(x + 8, this.groundY - 6);
      ctx.moveTo(x + 9, this.groundY + 8);
      ctx.lineTo(x + 3, this.groundY - 4);
      ctx.stroke();
    }
    this.drawTree(70, 220, 1.05);
    this.drawTree(1000, 190, 1.2);
    this.drawTarget();
  },

  drawTree(x, y, scale) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = "#74492c";
    ctx.fillRect(-16, 45, 32, 280);
    ctx.fillStyle = "#2f7548";
    const leaves = [
      [-60, 40, 66],
      [55, 35, 72],
      [0, -5, 78],
      [-18, 80, 66],
      [18, 85, 66],
    ];
    for (const [lx, ly, r] of leaves) {
      ctx.beginPath();
      ctx.arc(lx, ly, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  },

  drawTarget() {
    const ctx = this.ctx,
      { x, y, radius } = this.target;
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = "#4d9c59";
    ctx.beginPath();
    ctx.ellipse(0, 0, radius, radius * 0.72, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#2c6d39";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#e7f59b";
    ctx.beginPath();
    ctx.moveTo(0, -3);
    ctx.lineTo(radius * 0.72, -radius * 0.48);
    ctx.lineTo(radius * 0.58, radius * 0.38);
    ctx.lineTo(-radius * 0.42, radius * 0.5);
    ctx.lineTo(-radius * 0.75, -radius * 0.16);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },

  drawFrog(position) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(position.x, position.y);
    ctx.fillStyle = "#4ca861";
    ctx.beginPath();
    ctx.ellipse(0, 0, 32, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, -18, 29, 23, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e8f5bd";
    ctx.beginPath();
    ctx.arc(-12, -37, 8, 0, Math.PI * 2);
    ctx.arc(12, -37, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#1b3a26";
    ctx.beginPath();
    ctx.arc(-12, -37, 3, 0, Math.PI * 2);
    ctx.arc(12, -37, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#3c8f52";
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(-20, 10);
    ctx.lineTo(-42, 28);
    ctx.moveTo(20, 10);
    ctx.lineTo(42, 28);
    ctx.stroke();
    ctx.strokeStyle = "#245c35";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -10, 12, 0.15, Math.PI - 0.15);
    ctx.stroke();
    ctx.restore();
  },
};
