// 1 动态生成序号
// 2 点击序号切换图片
// 3 上一张下一张按钮
// 4 自动轮播

const LIARR_SELECTOR = '.screen li';
const OL_SELECTOR = '.number ol';
const UL_SELECTOR = '.screen ul';
const LEFT_BTN_SELECTOR = '.btn-left';
const RIGHT_BTN_SELECTOR = '.btn-right';
const CURRENT_CLASS = 'current'
const liArr = document.querySelectorAll(LIARR_SELECTOR);
const ol = document.querySelector(OL_SELECTOR);
const ul = document.querySelector(UL_SELECTOR);
const count = liArr.length;
let index = 0;
// 动态生成 ol序号
function initOl() {
  let count = liArr.length;
  while (count--) {
    let li = document.createElement('li');
    li.innerText = liArr.length - count;
    li.setAttribute('data-index', liArr.length - count - 1);
    ol.appendChild(li);
  }
  ol.children[0].classList.add(CURRENT_CLASS);
}

function clearCurrentCss() {
  let current = document.querySelector('.current');
  current.classList.remove(CURRENT_CLASS);
}

function moveUl(moveNode) {
  // if (index >= count) {
  //   ul.style.left = '0px';
  //   index = 1;
  // }
  let moveIndex = parseInt(moveNode.getAttribute('data-index'));
  index = moveIndex;
  ul.style.left = `${- moveIndex * 600}px`;
  clearCurrentCss();
  moveNode.classList.add(CURRENT_CLASS);
}

function moveAnimate(index) {
  // index++;
  ul.style.left = `${- index * 600}px`;
}

function moveUlByIndex(nextIndex) {
  // nextIndex = nextIndex >= count ? 1 : nextIndex;
  // nextIndex = nextIndex <= 0 ? count - 2 : nextIndex;
  const moveNode = document.querySelector(`li[data-index="${nextIndex}"]`);
  moveUl(moveNode);
}

function liClick() {
  moveUl(this);
}

// 点击序号切换图片
function addLiClickEvent() {
  for (var li in ol.children) {
    ol.children[li].onclick = liClick;
  }
}

function addInputClickEvent() {
  const btn_left = document.querySelector(LEFT_BTN_SELECTOR);
  const btn_right = document.querySelector(RIGHT_BTN_SELECTOR);
  btn_left.onclick = () => {
    let nextIndex = index - 1 < 0 ? count - 1 : index - 1;
    moveUlByIndex(nextIndex);
  };
  btn_right.onclick = () => {
    let nextIndex = index + 1 < count ? index + 1 : 0;
    moveUlByIndex(nextIndex);
  };
}

function cloneImg() {
  let clone = ul.children[0].cloneNode(true);
  ul.appendChild(clone);
}

function autoNext() {
  let moveIndex = index + 1 > count - 1 ? 0 : index + 1;
  moveUlByIndex(moveIndex);
}

initOl();
addLiClickEvent();
addInputClickEvent();
// cloneImg();
setInterval(autoNext, 1000);
