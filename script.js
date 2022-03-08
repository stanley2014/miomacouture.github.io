var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");





function inputLength() {
	return document.getElementById('userinput').value.lenght; 
	//return input.value.length;
	//console.log(input.value)
}

function createListElement() {
	var li = document.createElement("li");
	var inputText = document.getElementById('userinput').value
	var textnode = document.createTextNode(inputText);
	li.appendChild(textnode);
	//li.appendChild(document.createTextNode(inpute.value));
	//input.value = "";
}

function addListAfterClick() {
	if (inputLength > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if ( event.keycode === 13) {
		createListElement();
	}
	// body...
}

button.addEventListener("Click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeyPress(event));

//function submitHandler(event) {
//	console.log(event.target.value)
//}
