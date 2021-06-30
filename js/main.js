var rgb1 , 
     rgb2 , 
     rgb3;     
var myPath = document.getElementById("path");
var length = myPath.getTotalLength();
var time = document.getElementsByClassName("time");
var sec = document.getElementsByClassName("sec");
var min = document.getElementsByClassName("min");
var hours = document.getElementsByClassName("hours");
var circle = document.querySelectorAll("circle");
var length1 = circle[0].getTotalLength();
var length2 = circle[1].getTotalLength();
var length3 = circle[2].getTotalLength();


setTimeout(() => {
    var timp = new Date();
    
    rgb1 = Math.floor(Math.random()*100) + 150;
    rgb2 = Math.floor(Math.random()*100) + 150;
    rgb3 = Math.floor(Math.random()*100) + 150;
    time[1].setAttribute("style" , "color: rgb("+ (rgb3-10) + "," + (rgb1-10) +","+(rgb2-10)+ "); text-shadow:0px 0px 15px rgb("+ (rgb3-10) + "," + (rgb1-10) +","+(rgb2-10)+ ")");
    circle[1].setAttribute("style", "stroke-dasharray:" + length2 + ";stroke-dashoffset:" + (length2 - ((timp.getMinutes()/60))*length2 ) +  ";stroke: rgb("+ (rgb3-10) + "," + (rgb1-10) +","+(rgb2-10)  + "); filter: drop-shadow( 0px 0px 10px rgba(" + (rgb2-10)+ ","  + (rgb2-10)+ "," + (rgb2-10) + ","+ "1));");

    time[0].setAttribute("style" , "color: rgb("+ (rgb3) + "," + (rgb2) +","+(rgb1)+ "); text-shadow:0px 0px 15px rgb("+ (rgb3-10) + "," + (rgb2-10) +","+(rgb1-10)+ ")");
    circle[2].setAttribute("style", "stroke-dasharray:" + (length3 +1) + ";stroke-dashoffset:" + ((length3 - ((timp.getHours()/24))*length3 ) + 1) +  ";stroke: rgb("+ (rgb3-10) + "," + (rgb2-10) +","+(rgb1-10)  + "); filter: drop-shadow( 0px 0px 10px rgba(" + (rgb3-10)+ ","  + (rgb2-10)+ "," + (rgb1-10) + ","+ "1));");
    
}, 1000);



setInterval(() => {
    rgb1 = Math.floor(Math.random()*100) + 150;
    rgb2 = Math.floor(Math.random()*100) + 150;
    rgb3 = Math.floor(Math.random()*100) + 150;
    
    var timp = new Date();
   
    if (timp.getSeconds()  == 0) {
        circle[1].setAttribute("style", "stroke-dasharray:" + length2 + ";stroke-dashoffset:" + (length2 - ((timp.getMinutes()/60))*length2 ) +  ";stroke: rgb("+ (rgb3-10) + "," + (rgb1-10) +","+(rgb2-10)  + "); filter: drop-shadow( 0px 0px 10px rgba(" + (rgb2-10)+ ","  + (rgb2-10)+ "," + (rgb2-10) + ","+ "1));");
        time[1].setAttribute("style" , "color: rgb("+ (rgb3-10) + "," + (rgb1-10) +","+(rgb2-10)+ "); text-shadow:0px 0px 15px rgb("+ (rgb3-10) + "," + (rgb1-10) +","+(rgb2-10)+ ")");
    }else{
        
    }

    if (timp.getMinutes() == 0) {
        time[2].setAttribute("style" , "color: rgb("+ (rgb3) + "," + (rgb2) +","+(rgb1)+ "); text-shadow:0px 0px 15px rgb("+ (rgb3-10) + "," + (rgb2-10) +","+(rgb1-10)+ ")");
        circle[2].setAttribute("style", "stroke-dasharray:" + length3 + ";stroke-dashoffset:" + (length3 - ((timp.getHours()/24))*length3 ) +  ";stroke: rgb("+ (rgb3-10) + "," + (rgb2-10) +","+(rgb1-10)  + "); filter: drop-shadow( 0px 0px 10px rgba(" + (rgb3-10)+ ","  + (rgb2-10)+ "," + (rgb1-10) + ","+ "1));");
    }

    // circle[0].setAttribute("style" , "stroke: rgb("+ rgb1 + "," + rgb2 +","+rgb3+ "); filter: drop-shadow( 0px 0px 20px rgba(" + rgb1+ ","  + rgb2+ "," + rgb3 + ","+ "1));");
    
    // time[2].setAttribute("style" , "color: rgb("+ rgb1 + "," + rgb2 +","+rgb3+ "); text-shadow:0px 0px 15px rgb("+ rgb1 + "," + rgb2 +","+rgb3+ ")");

    time[2].setAttribute("style" , "color: rgb("+ (rgb1) + "," + (rgb2) +","+(rgb3)+ "); text-shadow:0px 0px 15px rgb("+ (rgb1) + "," + (rgb2) +","+(rgb3)+ ")");

    circle[0].setAttribute("style", "stroke-dasharray:" + length1 + ";stroke-dashoffset:" + (length1 - ((timp.getSeconds()/60))*length1 ) +  ";stroke: rgb("+ (rgb1) + "," + (rgb2) +","+(rgb3)  + "); filter: drop-shadow( 0px 0px 10px rgba(" + (rgb1)+ ","  + (rgb2)+ "," + (rgb3) + ","+ "1));");
    

    if (timp.getSeconds() < 10) {
        sec[0].innerText =  ":"+  "0" +   timp.getSeconds();
       
    }else{
        
        sec[0].innerText =  ":" +  timp.getSeconds();
    }

    
    if (timp.getMinutes() < 10) {
        min[0].innerText = ":" +"0" +   timp.getMinutes();
    }else{
        min[0].innerText =  ":" +  timp.getMinutes();
    }

    if (timp.getHours() < 10) {
        hours[0].innerText =   "0" + timp.getHours();
    }else{
        hours[0].innerText =  timp.getHours();
    }
    
    
    
    // circle[0].classList.add("playanimation");
}, 1000);

// setInterval(() => {
    
//     var output2 = document.getElementsByClassName("output2");
//     var timp2 = new Date();
//     output2[0].innerText = Math.floor(timp2.getMilliseconds()/100);
//     output2[0].setAttribute("style" , "color: rgb("+ rgb1 + "," + rgb2 +","+rgb3+ "); text-shadow:0px 0px 15px rgb("+ rgb1 + "," + rgb2 +","+rgb3+ ")");
    
// }, 1);


// var path = document.getElementById("simple-cup");

// setTimeout(() => {
//     path.setAttribute("d" ,"M0,6.792 C0,7.192 0.9,8.492 1.9,9.592 C2.9,10.792 4.9,15.892 6.3,20.992 C9.2,31.592 12.4,36.492 17.5,38.192 C21.6,39.592 21.7,39.792 18.8,42.192 L16.5,43.992 L19.5,45.292 C24.6,47.392 37,47.592 41.6,45.692 L45.5,44.092 L43.1,42.092 C41,40.392 40.9,39.892 42.1,39.092 C42.8,38.592 44.2,38.192 45.1,38.192 C47,38.192 52.4,33.492 53.2,31.192 C53.6,29.892 53.9,29.892 55.3,30.992 C57.5,32.892 59.1,31.592 58.4,28.592 C58,26.992 58.3,26.092 59.1,25.792 C59.9,25.592 62.6,24.792 65.2,24.192 C70.7,22.692 75,18.992 75,15.492 C75,13.692 74.1,12.692 71.3,11.592 C68,10.192 67.3,10.192 63.7,11.592 C61.4,12.492 59.5,12.992 59.3,12.792 C59.1,12.692 59.9,11.292 61,9.892 L63.1,7.292 L60.5,5.592 C59,4.592 55.5,3.192 52.7,2.392 C46.3,0.692 21.5,-0.108 14.1,1.292 C8.4,2.292 0,5.592 0,6.792 Z M70,15.592 C70,18.592 65.7,22.192 62.3,22.192 C61,22.192 59,22.692 57.9,23.192 C55.9,24.292 55.5,23.592 56.6,20.792 C56.9,19.892 57.6,19.492 58.1,19.792 C58.6,20.092 60.5,18.692 62.2,16.792 C66,12.392 70,11.892 70,15.592 Z" )
// }, 1000);