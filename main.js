/*
  The Goal:
  Build a To Do list application that allows you
  to add a new entry, edit an existing entry, and
  remove an existing entry.
 */

// Step 1 - Select and store the tbody HTML Element.
// INSIGHT: We'll be storing the item entires in the
// tbody. Storing this HTMLElement will give us better
// access to add new items.
var item = document.querySelector('#toDoItems');


// Step 2 - Select and store the item template HTML Element.
// INSIGHT: HTML templates are handy for keeping your
// HTML out of your JavaScript. This makes portability easier.
var itemTemplate = document.getElementById("itemTemplate");
var node = document.querySelector('#tablenew');

// Step 3 - Select and store the following HTML Elements:
// INSIGHT: This form will give the user the ability to
// provide information about a new to do item.
// Step 3a - The Item Name field
var itemName = document.querySelector('#itemName');

// Step 3b - The Due Date field
var dueDate = document.querySelector('#dueDate');

// Step 3c - The 'Create New Item' button for adding a new item
// INSIGHT: We'll listen to the click event on this
// button. That should tell us the user is ready to
// add the information to a new item.

var createButton = document.querySelector('#addNewItem');

//console.log(item+" "+itemTemplate+" "+itemName+" "+dueDate+" "+createButton);

// Step 4 - Add a click event listener to the HTML Element
// you stored in Step 3c (should've been the 'Create New Item')
// button.
createButton.addEventListener("click",function(event)
  // Step 4a - Check if item name is blank
  {
    
    if(document.querySelector('#itemName').value == null){
    // Step 4b - Alert the user they need to enter a name
    alert("enter item first");
      
    // Step 4c - Return false to exit the event listener
      return false;
      }
    
    
  // Step 4d - Uncomment the next line to store the template content:
   let content = itemTemplate.content;

  // Step 4e - Uncomment the next line to import the template content
  // into a new node:
   let newItemRow = document.importNode(content, true);

  // Step 4f - Using DOM walking, access the item entry cell
  // and store the current item name value
    var currentitemname = document.querySelector("input[name]");
    

  // Step 4f - Using DOM walking, access the item due date cell
  // and store the current due date value
    var currentduedate = document.querySelector('input[type]');
    //console.log(currentduedate);

  // Step 4g - Using DOM walking, access the item delete button
  // and make the onclick property equal to a function definition
  // named removeItem
      var delete1 = document.querySelector('#delete');
      //console.log(delete1);
      //delete1.onclick = removeItem();
     // delete1.addEventListener('click',removeItem);
  // Step 4h- Using DOM walking, access the item edit button
  // and make the onclick property equal to a function definition
  // named editItem
    var edit = document.querySelector('button.item-edit');
       // edit.onclick = editItem();
  // Step 4i - Reset the item name field value to nothing
      currentitemname.textContent = " ";

  // Step 4j - Reset the due date field value to nothing
      currentduedate.textContent = " ";

  // Step 4k - Prepend the new item row to the to do items list
  // INSIGHT: We're prepending as we want new items to go to the
  // top. If you want them to be in reverse, then you will need
  // to append them instead.
    var newRow   = item.insertRow(item.rows.length);

  // Insert a cell in the row at index 0
  var newCell  = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
   var cell3 =newRow.insertCell(2);
  // Append a text node to the cell
  
  var newItem  = document.createTextNode(currentitemname.value);
  var newdueDate = document.createTextNode(currentduedate.value);
  //var template =document.importNode();
  //var newbutton = document.write(itemTemplate);
  cell2.appendChild(newdueDate);
  newCell.appendChild(newItem);
   var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    }, false);
  cell3.appendChild(itemTemplate.content.cloneNode(true));
  //cell3.appendChild(removeTask);
  
})


// Step 5 - Create a new function called 'removeItem'. You will need
// to capture the event in the parameter.
function removeItem(event){
    console.log(event);

  // Step 5a - Access the closest parent tr HTML element
  // and remove it
  // INSIGHT: .closest() is a handy method that will move up the DOM
  // tree and attempt to find the closest ancestor that matches the
  // passed selector.

  var remove = document.querySelector("#tablenew");
  


}

// Step 6 - Create a new function called 'editItem'. You will need
// to capture the event in the parameter.
function editItem(){
  // Step 6a - Using DOM walking:
  // First find the closest tr tag.
  // Next, find an item entry that is a child of the tr tag.
  // INSIGHT: DOM walking is the act of moving up and down through
  // ancestors and children of the DOM. We can use methods like
  // .closest() and .querySelector() to do this efficiently.
  // Store the result in a variable


  // Step 6b - Using the .setAttribute() method, set the attribute
  // 'contenteditable' to true
  // INSIGHT: Content Editable is an attribute introduced in HTML 5
  // that allows regular non-field based HTML elements to have their
  // text edited inline. This is a convenient feature that is utilized
  // by many online WYSIWYG editors like TinyMCE and CKEditor.


  // Step 6c - Trigger focus on the element


  // Step 6d - Create an eventlistener on the blur event

    // Step 6e - Remove the attribute 'contenteditable'
    // INSIGHT: .addAttribute() and .removeAttribute() add
    // and remove attributes applied to an HTML Element.


}


/*
  Step 7 - TAKE IT FURTHER
 */
// Step 7a - Using CSS you learned in your first semester
// style the To Do list to make it nicer than the default
// Bootstrap stylings.

// Step 7b- Hide the 'Create New Item' form.

// Step 7c - Add a button that toggle the 'Create New Item's'
// form visibility.

// Step 7d - Validate the date and alert the user if it is empty.

// Step 7e - Create a way for the user to edit the date:
// INSIGHT: This will take some thought but will demonstrate
// your understanding of JavaScript.

// BONUS: Use prototyping, objects, storage solutions, frameworks,
// and/or date plugins to demonstrate your knowledge and outside
// learning.