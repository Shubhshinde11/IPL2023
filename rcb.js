var api=[{"id":233,"fullName":"AB de Villiers","shortName":"AB de Villiers","nationality":"South African","dateOfBirth":"1984-02-17",
"rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":958,"fullName":"Adam Zampa",
"shortName":"A Zampa","nationality":"Australian","dateOfBirth":"1992-03-31","rightArmedBowl":true,
"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":5430,"fullName":"Devdutt Padikkal","shortName":"D Padikkal",
"nationality":"Indian","dateOfBirth":"2000-07-07","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},
{"id":798,"fullName":"Kane Richardson","shortName":"K Richardson","nationality":"Australian","dateOfBirth":"1991-02-12",
"rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":3840,"fullName":"Mohammed Siraj",
"shortName":"M Siraj","nationality":"Indian","dateOfBirth":"1994-03-13","rightArmedBowl":true,"rightHandedBat":true,
"bowlingStyle":"MEDIUM_SEAM"},{"id":3824,"fullName":"Navdeep Saini","shortName":"N Saini","nationality":"Indian",
"dateOfBirth":"1992-11-23","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},
{"id":4957,"fullName":"Pavan Deshpande","shortName":"P Deshpande","nationality":"Indian","dateOfBirth":"1989-09-16",
"rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":13803,"fullName":"Shahbaz Ahmed",
"shortName":"S Ahmed","nationality":"Indian","dateOfBirth":"1994-12-11","rightArmedBowl":false,
"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":164,"fullName":"Virat Kohli","shortName":"V Kohli",
"nationality":"Indian","dateOfBirth":"1988-11-05","rightArmedBowl":true,"rightHandedBat":true,
"bowlingStyle":"MEDIUM_SEAM"},{"id":2973,"fullName":"Washington Sundar","shortName":"W Sundar",
"nationality":"Indian","dateOfBirth":"1999-10-05","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},
{"id":111,"fullName":"Yuzvendra Chahal","shortName":"Y Chahal","nationality":"Indian","dateOfBirth":"1990-07-23",
"rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},
{"id":4649,"fullName":"Daniel Sams","shortName":"D Sams","nationality":"Australian","dateOfBirth":"1992-10-27",
"rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":157,"fullName":"Harshal Patel",
"shortName":"H Patel","nationality":"Indian","dateOfBirth":"1990-11-23","rightArmedBowl":true,"rightHandedBat":true,
"bowlingStyle":"MEDIUM_SEAM"},{"id":282,"fullName":"Glenn Maxwell","shortName":"G Maxwell","nationality":"Australian",
"dateOfBirth":"1988-10-14","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},
{"id":1115,"fullName":"Sachin Baby","shortName":"S Baby","nationality":"Indian","dateOfBirth":"1988-12-18",
"rightArmedBowl":true,"rightHandedBat":false},{"id":5471,"fullName":"Rajat Patidar","shortName":"R Patidar","nationality":"Indian","dateOfBirth":"1993-06-01","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":7743,"fullName":"Mohammed Azharuddeen","shortName":"M Azharuddeen","nationality":"Indian","dateOfBirth":"1994-03-22","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1616,"fullName":"Kyle Jamieson","shortName":"K Jamieson","nationality":"New Zealander","dateOfBirth":"1994-12-30","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":181,"fullName":"Dan Christian","shortName":"D Christian","nationality":"Australian","dateOfBirth":"1983-05-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":7002,"fullName":"Suyash Prabhudessai","shortName":"S Prabhudessai","nationality":"Indian","dateOfBirth":"1997-12-06","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":2734,"fullName":"K.S Bharat","shortName":"KS Bharat","nationality":"Indian","dateOfBirth":"1993-10-03","rightArmedBowl":false,"rightHandedBat":true},{"id":3020,"fullName":"Finn Allen","shortName":"F Allen","nationality":"New Zealander","dateOfBirth":"1999-04-22","rightArmedBowl":false,"rightHandedBat":true},{"id":1859,"fullName":"Scott Kuggeleijn","shortName":"S Kuggeleijn","nationality":"New Zealander",
"dateOfBirth":"1992-01-03","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"}]


var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/rcbgrp.jpg"
    playerImage.style.width="400px";
    playerImage.style.height="300px"
    playerImage.style.borderRadius="10px"
    var playerName=document.createElement("h4");
    var DOB=document.createElement("h5");
    var playerShort=document.createElement("h5");
    var bowl=document.createElement("h5");
    var nationality=document.createElement("h5");
    var bat=document.createElement("h5");

    
    nationality.innerHTML="SELECT THE PLAYER FROM THE LIST"
    nationality.style.fontWeight="600"
    
    
    
    var playerList=document.getElementById("rcbplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("rcbtable");
 var table=document.getElementById("rcbtable1")
 var tr1=document.createElement("tr");
 var td=document.createElement("td");
 td.className="tdclass"
 tr1.className="trclass";
 td.innerHTML=Name;
 tr1.appendChild(td);
 table.appendChild(tr1);
 td.onclick=function(){sidebar()};

function sidebar(){
    {

        
    
    
    playerName.innerHTML="Name"+"   :     "+Name
    
    DOB.innerHTML="DOB "+"     :        "+rr;
    
    playerShort.innerHTML="Short Name"+"    :    "+short
    
    nationality.innerHTML="Nationality "+ "      :   " +nation
    
    bowl.innerHTML="Bowling      "+"    :   "+mm
    
    if(bats===true){
        
        bat.innerHTML="Batting   "+"    :   "+"Right handed";
         }else{
             
        bat.innerHTML="Batting   "+"    :   "+"Left handed";
         }
    
    
    
    var playerList=document.getElementById("rcbplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);
    
    };
}
}
for (var i=0;i<api.length;i++){
    tableFunction(api[i].fullName,api[i].dateOfBirth,api[i].shortName,api[i].nationality,api[i].bowlingStyle,api[i].rightHandedBat)
}
