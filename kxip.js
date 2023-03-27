var api=[{"id":4698,"fullName":"Arshdeep Singh","shortName":"A Singh","nationality":"Indian","dateOfBirth":"1999-02-05","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":236,"fullName":"Chris Gayle","shortName":"C Gayle","nationality":"West Indian","dateOfBirth":"1979-09-21","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":1299,"fullName":"Chris Jordan","shortName":"C Jordan","nationality":"English","dateOfBirth":"1988-10-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":4447,"fullName":"Darshan Nalkande","shortName":"D Nalkande","nationality":"Indian","dateOfBirth":"1998-10-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1556,"fullName":"Deepak Hooda","shortName":"D Hooda","nationality":"Indian","dateOfBirth":"1995-04-19","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":5441,"fullName":"Harpreet Brar","shortName":"H Brar","nationality":"Indian","dateOfBirth":"1995-09-16","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":3777,"fullName":"Ishan Porel","shortName":"I Porel","nationality":"Indian","dateOfBirth":"1998-09-05","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":1125,"fullName":"KL Rahul","shortName":"KL Rahul","nationality":"Indian","dateOfBirth":"1992-04-18","rightArmedBowl":true,"rightHandedBat":true},{"id":72,"fullName":"Mandeep Singh","shortName":"M Singh","nationality":"Indian","dateOfBirth":"1991-12-18","rightArmedBowl":true,"rightHandedBat":true},{"id":158,"fullName":"Mayank Agarwal","shortName":"M Agarwal","nationality":"Indian","dateOfBirth":"1991-02-18","rightArmedBowl":true,"rightHandedBat":true},{"id":94,"fullName":"Mohammad Shami","shortName":"M Shami","nationality":"Indian","dateOfBirth":"1990-09-03","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":3187,"fullName":"Murugan Ashwin","shortName":"M Ashwin","nationality":"Indian","dateOfBirth":"1990-09-08","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":1703,"fullName":"Nicholas Pooran","shortName":"N Pooran","nationality":"West Indian","dateOfBirth":"1995-10-02","rightArmedBowl":false,"rightHandedBat":false},{"id":5436,"fullName":"Prabhsimran Singh","shortName":"P Singh","nationality":"Indian","dateOfBirth":"2000-08-10","rightArmedBowl":true,"rightHandedBat":true},{"id":19351,"fullName":"Ravi Bishnoi","shortName":"R Bishnoi","nationality":"Indian","dateOfBirth":"2000-09-05","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":1564,"fullName":"Sarfaraz Khan","shortName":"SN Khan","nationality":"Indian","dateOfBirth":"1997-10-22","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":3318,"fullName":"Dawid Malan","shortName":"D Malan","nationality":"English","dateOfBirth":"1987-09-03","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"LEG_SPIN"},{"id":3781,"fullName":"Jhye Richardson","shortName":"J Richardson","nationality":"Australian","dateOfBirth":"1996-09-20","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":7779,"fullName":"Shahrukh Khan","shortName":"S Khan","nationality":"Indian","dateOfBirth":"1995-05-27","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":4055,"fullName":"Riley Meredith","shortName":"R Meredith","nationality":"Australian","dateOfBirth":"1996-06-21","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":388,"fullName":"Moises Henriques","shortName":"M Henriques","nationality":"Australian","dateOfBirth":"1987-02-01","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":1087,"fullName":"Jalaj Saxena","shortName":"J Saxena","nationality":"Indian","dateOfBirth":"1986-12-15","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":3841,"fullName":"Utkarsh Singh","shortName":"U Singh","nationality":"Indian","dateOfBirth":"1998-05-07","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":1707,"fullName":"Fabian Allen","shortName":"F Allen","nationality":"West Indian","dateOfBirth":"1995-05-07","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"ORTHODOX"},{"id":3836,"fullName":"Saurabh Kumar","shortName":"S Kumar","nationality":"Indian","dateOfBirth":"1993-05-01","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"}]


var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/kxipgrp.jpg"
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
    
    
    
    var playerList=document.getElementById("kx11pplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("kx11ptable");
 var table=document.getElementById("kx11ptable1")
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
