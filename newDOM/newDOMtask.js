var newitme = document.querySelector('#header-title');
console.log(newitme.parentNode);
newitme.parentNode.style.backgroundColor ='green';
console.log(newitme.parentNode.parentNode.parentNode);

console.log(newitme);
newitme.parentElement.style.backgroundColor ='green';

console.log(newitme.children);
console.log(newitme.children[1]);
newitme.children[1].style.backgroundColor ='green';

console.log(newitme.childNodes[3]);



console.log(newitme.firstChild);

console.log(newitme.firstElementChild);
newitme.firstElementChild.textContent = 'Hello 2'

console.log(newitme.lastChild);

console.log(newitme.lastElementChild);
newitme.lastElementChild.textContent = 'Hello 3'

console.log(newitme.nextSibling);

console.log(newitme.nextElementSibling);

console.log(newitme.previousElementSibling);

console.log(newitme.previousSibling);

var newdiv = document.createElement('div')
newdiv.className = 'goodmorning';
newdiv.id = 'day';
newdiv.setAttribute('div','newday');
var mydivtext = document.createTextNode('hello world')
newdiv.appendChild(mydivtext);
console.log(newdiv);

var newchild =document.createElement('li')
newchild.createChild='yashD';

var child = document.createTextNode('hello sir');
newchild.appendChild(child);

console.log(newchild);
