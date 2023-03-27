var api=[{"id":99,"fullName":"Aditya Tare","shortName":"A Tare","nationality":"Indian","dateOfBirth":"1987-11-07","rightArmedBowl":true,"rightHandedBat":true},{"id":3774,"fullName":"Anukul Roy","shortName":"A Roy","nationality":"Indian","dateOfBirth":"1998-11-30","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":2965,"fullName":"Anmolpreet Singh","shortName":"A Singh","nationality":"Indian","dateOfBirth":"1998-03-28","rightArmedBowl":true,"rightHandedBat":true},{"id":179,"fullName":"Chris Lynn","shortName":"C Lynn","nationality":"Australian","dateOfBirth":"1990-04-10","rightArmedBowl":false,"rightHandedBat":true},{"id":101,"fullName":"Dhawal Kulkarni","shortName":"D Kulkarni","nationality":"Indian","dateOfBirth":"1988-12-10","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":2740,"fullName":"Hardik Pandya","shortName":"H Pandya","nationality":"Indian","dateOfBirth":"1993-10-11","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":2975,"fullName":"Ishan Kishan","shortName":"I Kishan","nationality":"Indian","dateOfBirth":"1998-07-18","rightArmedBowl":false,"rightHandedBat":false},{"id":1124,"fullName":"Jasprit Bumrah","shortName":"J Bumrah","nationality":"Indian","dateOfBirth":"1993-12-06","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1740,"fullName":"Jayant Yadav","shortName":"J Yadav","nationality":"Indian","dateOfBirth":"1990-01-22","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":210,"fullName":"Kieron Pollard","shortName":"K Pollard","nationality":"West Indian","dateOfBirth":"1987-05-12","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":3183,"fullName":"Krunal Pandya","shortName":"K Pandya","nationality":"Indian","dateOfBirth":"1991-03-24","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":4952,"fullName":"Mohsin Khan","shortName":"M Khan","nationality":"Indian","dateOfBirth":"1998-07-15","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":834,"fullName":"Quinton de Kock","shortName":"Q de Kock","nationality":"South African","dateOfBirth":"1992-12-17","rightArmedBowl":false,"rightHandedBat":false},{"id":3763,"fullName":"Rahul Chahar","shortName":"R Chahar","nationality":"Indian","dateOfBirth":"1999-08-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":107,"fullName":"Rohit Sharma","shortName":"R Sharma","nationality":"Indian","dateOfBirth":"1987-04-30","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":163,"fullName":"Saurabh Tiwary","shortName":"S Tiwary",
"nationality":"Indian","dateOfBirth":"1989-12-30","rightArmedBowl":true,"rightHandedBat":false},
{"id":108,"fullName":"Suryakumar Yadav","shortName":"S Yadav","nationality":"Indian","dateOfBirth":"1990-09-14","rightArmedBowl":true,"rightHandedBat":true},{"id":969,"fullName":"Trent Boult","shortName":"T Boult","nationality":"New Zealander","dateOfBirth":"1989-07-22","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":434,"fullName":"Adam Milne","shortName":"A Milne","nationality":"New Zealander","dateOfBirth":"1992-04-13","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":840,"fullName":"Nathan Coulter-Nile","shortName":"N Coulter-Nile","nationality":"Australian","dateOfBirth":"1987-10-11","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":76,"fullName":"Piyush Chawla","shortName":"P Chawla","nationality":"Indian","dateOfBirth":"1988-12-24","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"LEG_SPIN"},{"id":971,"fullName":"Jimmy Neesham","shortName":"J Neesham","nationality":"New Zealander","dateOfBirth":"1990-09-17","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":10842,"fullName":"Yudhvir Charak","shortName":"Y Charak","nationality":"Indian","dateOfBirth":"1997-09-13","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":17068,"fullName":"Marco Jansen","shortName":"M Jansen","nationality":"South African","dateOfBirth":"2000-05-01","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":10244,"fullName":"Arjun Tendulkar","shortName":"A Tendulkar","nationality":"Indian","dateOfBirth":"1999-09-24","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"}]




var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/migrp.jpg"
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
    
    
    
    var playerList=document.getElementById("miplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("mitable");
 var table=document.getElementById("mitable1")
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
    
    
    
    var playerList=document.getElementById("miplayers");
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