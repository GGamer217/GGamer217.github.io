function Block(x, y) {
  this.x = x;
  this.y = y;

  this.width = 50;
  this.height = 50;

  this.display = function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
