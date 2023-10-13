let divestouvert1 = false;

function plusToMoins() {

    if(divestouvert1){
        document.getElementById("button1").innerHTML="+";
        document.getElementById("cache1").style.display = "none";
        divestouvert1 = false;
    }else{
        document.getElementById("button1").innerHTML="-";
        document.getElementById("cache1").style.display = "block";
        divestouvert1 = true;
    }
    
}

document.getElementById("button1").addEventListener("click", plusToMoins)

let divestouvert2 = false;

function plusToMoins2() {
    
    if(divestouvert2){
        document.getElementById("button2").innerHTML="+";
        document.getElementById("cache2").style.display = "none";
        divestouvert2 = false;
    }else{
        document.getElementById("button2").innerHTML="-";
        document.getElementById("cache2").style.display = "block";
        divestouvert2 = true;
    }
    
}

document.getElementById("button2").addEventListener("click", plusToMoins2)

let divestouvert3 = false;

function plusToMoins3() {
    
    if(divestouvert3){
        document.getElementById("button3").innerHTML="+";
        document.getElementById("cache3").style.display = "none";
        divestouvert3 = false;
    }else{
        document.getElementById("button3").innerHTML="-";
        document.getElementById("cache3").style.display = "block";
        divestouvert3 = true;
    }
    
}

document.getElementById("button3").addEventListener("click", plusToMoins3)