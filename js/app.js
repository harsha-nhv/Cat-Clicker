let pic = document.getElementsByTagName("img")[0]
let clicks = document.getElementsByClassName("clicks")[0]
let count = 0;

pic.addEventListener('click',function(){
    count += 1
    clicks.textContent = "Clicks :"+count
    console.log(count)
})