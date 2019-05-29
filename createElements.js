//                             Creating Elements

// Create element
const li = document.createElement('li');

// Add class
li.className = 'collectio-item';

// add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World')); // put sth inside sth

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.colletion').appendChild(li);


console.log(li);