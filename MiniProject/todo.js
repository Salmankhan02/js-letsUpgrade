let num=localStorage.getItem("todo");
if(num!=undefined){
let num2=num.split(",");
console.log(num2);
for(let i=0;i<num2.length;i++){
    var listItem = document.createElement("li");
    listItem.classList.add("mylist");
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(num2[i]);
    listItem.appendChild(itemText);
    document.getElementById('place').appendChild(listItem);
}
}

function taskadd() {
    var task = document.getElementById('textinput').value;
    var listItem = document.createElement("li");
    listItem.classList.add("mylist");
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(task);
    listItem.appendChild(itemText);
    document.getElementById('place').appendChild(listItem);
    document.forms.myForm.reset();
}

    
function deleteCheckBox() {
    var ul = document.getElementById('place');
    var li = ul.children;
    for (var i=0; i < li.length; i++) {
        while(li[i] && li[i].children[0].checked) {
            ul.removeChild(li[i]);
        }
    }
    
}

function exit(){
    localStorage.removeItem("todo")
    
    let li=document.querySelectorAll(".mylist");
    if(li.length==0){
        var win = window.open("about:blank", "_self");
        win.close();    
    }
    else{
    let num=[];
    for(let i=0;i<li.length;i++){
        num.push(li[i].innerText);
            }
    localStorage.setItem("todo",num)    
    
    if (confirm("Your Todo list will be stored in the browser")) {
        var win = window.open("about:blank", "_self");
        win.close();    
    }
    
    }   
    
}
