var max_base_level = 99;
var max_job_level = 10;
var max_stat_points = 99;
var min_base_level = 1;
var stat_points_floor = 48;

var base = 1;
var job = 10;
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

//shows the stat bonuses based on class
function showJobBonuses(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(xhttp.responseText);
            document.getElementById("bonus-str").innerHTML = "+" + response[classValue].jobBonuses[0];
            document.getElementById("bonus-agi").innerHTML = "+" + response[classValue].jobBonuses[1];
            document.getElementById("bonus-vit").innerHTML = "+" + response[classValue].jobBonuses[2];
            document.getElementById("bonus-int").innerHTML = "+" + response[classValue].jobBonuses[3];
            document.getElementById("bonus-dex").innerHTML = "+" + response[classValue].jobBonuses[4];
            document.getElementById("bonus-luk").innerHTML = "+" + response[classValue].jobBonuses[5];
        }
    };
    xhttp.open("GET", "job_data.json", true);
    xhttp.send();
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

//updates the maximum value a stat can get to
function setStatCeiling(number){
    document.getElementById("str").max = number;
    document.getElementById("agi").max = number;
    document.getElementById("vit").max = number;
    document.getElementById("int").max = number;
    document.getElementById("dex").max = number;
    document.getElementById("luk").max = number;
}

//update variables based on class value
function updateOnClassChange(){  
    str = 1;
    agi = 1;
    vit = 1;
    int = 1;
    dex = 1;
    luk = 1;
    document.getElementById("str").value = 1;
    document.getElementById("agi").value = 1;
    document.getElementById("vit").value = 1;
    document.getElementById("int").value = 1;
    document.getElementById("dex").value = 1;
    document.getElementById("luk").value = 1;
    
    //base job
    if(classValue == 0){
        base = 1;
        job = 10;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "10";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 10;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "10";
        if(reborn == false){
            stat_points_floor = 48;
            if(adopted == false){
                max_stat_points = 99;
                setStatCeiling(99);
            }else{
                max_stat_points = 80;
                setStatCeiling(80);
            }
        }else{
            stat_points_floor = 100;
            setStatCeiling(99);
        }

        showAdoptedCheckbox();
        showRebornCheckbox();
    //first job
    }else if(classValue >= 1 && classValue <= 6){
        base = 1;
        job = 50;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "50";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "50";
        if(reborn == false){
            stat_points_floor = 48;
            if(adopted == false){
                max_stat_points = 99;
                setStatCeiling(99);
            }else{
                max_stat_points = 80;
                setStatCeiling(80);
            }
        }else{
            stat_points_floor = 100;
            setStatCeiling(99);
        }

        showAdoptedCheckbox();
        showRebornCheckbox();
    //second job
    }else if(classValue >= 7 && classValue <= 19){
        base = 1;
        job = 50;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "50";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "50";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
            setStatCeiling(99);
        }else{
            max_stat_points = 80;
            setStatCeiling(80);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //second job (trans)
    }else if(classValue >= 20 && classValue <= 32){
        base = 1;
        job = 70;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "70";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 70;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "70";
        stat_points_floor = 100;
        max_stat_points = 99;
        setStatCeiling(99);

        adopted = false;
        adoptedCheck.checked = false;
        hideAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //third job
    }else if(classValue >= 33 && classValue <= 45){
        base = 99;
        job = 65;
        document.getElementById("base").value = "99";
        document.getElementById("job").value = "65";

        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        document.getElementById("base").min = "99";
        document.getElementById("base").max = "185";
        document.getElementById("job").max = "65";
        if(reborn == false){
            stat_points_floor = 48;
            if(adopted == false){
                max_stat_points = 130;
                setStatCeiling(130);
            }else{
                max_stat_points = 117;
                setStatCeiling(117);
            }
        }else{
            stat_points_floor = 100;
            setStatCeiling(130);
        }

        showAdoptedCheckbox();
        showRebornCheckbox();
    //expanded base job
    }else if(classValue == 46){
        base = 1;
        job = 55;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "55";

        min_base_level = 1;
        max_base_level = 185;
        max_job_level = 55;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "185";
        document.getElementById("job").max = "55";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 125;
            setStatCeiling(125);
        }else{
            max_stat_points = 117;
            setStatCeiling(117);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //expanded first and second job
    }else if(classValue == 47){
        base = 1;
        job = 50;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "50";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "50";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
            setStatCeiling(99);
        }else{
            max_stat_points = 80;
            setStatCeiling(80);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    }else if(classValue >= 48 && classValue <= 49){
        base = 1;
        job = 70;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "70";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 70;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "70";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
            setStatCeiling(99);
        }else{
            max_stat_points = 80;
            setStatCeiling(80);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    }else if(classValue >= 50 && classValue <= 51){
        base = 1;
        job = 50;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "50";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 50;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "50";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
            setStatCeiling(99);
        }else{
            max_stat_points = 80;
            setStatCeiling(80);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //expanded third job
    }else if(classValue >= 52 && classValue <= 56){
        base = 99;
        job = 65;
        document.getElementById("base").value = "99";
        document.getElementById("job").value = "65";

        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        document.getElementById("base").min = "99";
        document.getElementById("base").max = "185";
        document.getElementById("job").max = "65";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 125;
            setStatCeiling(125);
        }else{
            max_stat_points = 117;
            setStatCeiling(117);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //super novice
    }else if(classValue == 57){
        base = 1;
        job = 99;
        document.getElementById("base").value = "1";
        document.getElementById("job").value = "99";

        min_base_level = 1;
        max_base_level = 99;
        max_job_level = 99;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "99";
        document.getElementById("job").max = "99";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 99;
            setStatCeiling(99);
        }else{
            max_stat_points = 80;
            setStatCeiling(80);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    //expanded super novice
    }else if(classValue == 58){
        base = 99;
        job = 65;
        document.getElementById("base").value = "99";
        document.getElementById("job").value = "65";

        min_base_level = 99;
        max_base_level = 185;
        max_job_level = 65;
        document.getElementById("base").min = "99";
        document.getElementById("base").max = "185";
        document.getElementById("job").max = "65";
        stat_points_floor = 48;
        if(adopted == false){
            max_stat_points = 130;
            setStatCeiling(130);
        }else{
            max_stat_points = 117;
            setStatCeiling(117);
        }

        showAdoptedCheckbox();
        reborn = false;
        rebornCheck.checked = false;
        hideRebornCheckbox();
    }
}

//forces numeric input to fit interval even when it's typed
function fitMinMaxInputInterval(){
    if(base<min_base_level){
        base = min_base_level;
        document.getElementById("base").value = min_base_level;
    }else if(base>max_base_level){
        base = max_base_level;
        document.getElementById("base").value = max_base_level;
    }
    if(job<1){
        job = 1;
        document.getElementById("job").value = 1;
    }else if(job>max_stat_points){
        job = max_job_level;
        document.getElementById("job").value = max_job_level;
    }

    if(str<1){
        str = 1;
        document.getElementById("str").value = 1;
    }else if(str>max_stat_points){
        str = max_stat_points;
        document.getElementById("str").value = max_stat_points;
    }
    if(agi<1){
        agi = 1;
        document.getElementById("agi").value = 1;
    }else if(str>max_stat_points){
        agi = max_stat_points;
        document.getElementById("agi").value = max_stat_points;
    }
    if(vit<1){
        vit = 1;
        document.getElementById("vit").value = 1;
    }else if(vit>max_stat_points){
        vit = max_stat_points;
        document.getElementById("vit").value = max_stat_points;
    }
    if(int<1){
        int = 1;
        document.getElementById("int").value = 1;
    }else if(int>max_stat_points){
        int = max_stat_points;
        document.getElementById("int").value = max_stat_points;
    }
    if(dex<1){
        dex = 1;
        document.getElementById("dex").value = 1;
    }else if(dex>max_stat_points){
        dex = max_stat_points;
        document.getElementById("dex").value = max_stat_points;
    }
    if(luk<1){
        luk = 1;
        document.getElementById("luk").value = 1;
    }else if(luk>max_stat_points){
        luk = max_stat_points;
        document.getElementById("luk").value = max_stat_points;
    }
}

//update variables based on inputs
function getInputValues(){
    base = document.getElementById("base").value;
    job = document.getElementById("job").value;
    classValue = document.getElementById("class").value;

    str = document.getElementById("str").value;
    agi = document.getElementById("agi").value;
    vit = document.getElementById("vit").value;
    int = document.getElementById("int").value;
    dex = document.getElementById("dex").value;
    luk = document.getElementById("luk").value;

    fitMinMaxInputInterval();
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
