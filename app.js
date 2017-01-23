$(document).ready(function(){

var state = {
  items: [{
    iName:'apples',
    checked:false},
    {
    iName:'oranges',
    checked:false},
    {
    iName:'milk',
    checked:true},
    {
    iName:'bread',
    checked:false}]
};



// State modification functions
var addItem = function(state, item) {
    state.items.push({iName:item,checked:false});
    console.log(state.items);

};

// Item getters

function findId(name) {
    for (var i = 0; i < state.items.length; i++) {
    if (state.items[i].iName === name ) return i
    };
    return -1    
    };

// Render functions
var renderList = function(state) {
	


    var itemsHTML = state.items.map(function(item) {
    
    console.log(item);
    if (item.checked === false){
    return '<li>' +
    '<span class="shopping-item js-shopping-item">' + item.iName  + '</span>' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
       '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
    '</li>'};

    if (item.checked ===true){
    return '<li>' +
    '<span class="shopping-item js-shopping-item shopping-item__checked">' + item.iName  + '</span>' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
       '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
    '</li>'}; 
       
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
    $("#shopping-list-entry").attr("placeholder", "e.g., broccoli").val("").focus().blur();
    console.log(state.items);

});



// Deleting Items
	$('.shopping-list').on('click','.shopping-item-delete', function(event) {
    event.preventDefault();
    console.log('working-delete');
    
    var itemToDelete = ($(event.target).closest('li').children('.shopping-item').html());
    console.log(itemToDelete);
    
    findId(itemToDelete);

    state.items.splice(findId(itemToDelete),1);
    
    console.log(state.items.checked);
    
    $('li').remove();
    
    renderList(state);
 
});

//Crossing out items
 	
    $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
    event.preventDefault();
    console.log('working-toggle');
    var itemToCross = ($(event.target).closest('li').children('.shopping-item').html());
    console.log(itemToCross);

    state.items[findId(itemToCross)].checked = !state.items[findId(itemToCross)].checked

    console.log(state.items);

    $('li').remove();
    
    renderList(state);

});

   
    

});











