let cat1 = document.getElementsByTagName("img")[0]
let cat2 = document.getElementsByTagName("img")[1]
let clicks1 = document.getElementsByClassName("clicks")[0]
let count1 = 0;
let clicks2 = document.getElementsByClassName("clicks")[1]
let count2 = 0;

cat1.addEventListener('click',function(){
    count1 += 1
    clicks1.textContent = "Clicks : "+count1
    console.log(count1)
})

cat2.addEventListener('click', function(){
    count2 += 1
    clicks2.textContent = "Clicks : "+count2
    console.log(count2)
})