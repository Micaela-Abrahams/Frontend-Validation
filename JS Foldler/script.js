function myValidation(){
    let newTask = document.getElementById("addTask").value;
    let taskDescription = document.getElementById("addDescription").value;
    let setDate = document.getElementById("setDate").value;
    let setTime = document.getElementById("setTime").value;


    if(newTask == "<"){
        document.getElementById("newTaskError").style.display = "block";

    }else if (newTask == ">"){
        document.getElementById("newTaskError").style.display = "block";

    }else if(newTask == "<html>"){
        document.getElementById("newTaskError").style.display = "block";

    }else if(newTask == "new task <html>"){
        document.getElementById("newTaskError").style.display = "block";

    }else if(newTask == "New task <html>"){
        document.getElementById("newTaskError").style.display = "block";
    }
    
}

