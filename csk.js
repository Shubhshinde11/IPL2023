var api=[{"id":100,"fullName":"Ambati Rayudu","shortName":"A Rayudu","nationality":"Indian","dateOfBirth":"1985-09-23",
"rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":4944,"fullName":"KM Asif",
"shortName":"KM Asif","nationality":"Indian","dateOfBirth":"1993-07-24","rightArmedBowl":true,"rightHandedBat":true,
"bowlingStyle":"MEDIUM_SEAM"},{"id":25,"fullName":"Dwayne Bravo","shortName":"DJ Bravo","nationality":"West Indian",
"dateOfBirth":"1983-10-07","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},
{"id":140,"fullName":"Deepak Chahar","shortName":"D Chahar","nationality":"Indian","dateOfBirth":"1992-08-07",
"rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":24,"fullName":"Faf du Plessis",
"shortName":"F du Plessis","nationality":"South African","dateOfBirth":"1984-07-13","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":898,"fullName":"Imran Tahir","shortName":"I Tahir","nationality":"South African","dateOfBirth":"1979-03-27","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":4942,"fullName":"Narayan Jagadeesan","shortName":"N Jagadeesan","nationality":"Indian","dateOfBirth":"1995-12-24","rightArmedBowl":true,"rightHandedBat":true},{"id":1118,"fullName":"Karn Sharma","shortName":"K Sharma","nationality":"Indian","dateOfBirth":"1987-10-23","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"LEG_SPIN"},{"id":3746,"fullName":"Lungi Ngidi","shortName":"L Ngidi","nationality":"South African","dateOfBirth":"1996-03-29","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1903,"fullName":"Mitchell Santner","shortName":"M Santner","nationality":"New Zealander","dateOfBirth":"1992-02-05","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":1,"fullName":"MS Dhoni","shortName":"MS Dhoni","nationality":"Indian","dateOfBirth":"1981-07-07","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":7123,"fullName":"R Sai Kishore","shortName":"RS Kishore","nationality":"Indian","dateOfBirth":"1996-11-06","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":9,"fullName":"Ravindra Jadeja","shortName":"R Jadeja","nationality":"Indian","dateOfBirth":"1988-12-06","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":127,"fullName":"Robin Uthappa","shortName":"R Uthappa","nationality":"Indian","dateOfBirth":"1985-11-11","rightArmedBowl":true,"rightHandedBat":true},{"id":5443,"fullName":"Ruturaj Gaikwad","shortName":"R Gaikwad","nationality":"Indian","dateOfBirth":"1997-01-31","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":2939,"fullName":"Sam Curran","shortName":"S Curran","nationality":"English","dateOfBirth":"1998-06-03","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":1745,"fullName":"Shardul Thakur","shortName":"S Thakur","nationality":"Indian","dateOfBirth":"1991-10-16","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":14,"fullName":"Suresh Raina","shortName":"S Raina","nationality":"Indian","dateOfBirth":"1986-11-27","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":1735,"fullName":"Moeen Ali","shortName":"M Ali","nationality":"English","dateOfBirth":"1987-06-18","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":3834,"fullName":"Krishnappa Gowtham","shortName":"K Gowtham","nationality":"Indian","dateOfBirth":"1988-10-20","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":156,"fullName":"Cheteshwar Pujara","shortName":"C Pujara","nationality":"Indian","dateOfBirth":"1988-01-25","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":9474,"fullName":"Harishankar Reddy","shortName":"H Reddy","nationality":"Indian","dateOfBirth":"1998-06-02","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":7111,"fullName":"C Hari Nishaanth","shortName":"C Hari Nishaanth","nationality":"Indian","dateOfBirth":"1996-08-16","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":7105,"fullName":"Bhagath Varma","shortName":"B Varma","nationality":"Indian","dateOfBirth":"1998-09-21","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":937,"fullName":"Jason Behrendorff","shortName":"J Behrendorff","nationality":"Australian","dateOfBirth":"1990-04-20","rightArmedBowl":false,"rightHandedBat":true,
"bowlingStyle":"FAST_SEAM"}]

var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/cskgrp.jpg"

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
    
    
    
    var playerList=document.getElementById("cskplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("csktable");
 var table=document.getElementById("csktable1")
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
    
    
    
    var playerList=document.getElementById("cskplayers");
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