const scrollable = document.querySelectorAll('.moviessection');
const scrollsideButton = document.querySelectorAll('.scrollarrow')
let scrollAmount = 30

//.console.log(scrollsideButton)
for(let i=0;i<scrollsideButton.length;i++){

    scrollsideButton[i].addEventListener("click",(e)=>{
      
        console.log(scrollable[1].scrollLeft)

        scrollable[i].scrollLeft += 125;
      
        scrollsideButton[i].click()

    })};