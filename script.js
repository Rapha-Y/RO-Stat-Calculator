var max_base_level;
var max_job_level;
var max_stat_points;
var min_base_level;
var stat_points_floor;

var base;
var job;
var classValue;

var str;
var agi;
var vit;
var int;
var dex;
var luk;

var stat_points = 0;
var adopted = 0;
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

function getNumericValues(){
    base = document.getElementById("base").value;
    job = document.getElementById("job").value;

    str = document.getElementById("str").value;
    agi = document.getElementById("agi").value;
    vit = document.getElementById("vit").value;
    int = document.getElementById("int").value;
    dex = document.getElementById("dex").value;
    luk = document.getElementById("luk").value;
}

function clearDropdowns(){
    var select;

    select = document.getElementById("base");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
    select = document.getElementById("job");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }

    select = document.getElementById("str");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
    select = document.getElementById("agi");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
    select = document.getElementById("vit");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
    select = document.getElementById("int");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
    select = document.getElementById("dex");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
    select = document.getElementById("luk");
    for(var i=select.options.length-1;i>=0;i--){
        select.remove(i);
    }
}

function createDropdowns(){
    clearDropdowns();
    var select;
    
    select = document.getElementById("base");
    for(var i=min_base_level;i<=max_base_level;i++){
        select.options[select.options.length] = new Option(i, i);
    }
    select = document.getElementById("job");
    for(var i=1;i<=max_job_level;i++){
        select.options[select.options.length] = new Option(i, i);
    }

    select = document.getElementById("str");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
    select = document.getElementById("agi");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
    select = document.getElementById("vit");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
    select = document.getElementById("int");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
    select = document.getElementById("dex");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
    select = document.getElementById("luk");
    for(var i=1;i<=max_stat_points;i++){
        select.options[select.options.length] = new Option(i, i);
    }
}