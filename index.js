
let a = document.getElementsByClassName("original");

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", 
    function () {
        let x = document.querySelector(".selected1");
        console.log(x, "fun1")
        if (x) {
            x.classList.remove("selected1");
            x.parentNode.classList.remove("selected2");
        }
        a[i].classList.add("selected1");
        a[i].parentNode.classList.add("selected2");
    });
}
//ajfkjsfljnlndfkg

// function fun1(y){
//     let x = document.querySelector(".selected2");
//     console.log(x,"fun1")
//     if (x){    
//         x.classList.remove("selected2");
//         x.parentNode.classList.remove("selected1");
//     }
//     y.classList.add("selected1");
//     y.parentNode.classList.add("selected2");
// }


// document.getElementById("cost").addEventListener("click", fun1);


// document.getElementById("monitoring").addEventListener("click", fun2);

// function fun2(){
//     let x = document.querySelector(".selected2");
//     //console.log(x,"fun2")
//     if (x){
//         console.log(x,"fun2")
//         console.log("selected is added somewhere");
//         x.classList.remove("selected2");
//         x.parentNode.classList.remove("selected1");
//     }
//     document.getElementById("v1").classList.add("selected1");
//     document.getElementById("monitoring").classList.add("selected2");
// }

// document.getElementById("inventory").addEventListener("click", fun3);

// function fun3(){
//     let x = document.querySelector(".selected2");
//     console.log(x,"fun3")
//     if (x){
//         console.log("selected is added somewhere");
//         x.classList.remove("selected2");
//         x.parentNode.classList.remove("selected1");
//     }
//     document.getElementById("v2").classList.add("selected1");
//     document.getElementById("inventory").classList.add("selected2");
// }

// document.getElementById("inventory").addEventListener("click", fun3);

// function fun3(){
//     let x = document.querySelector(".selected2");
//     console.log(x,"fun3")
//     if (x){
//         console.log("selected is added somewhere");
//         x.classList.remove("selected2");
//         x.parentNode.classList.remove("selected1");
//     }
//     document.getElementById("v2").classList.add("selected1");
//     document.getElementById("inventory").classList.add("selected2");
// }



















// // function expandBox(e){
// //     var selectedEl = document.querySelector(".selected");
// //     if(selectedEl){
// //         selectedEl.classList.remove("selected");        
// //         selectedEl.parentNode.classList.remove("selected2");
// //     }
// //     console.log(e.className);
// //     e.classList.add("selected");
// //     let node = e.parentNode;
// //     node.classList.add("selected2"); 

// // }


