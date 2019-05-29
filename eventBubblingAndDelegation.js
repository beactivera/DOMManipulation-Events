//               Event Bubbling and Delegation

//EVENT BUBBLING

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card content');
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function(){
    console.log('col');
});

//EVENT DELEGATION

//only for the first one from List Item
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

function deleteItem(){
    console.log(`delete item`);
}

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // if(e.target.className === 'fa fa-remove'){
    //     console.log(`delete item`);
    // }
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log(`delete item`);
    // }
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(`delete item`);
        e.target.parentElement.parentElement.remove();
        // e.target - <i></i>
        // e.target.parentElement - <a></a>
        // e.target.parentElement.parentElement - <li></li>
    }
}

