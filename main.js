const container = document.querySelector(".container");

function createContainer(numberOfDivs=16){
    for(let i = 0 ; i < numberOfDivs*numberOfDivs ; i++){
        let gridElement = document.createElement("div");
        gridElement.style.width = (800 / numberOfDivs)+"px";
        gridElement.style.height =(800 / numberOfDivs)+ "px";
        gridElement.setAttribute("id",i);
        if(i==0 ){
            gridElement.style.borderTopLeftRadius="10px"
        }
        else if(i==numberOfDivs-1){
            gridElement.style.borderTopRightRadius="10px"
        }else if(i==numberOfDivs*numberOfDivs -1){
            gridElement.style.borderBottomRightRadius="10px"
        }else if(i==numberOfDivs*numberOfDivs -numberOfDivs){
            gridElement.style.borderBottomLeftRadius="10px"
        }
        gridElement.classList.add("grid-element");
        container.append(gridElement);
    }
}
createContainer();
const black = document.getElementById("black");
const rainbow = document.getElementById("rainbow");


let divs = document.querySelectorAll(".grid-element");
divs.forEach(el=>el.addEventListener("mouseover",(event)=>{
    let ide = event.target.id;
    let element = document.getElementById(ide);
    if(rainbow.checked){
        element.style.background=`rgb(${getRandom()},${getRandom()},${getRandom()})`;
    }else{
        element.style.background=`rgb(0,0,0)`;
    }
    
}));


const numberOfDivs = document.getElementById("numberOfDivs");
const submit = document.getElementById("submit");
const wrong = document.getElementById("wrong")


submit.addEventListener("click",function(e){
    if(numberOfDivs.value < 101 && numberOfDivs.value >16){
        let divs = document.querySelectorAll(".grid-element");
        divs.forEach(el=>el.remove());
        createContainer(numberOfDivs.value);
        divs = document.querySelectorAll(".grid-element");
        divs.forEach(el=>el.addEventListener("mouseover",(event)=>{
            let ide = event.target.id;
            let element = document.getElementById(ide);
            if(rainbow.checked){
                element.style.background=`rgb(${getRandom()},${getRandom()},${getRandom()})`;
            }else{
                element.style.background=`rgb(0,0,0)`;
            }
        }));
    }else{
        wrong.style.display="inline-block";
         setTimeout(() => {
            wrong.style.display="none";
        }, 600);
    }
})

function getRandom(){
    return Math.floor(Math.random()*255)+1;
}