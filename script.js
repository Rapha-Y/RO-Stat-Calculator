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
var adopted = false;
var reborn = false;

function getClassValue(){
    classValue = document.getElementById("class").value;
    var adoptedCheck = document.getElementById("adopted");
    var rebornCheck = document.getElementById("reborn");
    //base job
    if(classValue == 0){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 10;
        if(reborn == false){
            stat_points_floor = 48;
            if(adopted == false){
                max_stat_points = 99;
            }else{
                max_stat_points = 80;
            }
        }else{
            stat_points_floor = 100;
            max_stat_points = 99;
        }

        showAdoptedCheckbox();
        showRebornCheckbox();
    //first job
    }else if(classValue >= 1 && classValue <= 6){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        if(reborn == false){
            stat_points_floor = 48;
            if(adopted == false){
                max_stat_points = 99;
            }else{
                max_stat_points = 80;
            }
        }else{
            stat_points_floor = 100;
            max_stat_points = 99;
        }

        showAdoptedCheckbox();
        showRebornCheckbox();
    //second job
    }else if(classValue >= 7 && classValue <= 19){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
        }else{
            max_stat_points = 80;
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //second job (trans)
    }else if(classValue >= 20 && classValue <= 32){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 70;
        stat_points_floor = 100;
        max_stat_points = 99;

        adopted = false;
        adoptedCheck.checked = false;
        hideAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //third job
    }else if(classValue >= 33 && classValue <= 45){
        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        if(reborn == false){
            stat_points_floor = 48;
            if(adopted == false){
                max_stat_points = 130;
            }else{
                max_stat_points = 117;
            }
        }else{
            stat_points_floor = 100;
            max_stat_points = 130;
        }

        showAdoptedCheckbox();
        showRebornCheckbox();
    //expanded base job
    }else if(classValue == 46){
        min_base_level = 1;
        max_base_level = 185;
        max_job_level = 55;
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 125;
        }else{
            max_stat_points = 117;
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //expanded first and second job
    }else if(classValue >= 47 && classValue <= 51){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
        }else{
            max_stat_points = 80;
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //expanded third job
    }else if(classValue >= 52 && classValue <= 56){
        min_base_level = 99;
        max_base_level = 125;
        max_job_level = 65;
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 125;
        }else{
            max_stat_points = 117;
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //super novice
    }else if(classValue == 57){
        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 99;
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
        }else{
            max_stat_points = 80;
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //expanded super novice
    }else if(classValue == 58){
        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 130;
        }else{
            max_stat_points = 117;
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
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

function adoptedCheck(){
    var classValue = document.getElementById("class").value;
    var adoptedCheck = document.getElementById("adopted");
    var rebornCheck = document.getElementById("reborn");
    if(adoptedCheck.checked == true){
        adopted = true;
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    }else{
        adopted = false;
        if((classValue >= 0 && classValue <= 6) || (classValue >= 33 && classValue <= 45)){
            showRebornCheckbox();
        }
    }
}

function rebornCheck(){
    var adoptedCheck = document.getElementById("adopted");
    var rebornCheck = document.getElementById("reborn");
    if(rebornCheck.checked == true){
        reborn = true;
        adopted = false;
        adoptedCheck.checked = false;
        hideAdoptedCheckbox();
    }else{
        reborn = false;
        showAdoptedCheckbox();
    }
}

function hideAdoptedCheckbox(){
    document.getElementById("adopted").style.display = "none";
}

function showAdoptedCheckbox(){
    document.getElementById("adopted").style.display = "block";
}

function hideRebornCheckbox(){
    document.getElementById("reborn").style.display = "none";
}

function showRebornCheckbox(){
    document.getElementById("reborn").style.display = "block";
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

