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

var jobData = [
    //base job
    {
        "classValue": "0",
        "jobBonuses": [1, 1, 1, 1, 1, 1]
    },
    //first job
    {
        "classValue": "1",
        "jobBonuses": [7, 2, 4, 0, 3, 2]
    },
    {
        "classValue": "2",
        "jobBonuses": [0, 4, 0, 8, 3, 3]
    },
    {
        "classValue": "3",
        "jobBonuses": [3, 3, 1, 2, 7, 2]
    },
    {
        "classValue": "4",
        "jobBonuses": [5, 1, 4, 1, 5, 2]
    },
    {
        "classValue": "5",
        "jobBonuses": [4, 4, 2, 1, 4, 3]
    },
    {
        "classValue": "6",
        "jobBonuses": [3, 2, 3, 3, 3, 4]
    },
    //second job
    {
        "classValue": "7",
        "jobBonuses": [8, 2, 10, 0, 6, 4]
    },
    {
        "classValue": "8",
        "jobBonuses": [1, 8, 1, 12, 6, 2]
    },
    {
        "classValue": "9",
        "jobBonuses": [4, 6, 2, 4, 10, 4]
    },
    {
        "classValue": "10",
        "jobBonuses": [6, 2, 6, 2, 12, 2]
    },
    {
        "classValue": "11",
        "jobBonuses": [6, 10, 2, 4, 8, 0]
    },
    {
        "classValue": "12",
        "jobBonuses": [5, 4, 5, 5, 4, 7]
    },
    {
        "classValue": "13",
        "jobBonuses": [7, 2, 7, 6, 3, 5]
    },
    {
        "classValue": "14",
        "jobBonuses": [5, 5, 3, 9, 5, 3]
    },
    {
        "classValue": "15",
        "jobBonuses": [2, 7, 3, 5, 9, 4]
    },
    {
        "classValue": "16",
        "jobBonuses": [2, 7, 3, 5, 5, 8]
    },
    {
        "classValue": "17",
        "jobBonuses": [5, 6, 3, 7, 9, 0]
    },
    {
        "classValue": "18",
        "jobBonuses": [6, 7, 6, 4, 7, 0]
    },
    {
        "classValue": "19",
        "jobBonuses": [8, 7, 6, 2, 4, 3]
    },
    //second job (trans)
    {
        "classValue": "20",
        "jobBonuses": [15, 8, 8, 2, 9, 3]
    },
    {
        "classValue": "21",
        "jobBonuses": [3, 8, 5, 17, 9, 3]
    },
    {
        "classValue": "22",
        "jobBonuses": [4, 11, 3, 5, 14, 8]
    },
    {
        "classValue": "23",
        "jobBonuses": [6, 7, 6, 6, 12, 8]
    },
    {
        "classValue": "24",
        "jobBonuses": [9, 15, 3, 0, 10, 8]
    },
    {
        "classValue": "25",
        "jobBonuses": [7, 8, 7, 12, 9, 2]
    },
    {
        "classValue": "26",
        "jobBonuses": [9, 8, 10, 7, 8, 3]
    },
    {
        "classValue": "27",
        "jobBonuses": [6, 9, 4, 13, 11, 2]
    },
    {
        "classValue": "28",
        "jobBonuses": [8, 12, 2, 5, 14, 4]
    },
    {
        "classValue": "29",
        "jobBonuses": [6, 14, 2, 5, 16, 2]
    },
    {
        "classValue": "30",
        "jobBonuses": [4, 6, 3, 7, 14, 11]
    },
    {
        "classValue": "31",
        "jobBonuses": [9, 11, 4, 3, 12, 6]
    },
    {
        "classValue": "32",
        "jobBonuses": [9, 9, 7, 7, 10, 3]
    },
    //third job
    {
        "classValue": "33",
        "jobBonuses": [6, 6, 7, 10, 9, 5]
    },
    {
        "classValue": "34",
        "jobBonuses": [1, 7, 8, 15, 8, 4]
    },
    {
        "classValue": "35",
        "jobBonuses": [2, 12, 8, 9, 8, 4]
    },
    {
        "classValue": "36",
        "jobBonuses": [10, 6, 10, 6, 5, 6]
    },
    {
        "classValue": "37",
        "jobBonuses": [8, 11, 6, 5, 9, 4]
    },
    {
        "classValue": "38",
        "jobBonuses": [6, 7, 7, 12, 7, 4]
    },
    {
        "classValue": "39",
        "jobBonuses": [9, 3, 9, 10, 9, 3]
    },
    {
        "classValue": "40",
        "jobBonuses": [4, 4, 8, 13, 9, 5]
    },
    {
        "classValue": "41",
        "jobBonuses": [7, 7, 7, 9, 10, 3]
    },
    {
        "classValue": "42",
        "jobBonuses": [7, 9, 7, 9, 9, 2]
    },
    {
        "classValue": "43",
        "jobBonuses": [5, 6, 8, 12, 8, 4]
    },
    {
        "classValue": "44",
        "jobBonuses": [8, 9, 8, 6, 6, 6]
    },
    {
        "classValue": "45",
        "jobBonuses": [10, 10, 6, 8, 8, 1]
    },
    //expanded base job
    {
        "classValue": "46",
        "jobBonuses": [0, 7, 5, 9, 12, 5]
    },
    //expanded first job
    {
        "classValue": "47",
        "jobBonuses": [6, 6, 0, 0, 6, 0]
    },
    {
        "classValue": "48",
        "jobBonuses": [1, 8, 1, 5, 6, 4]
    },
    {
        "classValue": "49",
        "jobBonuses": [4, 1, 1, 2, 9, 7]
    },
    //expanded second job
    {
        "classValue": "50",
        "jobBonuses": [12, 12, 0, 0, 6, 0]
    },
    {
        "classValue": "51",
        "jobBonuses": [0, 0, 6, 12, 12, 0]
    },
    //expanded third job
    {
        "classValue": "52",
        "jobBonuses": [12, 10, 6, 3, 9, 3]
    },
    {
        "classValue": "53",
        "jobBonuses": [3, 7, 7, 11, 13, 2]
    },
    {
        "classValue": "54",
        "jobBonuses": [7, 10, 6, 6, 9, 5]
    },
    {
        "classValue": "55",
        "jobBonuses": [7, 10, 6, 6, 8, 6]
    },
    {
        "classValue": "56",
        "jobBonuses": [3, 8, 6, 8, 11, 7]
    },
    //super novice branch
    {
        "classValue": "57",
        "jobBonuses": [5, 5, 5, 5, 5, 5]
    },
    {
        "classValue": "58",
        "jobBonuses": [7, 7, 6, 6, 6, 5]
    }
]

//calculate stat gain on level up
function calcStatGain(level){
    if(level > 0 && level == 1){
        return 0;
    }else if(level <= 100){
        return 3 + Math.floor((level-1)/5);
    }else if(level <= 150){
        return 23 + Math.floor((level-101)/10);
    }else if(level <= 200){
        return 28 + Math.floor((level-151)/7);
    }
}

/*
    fills array indexes with total of stat points gained upon leveling (floor not counted)
    ex.: level 1 = index 0 = 0, level 2 = index 1 = 3, ...
*/
function fillStatPointsArray(){
    stat_points_per_level.push(0);
    for(var i=1;i<200;i++){
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
    document.getElementById("bonus-str").innerHTML = "+" + jobData[classValue].jobBonuses[0];
    document.getElementById("bonus-agi").innerHTML = "+" + jobData[classValue].jobBonuses[1];
    document.getElementById("bonus-vit").innerHTML = "+" + jobData[classValue].jobBonuses[2];
    document.getElementById("bonus-int").innerHTML = "+" + jobData[classValue].jobBonuses[3];
    document.getElementById("bonus-dex").innerHTML = "+" + jobData[classValue].jobBonuses[4];
    document.getElementById("bonus-luk").innerHTML = "+" + jobData[classValue].jobBonuses[5];
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
        document.getElementById("job").value = "70";

        min_base_level = 99;
        max_base_level = 200;
        max_job_level = 65;
        document.getElementById("base").min = "99";
        document.getElementById("base").max = "200";
        document.getElementById("job").max = "70";
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
        document.getElementById("job").value = "60";

        min_base_level = 1;
        max_base_level = 200;
        max_job_level = 55;
        document.getElementById("base").min = "1";
        document.getElementById("base").max = "200";
        document.getElementById("job").max = "60";
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
    //taekwon
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
    //ninja and gunslinger
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
    //expanded second job
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
        document.getElementById("job").value = "70";

        min_base_level = 99;
        max_base_level = 200;
        max_job_level = 65;
        document.getElementById("base").min = "99";
        document.getElementById("base").max = "200";
        document.getElementById("job").max = "70";
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
        document.getElementById("job").value = "70";

        min_base_level = 99;
        max_base_level = 200;
        max_job_level = 65;
        document.getElementById("base").min = "99";
        document.getElementById("base").max = "200";
        document.getElementById("job").max = "70";
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
