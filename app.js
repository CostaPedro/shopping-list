$(document).ready(function(){

var state = {
  items: ['apples','oranges','milk','bread']
};



// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

// Render functions
var renderList = function(state) {
	
    var itemsHTML = state.items.map(function(item) {
        return '<li>' +
    '<span class="shopping-item js-shopping-item">' + item + '</span>' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
       '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>';
    });
    $('.shopping-list').html(itemsHTML);
};

// Event listeners

// Adding Items
$("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    console.log('working-adding');
    addItem(state, $('#shopping-list-entry').val());
    $('li').remove();
    renderList(state);
    console.log(state.items);

});

// Deleting Items
	$('.shopping-list').on('click','.shopping-item-delete', function(event) {
    event.preventDefault();
    console.log('working-delete');
    var itemToDelete = ($(event.target).closest('li').children('.shopping-item').html());
    console.log(itemToDelete);
    var index = state.items.indexOf(itemToDelete);
    console.log(index);
    state.items.splice(index,1);
    console.log(state.items);
    $('li').remove();
    renderList(state);
 
});

//Crossing out items
	$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    event.preventDefault();
    console.log('working-toggle');
    ($(event.target).closest('li').children('.shopping-item')).toggleClass("shopping-item__checked");
    	
});

});











