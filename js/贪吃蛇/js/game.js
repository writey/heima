
(function init() {
  let that;
  function Game(map) {
    this.box = new Box();
    this.snake = new Snake();
    this.map = map || {};
    that = this;
  }

  Game.prototype.start = function start() {
    this.box.render(this.map);
    this.snake.render(this.map);
    runSnake();
    bindKey();
  };

  function runSnake() {
    var maxX = that.map.offsetWidth / that.snake.width;
    var maxY = that.map.offsetHeight / that.snake.height;
    var timerId = setInterval(function () {
      this.snake.move(this.box, this.map);
      this.snake.render(this.map);
      var headX = this.snake.body[0].x;
      var headY = this.snake.body[0].y;
      if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
        alert('game over');
        clearInterval(timerId);
      }
    }.bind(that), 150);
  }

  function bindKey() {
    document.addEventListener('keydown', function (e) {
      // console.log(e.keyCode);
      // left 37
      // up 38
      // right 39
      // bottom 40
      var direction = this.snake.direction;
      switch (e.keyCode) {
        case 37:
          if (direction === 'left' || direction === 'right') break;
          this.snake.direction = 'left';
          break;
        case 38:
          if (direction === 'top' || direction === 'bottom') break;
          this.snake.direction = 'top';
          break;
        case 39:
          if (direction === 'left' || direction === 'right') break;
          this.snake.direction = 'right';
          break;
        case 40:
          if (direction === 'top' || direction === 'bottom') break;
          this.snake.direction = 'bottom';
          break;
      }
    }.bind(that), false);
  }

  window.Game = Game;
}());
