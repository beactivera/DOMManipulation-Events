//               Traversing The DOM -- moving up and down

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes -- NodeList incl 'text' space between </li><li>
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children elements nodes -- HTML Collection  -- only elements
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// firstChild
val = list.firstChild;  // first node
val = list.firstElementChild;

// lastChild
val = list.lastChild;  // last node
val = list.lastElementChild;

// count child elements
val = list.childElementCount;


// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement  // div class='card-action'></div>

// Get next sibling
val = listItem.nextSibling; // #text -- like in child node
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; //null -- because we took the FIRST list item

console.log(val);