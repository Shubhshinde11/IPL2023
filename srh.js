var api=[{"id":19352,"fullName":"Abdul Samad","shortName":"A Samad","nationality":"Indian","dateOfBirth":"2001-10-28","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":3760,"fullName":"Abhishek Sharma","shortName":"A Sharma","nationality":"Indian","dateOfBirth":"2000-09-04","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":3825,"fullName":"Basil Thampi","shortName":"B Thampi","nationality":"Indian","dateOfBirth":"1993-09-11","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":116,"fullName":"Bhuvneshwar Kumar","shortName":"B Kumar","nationality":"Indian","dateOfBirth":"1990-02-05","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":170,"fullName":"David Warner","shortName":"D Warner","nationality":"Australian","dateOfBirth":"1986-10-27","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"LEG_SPIN"},{"id":1075,"fullName":"Jason Holder","shortName":"J Holder","nationality":"West Indian","dateOfBirth":"1991-11-05","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":506,"fullName":"Jonny Bairstow","shortName":"J Bairstow","nationality":"English","dateOfBirth":"1989-09-26","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":440,"fullName":"Kane Williamson","shortName":"K Williamson","nationality":"New Zealander","dateOfBirth":"1990-08-08","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":123,"fullName":"Manish Pandey","shortName":"M Pandey","nationality":"Indian","dateOfBirth":"1989-09-10","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":618,"fullName":"Mohammad Nabi","shortName":"M Nabi","nationality":"Afghan","dateOfBirth":"1985-01-01","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":3775,"fullName":"Priyam Garg","shortName":"P Garg","nationality":"Indian","dateOfBirth":"2000-11-30","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":2885,"fullName":"Rashid Khan","shortName":"R Khan","nationality":"Afghan","dateOfBirth":"1998-09-20","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":1112,"fullName":"Sandeep Sharma","shortName":"S Sharma","nationality":"Indian","dateOfBirth":"1993-05-18","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":57,"fullName":"Shahbaz Nadeem","shortName":"S Nadeem","nationality":"Indian","dateOfBirth":"1989-08-12","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"ORTHODOX"},{"id":95,"fullName":"Shreevats Goswami","shortName":"S Goswami","nationality":"Indian","dateOfBirth":"1989-05-18","rightArmedBowl":false,"rightHandedBat":false},{"id":1086,"fullName":"Siddarth Kaul","shortName":"S Kaul","nationality":"Indian","dateOfBirth":"1990-05-19","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":2964,"fullName":"Khaleel Ahmed","shortName":"K Ahmed","nationality":"Indian","dateOfBirth":"1997-12-05","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":3831,"fullName":"T Natarajan","shortName":"T Natarajan","nationality":"Indian","dateOfBirth":"1991-05-27","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":1083,"fullName":"Vijay Shankar","shortName":"V Shankar","nationality":"Indian","dateOfBirth":"1991-01-26","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":6966,"fullName":"Virat Singh","shortName":"V Singh","nationality":"Indian","dateOfBirth":"1997-12-08","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":16,"fullName":"Wriddhiman Saha","shortName":"W Saha","nationality":"Indian","dateOfBirth":"1984-10-24","rightArmedBowl":true,"rightHandedBat":true},{"id":2741,"fullName":"Jagadeesha Suchith","shortName":"J Suchith","nationality":"Indian","dateOfBirth":"1994-01-16","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":297,"fullName":"Kedar Jadhav","shortName":"K Jadhav","nationality":"Indian","dateOfBirth":"1985-03-26","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":4572,"fullName":"Mujeeb Ur Rahman","shortName":"M Ur Rahman","nationality":"Afghan","dateOfBirth":"2001-03-28","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":1906,"fullName":"Jason Roy","shortName":"J Roy","nationality":"English","dateOfBirth":"1990-07-21","rightArmedBowl":true,"rightHandedBat":true}]



var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/srhgrp.jpg"
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
    
    
    
    var playerList=document.getElementById("srhplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("srhtable");
 var table=document.getElementById("srhtable1")
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
    
    
    
    var playerList=document.getElementById("srhplayers");
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
