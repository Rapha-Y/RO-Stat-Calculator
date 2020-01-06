var max_base_level = 99;
var max_job_level = 10;
var max_stat_points = 99;
var min_base_level = 1;
var stat_points_floor = 48;

var base = 1;
var job = 1;
var classValue = 0;

var str = 1;
var agi = 1;
var vit = 1;
var int = 1;
var dex = 1;
var luk = 1;

var stat_points = 0;
var adopted = false;
var reborn = false;

var stat_points_per_level = [];
var stat_points_cost_per_increase = [];

//calculate stat gain on level up
function calcStatGain(level){
    if(level > 0 && level == 1){
        return 0;
    }else if(level <= 100){
        return 3 + Math.floor((level-1)/5);
    }else if(level <= 150){
        return 23 + Math.floor((level-101)/10);
    }else if(level <= 175){
        return 28 + Math.floor((level-151)/7);
    }else if(level == 176){
        return 17;
    }else if(level <= 185){
        return 30 + Math.floor((level-175)/5);
    }
}

/*
    fills array indexes with total of stat points gained upon leveling (floor not counted)
    ex.: level 1 = index 0 = 0, level 2 = index 1 = 3, ...
*/
function fillStatPointsArray(){
    stat_points_per_level.push(0);
    for(var i=1;i<185;i++){
        stat_points_per_level.push(stat_points_per_level[i-1]+calcStatGain(i+1));
    }
}

//calculates how many stat points are used to increase a stat (str, agi, etc) 
function calcStatCost(stat_number){
    console.log(stat_number);
    if(stat_number > 0 && stat_number == 1){
        return 0;
    }else if(stat_number <= 100){
        return 2 + Math.floor((stat_number-2)/10);
    }else if(stat_number <= 130){
        return 16 + 4 * Math.floor((stat_number-101)/5);
    }
}

//fill array with total stat points
/*
    fills array indexes with total of stat points cost to increase a stat
    ex.: stat 1 = index 0 = 2, stat 2 = index 1 = 4, ...
*/
function fillStatPointCostArray(){
    stat_points_cost_per_increase.push(0);
    for(var i=1;i<130;i++){
        stat_points_cost_per_increase.push(stat_points_cost_per_increase[i-1]+calcStatCost(i+1));
    }
}

//shows the cost for increasing each stat
function showCost(){
    if(str < 130){
        str_aux = parseFloat(str) + 1;
        document.getElementById("str-cost").innerHTML = "(" + calcStatCost(str_aux) + ")";
    }else{
        document.getElementById("str-cost").innerHTML = "(0)";   
    }
    if(agi < 130){
        agi_aux = parseFloat(agi) + 1;
        document.getElementById("agi-cost").innerHTML = "(" + calcStatCost(agi_aux) + ")";
    }else{
        document.getElementById("agi-cost").innerHTML = "(0)";   
    }
    if(vit < 130){
        vit_aux = parseFloat(vit) + 1;
        document.getElementById("vit-cost").innerHTML = "(" + calcStatCost(vit_aux) + ")";
    }else{
        document.getElementById("vit-cost").innerHTML = "(0)";   
    }
    if(int < 130){
        int_aux = parseFloat(int) + 1;
        document.getElementById("int-cost").innerHTML = "(" + calcStatCost(int_aux) + ")";
    }else{
        document.getElementById("int-cost").innerHTML = "(0)";   
    }
    if(dex < 130){
        dex_aux = parseFloat(dex) + 1;
        document.getElementById("dex-cost").innerHTML = "(" + calcStatCost(dex_aux) + ")";
    }else{
        document.getElementById("dex-cost").innerHTML = "(0)";   
    }
    if(luk < 130){
        luk_aux = parseFloat(luk) + 1;
        document.getElementById("luk-cost").innerHTML = "(" + calcStatCost(luk_aux) + ")";
    }else{
        document.getElementById("luk-cost").innerHTML = "(0)";   
    }
}

//calculate stat point number
function calcStatPoints(){
    var totalCost = stat_points_cost_per_increase[str-1];
    totalCost += stat_points_cost_per_increase[agi-1];
    totalCost += stat_points_cost_per_increase[vit-1];
    totalCost += stat_points_cost_per_increase[int-1];
    totalCost += stat_points_cost_per_increase[dex-1];
    totalCost += stat_points_cost_per_increase[luk-1];
    
    stat_points = stat_points_floor+stat_points_per_level[base-1]-totalCost;
    document.getElementById("stat_points").innerHTML = stat_points;
}

//update variables based on class value
function updateOnClassChange(){    
    str = 1;
    agi = 1;
    vit = 1;
    int = 1;
    dex = 1;
    luk = 1;

    //base job
    if(classValue == 0){
        base = 1;
        job = 1;

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
        base = 1;
        job = 1;
        
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
        base = 1;
        job = 1;
        
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
        base = 1;
        job = 1;
        
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
        base = 99;
        job = 1;
        
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
        base = 1;
        job = 1;
        
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
        base = 1;
        job = 1;
        
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
        base = 99;
        job = 1;
        
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
        base = 1;
        job = 1;
        
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
        base = 99;
        job = 1;
        
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

//update variables based on numeric dropdowns
function getDropdownValues(){
    base = document.getElementById("base").value;
    job = document.getElementById("job").value;
    classValue = document.getElementById("class").value;

    str = document.getElementById("str").value;
    agi = document.getElementById("agi").value;
    vit = document.getElementById("vit").value;
    int = document.getElementById("int").value;
    dex = document.getElementById("dex").value;
    luk = document.getElementById("luk").value;
}

//update variables based on adopted checkbox
function adoptedCheck(){
    var classValue = document.getElementById("class").value;
    var adoptedCheck = document.getElementById("adopted");
    var rebornCheck = document.getElementById("reborn");
    if(adoptedCheck.checked == true){
        adopted = true;
        reborn = false;
        rebornCheck.checked = false;
        updateOnClassChange();
        hideRebornCheckbox();
    }else{
        adopted = false;
        if((classValue >= 0 && classValue <= 6) || (classValue >= 33 && classValue <= 45)){
            updateOnClassChange();
            showRebornCheckbox();
        }
    }
    createDropdowns();
}

//update variables based on reborn checkbox
function rebornCheck(){
    var adoptedCheck = document.getElementById("adopted");
    var rebornCheck = document.getElementById("reborn");
    if(rebornCheck.checked == true){
        reborn = true;
        adopted = false;
        adoptedCheck.checked = false;
        updateOnClassChange();
        hideAdoptedCheckbox();
    }else{
        reborn = false;
        updateOnClassChange();
        showAdoptedCheckbox();
    }
    calcStatPoints();
    createDropdowns();
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

