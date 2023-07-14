
function create(name,age){
    let person ={
        name:name,
        age:age
        
    
    }
    return person;
}



document.getElementById("myButton").onclick =  function(){
    
    var name = document.querySelector("#myText").value;
    const h1 = document.querySelector("#ranText");
 
    if (name != ""){
        h1.innerText=name;
        console.log(name)
    }
    else{
        h1.innerText="enter name";
        console.log("enter name")
    }
    
    
}
