const container = document.querySelector('#container');
const boxArr = [];

for (var i = 0; i < 10; i++) {
  const r = Tools.getRandom(0, 255);
  const g = Tools.getRandom(0, 255);
  const b = Tools.getRandom(0, 255);
  const div = new Box(container, {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  });
  boxArr.push(div);
}

setInterval(random, 500);

function random() {
  for (var i = 0; i < boxArr.length; i++) {
    boxArr[i].random();
  }
}

random();
