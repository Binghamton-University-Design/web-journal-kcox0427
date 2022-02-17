// JavaScript Document

var entriesJSON;

window.onload = boot();

async function boot(){
    entriesJSON = getEntries();
    for(let i = 0; i < entriesJSON.length; i++){
        createEntry(i);
    }
    document.getElementById("Header").addEventListener("mouseup", () => {
        closeEntry();
    });
    document.getElementById("EntryGrid").style.height = (document.getElementById("EntryGrid").children/4)*45 + "vh";
    checkGrid();
    window.onresize = checkGrid;
    document.body.style.opacity = "1"
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
    newEntryTitle.innerHTML = entriesJSON[index].title;
    newEntry.append(newEntryTitle);
    
    newEntryImage.src = entriesJSON[index].image;
    newEntryImage.classList.add("EntryImages");
    newEntry.append(newEntryImage);
    
    newEntry.addEventListener("mouseup", () => {
        openEntry(index);
    });
    
    document.getElementById("EntryGrid").append(newEntry);
}

function openEntry(index){
    document.getElementById("EntryPageWrapper").scrollTop = 0;
    document.getElementById("Main").style.opacity = "0";
    document.getElementById("Main").style.pointerEvents = "none";
    document.getElementById("EntryPageDescription").innerHTML = entriesJSON[index].text;
    document.getElementById("EntryPageImage").src = entriesJSON[index].image;
    document.getElementById("EntryPageTitle").innerHTML = entriesJSON[index].title;
    
    setTimeout(() => {
        document.getElementById("EntryPageWrapper").style.opacity = "1";
        document.getElementById("EntryPageWrapper").style.pointerEvents = "all";
    }, 150);
}

function closeEntry(){
    document.getElementById("EntryPageWrapper").style.opacity = "0";
    document.getElementById("EntryPageWrapper").style.pointerEvents = "none";
    
    setTimeout(() => {
        document.getElementById("Main").style.opacity = "1";
        document.getElementById("Main").style.pointerEvents = "all";
    }, 150);
}


