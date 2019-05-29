//           DOM Selectors For a Sinle Elements

// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title')).id;

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';  // everything what include the content, without unclidung CSS style
taskTitle.innerText = 'My Tasks'; // including CSS style
taskTitle.innerHTML = '<span style="color:red">Task List</span>'; 


// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // if it's more than one h5 on web it gives us only the first one

document.querySelector('li').style.color = 'red'; // only first one
// nasted
document.querySelector('ul li').style.color = 'blue';

// the last the one 'li' element
document.querySelector('li:last-child').style.color = 'red';
// the certain one
document.querySelector('li:nth-child(3)').style.color = 'yellow';
// change content
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
