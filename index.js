



// alert("hello");

// var a = document.getElementById("cost").addEventListener("click", fun1);

// function fun1(){
//     // document.getElementById("cost").style.backgroundColor = "lightblue";
//     // document.getElementById("cost").style.borderColor = "red";
//     document.getElementsByClassName("vertical1")[0].style.flexGrow = "4";
//     document.getElementById("cost").style.flexGrow="4";

// }

function expandBox(e){
    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        selectedEl.classList.remove("selected");        
        selectedEl.parentNode.classList.remove("selected2");
    }
    console.log(e.className);
    e.classList.add("selected");
    let node = e.parentNode;
    node.classList.add("selected2"); 
   
}


