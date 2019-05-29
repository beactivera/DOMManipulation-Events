//               DOM Selectors For Multiple Elements

// document.getElementsByClassName -- HtmlCollection
   const items = document.getElementsByClassName('collection-items');
   console.log(items);
   console.log(items[0]);
   items[0].style.color = 'red';
   items[3].textContent = 'Hello';

   const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

   console.log(listItems);

// document.get ElementsByTagName -- HtmlCollection
    const lis = document.getElementsByTagName('colletion-item');
    console.log(lis);
    console.log(lis[0]);
    lis[0].style.color = 'red';
    lis[3].textContent = 'Hello';

// Conver HTML Collection into array
    lis = Array.from(lis);

    lis.reverse();

    lis.forEach(function(li){
        console.log(li.className);
        li.textContent = `${index} : Hello`;
    });


// document.querySelectorAll -- NodeList
   const items = document.querySelectorAll('ul.colletion li.colletion-item');

   // we don't have to convert this in array because it is NodeList
   items.forEach(function(item, index){   
     item.textContent = `${index} : Hello`;
   });

   const liOdd = document.querySelectorAll('li:nth-child(odd)');
   const liEven = document.querySelectorAll('li:nth-child(even)');

   liOdd.forEach(function(li, index){   
        li.style.background = '#ccc';
  });

   for(let i = 0; i < liEven.length; i++){
       liEven[i].style.bacgroung = '#f4f4f4';
   }

   console.log('items');