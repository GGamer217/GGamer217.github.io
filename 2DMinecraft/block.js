function Block(x, y) {
  this.x = x;
  this.y = y;

  this.width = 30;
  this.height = 30;

  this.display = function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
