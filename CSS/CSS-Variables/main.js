const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container")
console.log(container);
left.addEventListener("mouseenter",() =>{/* 添加鼠标移动进的事件 */
    container.classList.add("hover-left");/* 给container盒子添加class */
})
left.addEventListener("mouseleave",() =>{/* 添加鼠标移出进的事件 */
    container.classList.remove("hover-left");
})

right.addEventListener("mouseenter",() =>{
    container.classList.add("hover-right");
})
right.addEventListener("mouseleave",() =>{
    container.classList.remove("hover-right");
})