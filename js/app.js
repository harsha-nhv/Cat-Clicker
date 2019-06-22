let catlist = {'Cat1':{'name':'cat1', 'clicks':0},
               'Cat2':{'name':'cat2', 'clicks':0},
               'Cat3':{'name':'cat3', 'clicks':0},
               'Cat4':{'name':'cat4', 'clicks':0}
            }
let arrayCats = []
let listItem = document.getElementsByClassName("catsList")[0];
let liElem, text;


let textTag = document.getElementsByClassName("name")[0];
let clicksTag = document.getElementsByClassName("clicks")[0];
let img = document.getElementsByTagName("img")[0];


(function(){
    for(cats in catlist){
        liElem = document.createElement("li")
        liElem.classList.add("cats")
        text = document.createTextNode(cats)
        liElem.appendChild(text)
        listItem.appendChild(liElem)        
    }
})();




let listOfCats = document.getElementsByClassName("cats")
// console.log(listOfCats)

for(cat of listOfCats){
    cat.addEventListener('click',catClicker)
    
}

function catClicker(cat){
    
    let filepath = "images/"+catlist[this.textContent]["name"]+".jpg";
    textTag.textContent = catlist[this.textContent]["name"];
    img.setAttribute("src",filepath);
    clicksTag.textContent = "Clicks:"+catlist[this.textContent]["clicks"];
    
    
}

img.addEventListener("click",function(){
    let catType = this.getAttribute("src").split(".")[0].split("/")[1]
    catType = catType.charAt(0).toUpperCase()+catType.slice(1);
    catlist[catType]["clicks"] += 1;
    clicksTag.textContent = "Clicks:"+catlist[catType]["clicks"];

})
