const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    let randomColor = Math.floor(Math.random() * colors.length);
    console.log(randomColor);
    document.body.style.background = colors[randomColor];
    color.innerHTML = colors[randomColor];
});



















// const colors = ["red", "green", "rgba(133,122,200)", "#f15021"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function() {
    
//     const randomColor = Math.floor(Math.random() * colors.length);

//     document.body.style.background = colors[randomColor];
//     color.innerHTML = colors[randomColor];

//     console.log(randomColor);
// });
