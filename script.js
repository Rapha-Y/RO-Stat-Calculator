var stat_points = 0;

function getStrValue(){
    var selectedValue = document.getElementById("str").value;
    console.log(selectedValue);
}

function getAgiValue(){
    var selectedValue = document.getElementById("agi").value;
    console.log(selectedValue);
}

function getVitValue(){
    var selectedValue = document.getElementById("vit").value;
    console.log(selectedValue);
}

function getIntValue(){
    var selectedValue = document.getElementById("int").value;
    console.log(selectedValue);
}

function getDexValue(){
    var selectedValue = document.getElementById("dex").value;
    console.log(selectedValue);
}

function getLukValue(){
    var selectedValue = document.getElementById("luk").value;
    console.log(selectedValue);
}

function createBaseDropdown(){
    var select = document.getElementById("base");
    for(var i=1;i<=185;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createJobDropdown(){
    var select = document.getElementById("job");
    for(var i=1;i<=65;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createStrDropdown(){
    var select = document.getElementById("str");
    for(var i=1;i<=130;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createAgiDropdown(){
    var select = document.getElementById("agi");
    for(var i=1;i<=130;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createVitDropdown(){
    var select = document.getElementById("vit");
    for(var i=1;i<=130;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createIntDropdown(){
    var select = document.getElementById("int");
    for(var i=1;i<=130;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createDexDropdown(){
    var select = document.getElementById("dex");
    for(var i=1;i<=130;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createLukDropdown(){
    var select = document.getElementById("luk");
    for(var i=1;i<=130;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createDropdowns(){
    createBaseDropdown();
    createJobDropdown();
    createStrDropdown();
    createAgiDropdown();
    createVitDropdown();
    createIntDropdown();
    createDexDropdown();
    createLukDropdown();
}