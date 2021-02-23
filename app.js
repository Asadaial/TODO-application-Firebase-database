var list=document.getElementById("list")

firebase.database().ref('TODOS').on('child_added',function(data){
    //  //create li tag with text node
     var li =document.createElement('li')
     var litext=document.createTextNode(data.val().value)
     li.appendChild(litext)
     //create delete button
    var delbtn=document.createElement("button")
    var deltext=document.createTextNode("Delete")
    delbtn.setAttribute("class" ,"btn") 
    delbtn.setAttribute("id",data.val().key)
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)

    // // //create edit btn
    var editbtn=document.createElement("button")
    var edittext=document.createTextNode("Edit")
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("id",data.val().key)
    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.appendChild(edittext)
   

    li.appendChild(delbtn)
    li.appendChild(editbtn)
   
    
  
    list.appendChild(li)
    




    
    // // console.log(li)
   
   
})

function AddTodo(){
    
    var todo_item=document.getElementById("todo-item")
    // var key=firebase.database().ref('TODOS').push().key;
    // console.log(key)
   

    var database=firebase.database().ref("TODOS")
    var key=database.push().key
    var todo={
        value: todo_item.value,
        key: key
    }
    database.child(key).set(todo)
    todo_item.value=''
  
}




function deleteItem(e){
   firebase.database().ref('TODOS').child(e.id).remove()
   e.parentNode.remove()

     
}


function DelAll(){
    firebase.database().ref('TODOS').remove()
    list.innerHTML=""

}
function edititem(edit){
   
    var editValue=prompt("Enter edit value",edit.parentNode.firstChild.nodeValue)
    var editTodo={
        value:editValue,
        key:edit.id

    }

    edit.parentNode.firstChild.nodeValue=editValue
    console.log(editTodo)
     
     
}

// console.log(firebase)




