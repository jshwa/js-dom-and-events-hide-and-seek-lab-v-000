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
  let list = document.querySelectorAll('.ranked-list')
  list.forEach(function (el) {
    el.innerHTML = (parseInt(el.innerHTML)+n);
  })
}
