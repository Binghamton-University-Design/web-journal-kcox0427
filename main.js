// JavaScript Document



window.onload = boot();

function boot(){
    for(let i = 0; i < 10; i++){
        createEntry(i+1);
    }
    document.getElementById("EntryGrid").style.height = (document.getElementById("EntryGrid").children/4)*45 + "vh";
    checkGrid();
    window.onresize = checkGrid;
}

function checkGrid(){
    var columns = Math.floor(window.innerWidth/((window.innerHeight/100)*40)), cssDeclaration = "";
    for(let i = 0; i < columns; i++){
        cssDeclaration += "auto ";
    }
    document.getElementById("EntryGrid").style.gridTemplateColumns = cssDeclaration;
}

function createEntry(index){
    var newEntry = document.createElement("div"), randomColor = "hsla(" + (Math.random()*360) + ", 100%, 70%, 1)";
    var newEntryTitle = document.createElement("span");
    var newEntryImage = document.createElement("img");
    
    newEntry.classList.add("Entries");
    newEntry.style.boxShadow = "0 0 30vh 5vh " + randomColor + "inset, 0 0 2vh 0.5vh " + randomColor.substring(0, randomColor.length-2) + "0.75)";
    
    newEntryTitle.classList.add("EntryTitles")
    newEntryTitle.innerHTML = "Entry " + index + " - ";
    newEntry.append(newEntryTitle);
    
    newEntryImage.src = "https://via.placeholder.com/350x150";
    newEntryImage.classList.add("EntryImages");
    newEntry.append(newEntryImage);
    
    newEntry.addEventListener("mouseup", () => {
        openEntry(index);
    });
    
    document.getElementById("EntryGrid").append(newEntry);
}

function openEntry(index){
    document.getElementById("Main").style.opacity = "0";
    document.getElementById("Main").style.pointerEvents = "none";
    
    setTimeout(() => {
        document.getElementById("EntryPageWrapper").style.opacity = "1";
        document.getElementById("EntryPageWrapper").style.pointerEvents = "all";
    }, 150);
}

