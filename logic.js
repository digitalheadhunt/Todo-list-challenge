function insertElement(){
    let count = 0
    let value = document.querySelector("#new-task").value;
    count +=1    
    let newElements = `<li id="${count}"><input type="checkbox" onclick="complete(this)"><label>${value}</label><input type="text"><button class="edit">Edit</button><button class="delete" onclick="remover(this)">Delete</button></li>`;
    let list = document.querySelector("#incomplete-tasks").innerHTML += newElements
}

function remover(e){
    console.log("Delete Task...");

		var listItem= e.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);
}

function complete(e){
    let complete = document.querySelector("#completed-tasks");
    let element = e.parentNode;
    complete.appendChild(element);
}