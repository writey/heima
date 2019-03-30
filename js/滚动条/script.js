// 1.根据内容的大小，计算滚动条的高度
// 2.让滚动条能够拖拽
// 3.当拖拽滚动条的时候改变内容高度
const BAR_SELECTOR = '.bar';
const CONTENT_SELECTOR = '.content';
const BOX_SELECTOR = '.box';
const content = document.querySelector(CONTENT_SELECTOR);
const bar = document.querySelector(BAR_SELECTOR);
const box = document.querySelector(BOX_SELECTOR);

function getBarHeight() {
  let scale = box.offsetHeight / content.offsetHeight;
  return scale > 1 ? 0 : scale * box.offsetHeight;
}

function setBarHeight() {
  bar.style.height = `${getBarHeight()}px`;
}

function getContentDistance(barDistance) {
  console.log();
  return barDistance / box.offsetHeight * content.offsetHeight;
}

function addBarMoveEvent() {
  bar.onmousedown = (e) => {
    // console.log('down');
    // 鼠标距离盒子顶部的距离
    const maskY = e.pageY - bar.offsetTop;
    document.onmousemove = (e) => {
      // 滚动条移动距离
      let distance;
      // console.log('move');
      // 盒子的位置为鼠标的位置 - maskY
      // console.log(`${e.pageY - maskY}`);

      // 限制滚动条不能超出scroll范围
      distance = e.pageY - maskY < 0 ? 0 : e.pageY - maskY;
      distance = e.pageY - maskY > box.offsetHeight - bar.offsetHeight
        ? box.offsetHeight - bar.offsetHeight : distance;
      // 设置样式
      bar.style.top = `${distance}px`;
      let contentDis = getContentDistance(distance);
      content.style.top = `${-contentDis}px`;
    };
  };
  document.onmouseup = () => {
    // console.log('up');
    document.onmousemove = null;
  };
}

(function () {
  setBarHeight();
  addBarMoveEvent();
}());
