var api=[{"id":135,"fullName":"Ajinkya Rahane","shortName":"A Rahane","nationality":"Indian","dateOfBirth":"1988-06-06","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":30,"fullName":"Amit Mishra","shortName":"A Mishra","nationality":"Indian","dateOfBirth":"1982-11-24","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":5433,"fullName":"Anrich Nortje","shortName":"A Nortje","nationality":"South African","dateOfBirth":"1993-11-16","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1561,"fullName":"Avesh Khan","shortName":"A Khan","nationality":"Indian","dateOfBirth":"1996-12-13","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1113,"fullName":"Axar Patel","shortName":"A Patel","nationality":"Indian","dateOfBirth":"1994-01-20","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":967,"fullName":"Chris Woakes","shortName":"C Woakes","nationality":"English","dateOfBirth":"1989-03-02","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":38,"fullName":"Ishant Sharma","shortName":"I Sharma","nationality":"Indian","dateOfBirth":"1988-09-02","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1664,"fullName":"Kagiso Rabada","shortName":"K Rabada","nationality":"South African","dateOfBirth":"1995-05-25","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":6870,"fullName":"Lalit Yadav","shortName":"L Yadav","nationality":"Indian","dateOfBirth":"1997-01-03","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":964,"fullName":"Marcus Stoinis","shortName":"M Stoinis","nationality":"Australian","dateOfBirth":"1989-08-16","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":3188,"fullName":"Pravin Dubey","shortName":"P Dubey","nationality":"Indian","dateOfBirth":"1993-07-01","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":3764,"fullName":"Prithvi Shaw","shortName":"P Shaw","nationality":"Indian","dateOfBirth":"1999-11-09","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":8,"fullName":"Ravichandran Ashwin","shortName":"R Ashwin","nationality":"Indian","dateOfBirth":"1986-09-17","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":2972,"fullName":"Rishabh Pant","shortName":"R Pant","nationality":"Indian","dateOfBirth":"1997-10-04","rightArmedBowl":false,"rightHandedBat":false},{"id":41,"fullName":"Shikhar Dhawan","shortName":"S Dhawan","nationality":"Indian","dateOfBirth":"1985-12-05","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":1705,"fullName":"Shimron Hetmyer","shortName":"S Hetmyer","nationality":"West Indian","dateOfBirth":"1996-12-26","rightArmedBowl":false,"rightHandedBat":false},{"id":1563,"fullName":"Shreyas Iyer","shortName":"S Iyer","nationality":"Indian","dateOfBirth":"1994-12-06","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":271,"fullName":"Steve Smith","shortName":"S Smith","nationality":"Australian","dateOfBirth":"1989-06-02","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":59,"fullName":"Umesh Yadav","shortName":"U Yadav","nationality":"Indian","dateOfBirth":"1987-10-25","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":17191,"fullName":"Ripal Patel","shortName":"R Patel","nationality":"Indian","dateOfBirth":"1995-09-28","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":4305,"fullName":"Vishnu Vinod","shortName":"V Vinod","nationality":"Indian","dateOfBirth":"1993-12-02","rightArmedBowl":true,"rightHandedBat":true},{"id":7803,"fullName":"Lukman Meriwala","shortName":"L Meriwala","nationality":"Indian","dateOfBirth":"1991-12-11","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":7119,"fullName":"M Siddharth","shortName":"M Siddharth","nationality":"Indian","dateOfBirth":"1998-07-03","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"ORTHODOX"},{"id":3646,"fullName":"Tom Curran","shortName":"T Curran","nationality":"English","dateOfBirth":"1995-03-12","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":2756,"fullName":"Sam Billings","shortName":"S Billings","nationality":"English","dateOfBirth":"1991-06-15","rightArmedBowl":true,"rightHandedBat":true},{"id":6800,"fullName":"Shams Mulani","shortName":"S Mulani","nationality":"Indian","dateOfBirth":"1997-03-13","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":4949,"fullName":"Aniruddha Joshi","shortName":"A Joshi","nationality":"Indian","dateOfBirth":"1987-11-07","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"}]



var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/dcgrp.jpg"
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
    
    
    
    var playerList=document.getElementById("dcplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("dctable");
 var table=document.getElementById("dctable1")
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
