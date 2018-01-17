function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  return nodes[nodes.length- 1];
}

function increaseRankBy(n) {
  let list = document.querySelector('.ranked-list')
  list.forEach((el) => (el+n));
}
