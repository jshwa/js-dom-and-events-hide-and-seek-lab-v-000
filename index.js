function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelectorAll('#grand-node');
}

function increaseRankBy(n) {
  let list = document.querySelector('.ranked-list')
  list.forEach((el) => (el+n));
}
