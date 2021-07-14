var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
		var div = document.createElement("div");
		var li = document.createElement("li");
		var delButton = document.createElement("button");
		div.classList.add("wrapper");
		delButton.classList.add("w3-button", "w3-small", "w3-round-xlarge", "w3-purple", "w3-hover-indigo")
		ul.appendChild(div);
		div.appendChild(li);
		div.appendChild(delButton);
		li.classList.add("taskClass");
		li.appendChild(document.createTextNode(input.value)); //puts text inside the li element
		input.value = "";
		delButton.classList.add("delClass");
		delButton.innerHTML = "Delete";

}

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}

}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.className === "taskClass") {
		var target = task.target;
		target.classList.add("done");
	} else {
		var target = task.target;
		target.classList.remove("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "w3-button w3-small w3-round-xlarge w3-purple w3-hover-indigo delClass") {
		element.target.parentElement.remove();
	}

}

//if element is button it will run second function, if element is li then it will run 1st function
 function handleUlClick(element) {
 	doneTask(element);
 	deleteListElement(element);

 }


ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick); //note that we dont have function(), we don't want to run it yet
input.addEventListener("keypress", addListAfterKeypress);

