var adopted = 0;
var classValue = 0;
var max_base_level = 99;
var max_stat_points = 99;
var min_base_level = 1;
var stat_points = 0;
var stat_points_floor = 48;
var reborn = 0;

function getClassValue(){
    classValue = document.getElementById("class").value;
    //base job
    if(classValue == 0){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 10;
        if(reborn == 0){
            stat_points_floor = 48;
            if(adopted == 0){
                max_stat_points = 99;
            }else{
                max_stat_points = 80;
            }
        }else{
            stat_points_floor = 100;
            max_stat_points = 99;
        }
    //first job
    }else if(classValue >= 1 && classValue <= 6){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        if(reborn == 0){
            stat_points_floor = 48;
            if(adopted == 0){
                max_stat_points = 99;
            }else{
                max_stat_points = 80;
            }
        }else{
            stat_points_floor = 100;
            max_stat_points = 99;
        }
    //second job
    }else if(classValue >= 7 && classValue <= 19){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        stat_points_floor = 48;
        if(adopted == 0){
            max_stat_points = 99;
        }else{
            max_stat_points = 80;
        }
    //second job (trans)
    }else if(classValue >= 20 && classValue <= 32){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 70;
        stat_points_floor = 100;
        max_stat_points = 99;
    //third job
    }else if(classValue >= 33 && classValue <= 45){
        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        if(reborn == 0){
            stat_points_floor = 48;
            if(adopted == 0){
                max_stat_points = 130;
            }else{
                max_stat_points = 117;
            }
        }else{
            stat_points_floor = 100;
            max_stat_points = 130;
        }
    //expanded base job
    }else if(classValue == 46){
        min_base_level = 1;
        max_base_level = 185;
        max_job_level = 55;
        stat_points_floor = 48;
        if(adopted == 0){
            max_stat_points = 125;
        }else{
            max_stat_points = 117;
        }
    //expanded first and second job
    }else if(classValue >= 47 && classValue <= 51){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        stat_points_floor = 48;
        if(adopted == 0){
            max_stat_points = 99;
        }else{
            max_stat_points = 80;
        }
    //expanded third job
    }else if(classValue >= 52 && classValue <= 56){
        min_base_level = 99;
        max_base_level = 125;
        max_job_level = 65;
        stat_points_floor = 48;
        if(adopted == 0){
            max_stat_points = 125;
        }else{
            max_stat_points = 117;
        }
    //super novice
    }else if(classValue == 57){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 99;
        stat_points_floor = 48;
        if(adopted == 0){
            max_stat_points = 99;
        }else{
            max_stat_points = 80;
        }
    //expanded super novice
    }else if(classValue == 58){
        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        stat_points_floor = 48;
        if(adopted == 0){
            max_stat_points = 130;
        }else{
            max_stat_points = 117;
        }
    }
    createDropdowns();
}

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
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createJobDropdown(){
    var select = document.getElementById("job");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createStrDropdown(){
    var select = document.getElementById("str");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createAgiDropdown(){
    var select = document.getElementById("agi");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createVitDropdown(){
    var select = document.getElementById("vit");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createIntDropdown(){
    var select = document.getElementById("int");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createDexDropdown(){
    var select = document.getElementById("dex");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}

function createLukDropdown(){
    var select = document.getElementById("luk");
    for(var i=1;i<=max_stat_points;i++){
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