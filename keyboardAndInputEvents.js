//                 Keyboard and Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = ''; 

// Submit
//form.addEventListener('submit', runEvent);

// function runEvent(){
//     console.log(`EVENT TYPE: ${e.type}`);

//     // Get input value
//     console.log(taskInput.value);

//     e.preventDefault();
// }

// Keydown - all the time it's following what you are typing
taskInput.addEventListener('keydown', runEvent);
// Keyup  - it will show up the event every time when you key up
taskInput.addEventListener('keyup', runEvent);
// Keypress
taskInput.addEventListener('keypress', runEvent);
// Focus  - click inside input
taskInput.addEventListener('focus', runEvent);
// Blur - click outside the input
taskInput.addEventListener('blur', runEvent);
// Cut - option 'Cut' in the browser or Ctrl+X
taskInput.addEventListener('cut', runEvent);
// Paste
taskInput.addEventListener('paste', runEvent);

// Input - everything what we are doing with this event
taskInput.addEventListener('input', runEvent);


function runEvent(){
    console.log(`EVENT TYPE: ${e.type}`);  // every letter is an other event

    console.log(e.target.value);

    //heading.innerText = e.target.value;
}