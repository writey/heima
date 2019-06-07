(function () {
  const position = 'absolute';
  let elements = [];
  function Snake(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    // 移动方向
    this.direction = options.direction || 'right';

    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'blue' },
      { x: 1, y: 2, color: 'blue' },
    ];
  }

  Snake.prototype.render = function (map) {
    remove();
    for (let i = 0, length = this.body.length; i < length; i++) {
      const obj = this.body[i];
      const div = document.createElement('div');
      map.appendChild(div);
      div.style.position = position;
      div.style.left = `${obj.x * this.width}px`;
      div.style.top = `${obj.y * this.height}px`;
      div.style.width = `${this.width}px`;
      div.style.height = `${this.height}px`;
      div.style.backgroundColor = obj.color;
      elements.push(div);
    }
  };

  Snake.prototype.move = function (box, map) {
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }

    var head = this.body[0];
    switch (this.direction) {
      case 'right':
        head.x += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'top':
        head.y -= 1;
        break;
      case 'bottom':
        head.y += 1;
        break;
    }
    // 判断蛇头是否和食物重叠
    if (head.x * this.width === box.x && head.y * this.height === box.y) {
      // 重新渲染食物，增加蛇节
      box.render(map);
      let last = this.body[this.body.length - 1];
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      });
    }
  };

  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
      elements.splice(i, 1);
    }
  }

  window.Snake = Snake;
}());

// const snake = new Snake();
// snake.render(document.querySelector('#map'));
