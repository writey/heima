function Box(parent, options) {
  options = options || {};
  this.parent = parent || {};
  this.backgroundColor = options.backgroundColor || 'red';
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.x = options.x || 0;
  this.y = options.y || 0;

  this.box = document.createElement('div');
  parent.appendChild(this.box);

  this.init();
}

Box.prototype.init = function init() {
  const div = this.box;
  div.style.backgroundColor = this.backgroundColor;
  div.style.width = `${this.width}px`;
  div.style.height = `${this.height}px`;
  div.style.left = `${this.x}px`;
  div.style.top = `${this.y}px`;
  div.style.position = 'absolute';
};

Box.prototype.random = function random() {
  const x = Tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
  const y = Tools.getRandom(0, this.parent.offsetHeight / this.height - 1) * this.height;
  this.box.style.left = `${x}px`;
  this.box.style.top = `${y}px`;
};
