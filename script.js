import data from './data.json' assert {type:'json'};

let nameActivities = document.querySelectorAll(".actualInfo_span");
let actualInfo_h2 = document.querySelectorAll(".actualInfo_h2");
let lastInfo_label = document.querySelectorAll(".content_label");

let timeOptions = document.querySelectorAll(".divTime_spanTime");

showNormalData();


timeOptions[0].addEventListener("click", () => dataSelection("daily"));
timeOptions[1].addEventListener("click", () => dataSelection("weekly"));
timeOptions[2].addEventListener("click", () => dataSelection("monthly"));


function dataSelection(typeData){
    
    switch(typeData){

        case "weekly": 
            
            showWeeklyData();
            console.log("weekly");
            break;

        case "daily" : 
               
            showDailyData();
            console.log("daily");
            break;
            
        case "monthly":
               
            showMonthlyData();
            console.log("monthly");
            break;
        default: console.log("default");
    }
          
}

function showNormalData(){

    for(let i = 0 ; i < nameActivities.length;i++){

        nameActivities[i].textContent=data[i].title;
        actualInfo_h2[i].textContent = "-- hrs";
        lastInfo_label[i].textContent = `Last week : -- hrs`;
        
    }

}


function showWeeklyData(){

    for(let i = 0 ; i < nameActivities.length;i++){

        nameActivities[i].textContent=data[i].title;
        actualInfo_h2[i].textContent = data[i].timeframes.weekly.current + "hrs";
        lastInfo_label[i].textContent = `Last week - ${data[i].timeframes.weekly.previous} hrs`;
        
    }
}

function showDailyData(){
    
    for(let i = 0 ; i < nameActivities.length;i++){

        nameActivities[i].textContent=data[i].title;
        actualInfo_h2[i].textContent = data[i].timeframes.daily.current + "hrs";
        lastInfo_label[i].textContent = `Last day - ${data[i].timeframes.daily.previous} hrs`;
        
    }
}

function showMonthlyData(){

    for(let i = 0 ; i < nameActivities.length;i++){

        nameActivities[i].textContent=data[i].title;
        actualInfo_h2[i].textContent = data[i].timeframes.monthly.current + "hrs";
        lastInfo_label[i].textContent = `Last month - ${data[i].timeframes.monthly.previous} hrs`;

    }


}

