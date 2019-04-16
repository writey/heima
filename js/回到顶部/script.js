const CD_TOP_SELECTOR = '.cd-top';
const header = document.querySelector('header');
const b = document.querySelector('body');
const h = document.querySelector('html');
const cdTop = document.querySelector(CD_TOP_SELECTOR);

cdTop.onclick = () => {
  $('html').animate({ scrollTop: 0 }, 500);
};

b.onscroll = () => {
  if (h.scrollTop >= 100) {
    // console.log(h.scrollTop);
    header.classList.add('head-min');
  } else {
    header.classList.remove('head-min');
  }
};
