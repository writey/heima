const aArr = document.querySelectorAll('nav a');
const tableArr = document.querySelectorAll('section');
const SHOW_CLASS = 'show';
let showIndex = 0;

function hoverEvent() {
  let table;
  const table_selector = this.getAttribute('data-href');
  table = document.querySelector(`.${table_selector}`);
  tableArr[showIndex].classList.remove(SHOW_CLASS);
  table.classList.add(SHOW_CLASS);
  showIndex = this.getAttribute('data-index');
}

function addHoverEvent() {
  for (var i = 0; i < aArr.length; i++) {
    aArr[i].onmouseover = hoverEvent;
  }
}


addHoverEvent();
