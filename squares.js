let squareArea = document.querySelector("#squarearea");

let squareCount = parseInt(Math.random()*21)+30;

let z = 1;

window.onload = function(){
    for(let i=0; i < squareCount; i++){
        addSquare()
    }
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i =0; i < 6; i++){
        color += letters.charAt(parseInt(Math.random()*letters.length));
    }

    return color;
}


function changeColors(){
    let allSquares = document.querySelectorAll(".square"); // selects all squares
    for (let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}

function addSquare(){
    let square = document.createElement("div");
    square.className = "square";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.backgroundColor = getRandomColor();
    squareArea.append(square);

    square.onclick = function(){
        if (parseInt(square.style.zIndex)=== z){
            square.remove();
        } else {
            z ++;
            square.style.zIndex = z;
        }
    }
}

