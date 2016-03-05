//Instructions:
// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.


//create new cards
document.getElementById("create").addEventListener("click", addCard); 

//define the function of adding new card
function addCard() {
	var createLi = document.createElement("li"); //create a new <li>
	var createLabel =document.createElement("label"); //create a new <label>
	var createDeleteButton = document.createElement("button"); //create a new <button>
	createLabel.textContent = document.getElementById("input").value; //capture the input value and give it to the new label
	createDeleteButton.textContent = "Delete"; //define new button name "Delete"
	createDeleteButton.className = "delete"; //give the new button a class name "delete"
	createLi.appendChild(createLabel); //append <label> to <li>
	createLi.appendChild(createDeleteButton); //append <button> to <li>
	document.getElementById("myList").appendChild(createLi); //append <li> to <ul>
	console.log("add Card");

	document.getElementById("input").value = ""; //clear the input box
}



//delete cards
var deleteItems = document.getElementById("myList");
deleteItems.addEventListener("click", deleteCard);

function deleteCard(event){
	this.removeChild(event.target.parentNode);
}
//The key part in this exercise is the delete containing card function. 
//1. You have to select an existing parentNode, but not the dynamic one. In this case, select "myList" in ul
//2. the event and event.target, for some reason, is for "button delete", but not ul
//3. use the console, element--event Listener to determine if an event is selected.

