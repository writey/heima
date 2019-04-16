const aArr = document.querySelectorAll('nav a');
const tableArr = document.querySelectorAll('section');
const SHOW_CLASS = 'show';
let showIndex = 0;

function hoverEvent() {
  const table_selector = this.getAttribute('data-href');
  const table = document.querySelector(`.${table_selector}`);
  tableArr[showIndex].classList.remove(SHOW_CLASS);
  table.classList.add(SHOW_CLASS);
  showIndex = this.getAttribute('data-index');
}

function addHoverEvent() {
  for (let i = 0; i < aArr.length; i++) {
    aArr[i].onmouseover = hoverEvent;
  }
}

addHoverEvent();
