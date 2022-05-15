var creatingElement = function (){
    let rainContainer= document.getElementById("rainContainer");
    let oneRainDrop = document.createElement("div");
    oneRainDrop.style.position = "absolute";
    oneRainDrop.style.width =  `${String(Math.random()*6 + 1)}px`;
    let rainHeight = String(Math.random()*200 + 50);
    oneRainDrop.style.height = `${rainHeight}px`;
    oneRainDrop.style.background = generateRandomColor();
    oneRainDrop.style.borderRadius = "4px";

    let xRainShifting = String(Math.random()*(window.innerWidth-10) + 10);
    oneRainDrop.style.transform = `translate(${xRainShifting}px,${-rainHeight}px)`;
    rainContainer.appendChild(oneRainDrop);
    startTheRaining(oneRainDrop,xRainShifting,rainHeight);
}
var startTheRaining = function (element,xDirectionTranslate,rainHeight){
    rainHeight = -1*parseFloat(rainHeight);
    let dropDuration = Math.random()*700 + 100;
    let howFarTheRain = rainHeight;
    element.style.transition = `transform ${dropDuration}ms linear`;
    let dropPeriod = setInterval(function(){
        element.style.transform = `translate(${xDirectionTranslate}px,${howFarTheRain}px)`;
        howFarTheRain+=100;
        // console.log("hey jerk:",howFarTheRain);
        if((howFarTheRain+rainHeight)>window.innerHeight){
            console.log("Passed")
            element.remove();
            clearInterval(dropPeriod);
        }
    },dropDuration);
}
function generateRandomColor(){
    let r = parseInt(Math.random()*255+10);
    let g = parseInt(Math.random()*255+10);
    let b = parseInt(Math.random()*255+10);
    return `linear-gradient(0deg, rgba(${r},${g},${b},1) 20%, rgba(0,0,0,1) 100%)`;
}
setInterval(() => {
    creatingElement();
}, 50);