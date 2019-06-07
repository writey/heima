(function () {
  // const map = document.querySelector('#map');
  // 用于存储上一个方块
  let mark;
  function Box(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.backgroundColor = options.backgroundColor || 'red';
    // this.render();
  }

  function remove() {
    if (mark) mark.parentNode.removeChild(mark);
  }

  // 渲染
  Box.prototype.render = function render(map) {
    remove();
    this.box = document.createElement('div');
    mark = this.box;
    const position = 'absolute';
    map.appendChild(this.box);
    this.box.style.width = `${this.width}px`;
    this.box.style.height = `${this.height}px`;
    this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
    this.box.style.left = `${this.x}px`;
    this.box.style.top = `${this.y}px`;
    this.box.style.backgroundColor = this.backgroundColor;
    this.box.style.position = position;
  };

  window.Box = Box;
}());

// const box = new Box();
// const box2 = new Box();
