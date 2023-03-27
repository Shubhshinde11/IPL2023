var api=[{"id":177,"fullName":"Andre Russell","shortName":"A Russell","nationality":"West Indian","dateOfBirth":"1988-04-29","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":102,"fullName":"Dinesh Karthik","shortName":"D Karthik","nationality":"Indian","dateOfBirth":"1985-06-01","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":197,"fullName":"Eoin Morgan","shortName":"E Morgan","nationality":"English","dateOfBirth":"1986-09-10","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":3766,"fullName":"Kamlesh Nagarkoti","shortName":"K Nagarkoti","nationality":"Indian","dateOfBirth":"1999-12-28","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":261,"fullName":"Kuldeep Yadav","shortName":"K Yadav","nationality":"Indian","dateOfBirth":"1994-12-14","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"UNORTHODOX"},{"id":3729,"fullName":"Lockie Ferguson","shortName":"L Ferguson","nationality":"New Zealander","dateOfBirth":"1991-06-13","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":2738,"fullName":"Nitish Rana","shortName":"N Rana","nationality":"Indian","dateOfBirth":"1993-12-27","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":488,"fullName":"Pat Cummins","shortName":"P Cummins","nationality":"Australian","dateOfBirth":"1993-05-08","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":5105,"fullName":"Prasidh Krishna","shortName":"P Krishna","nationality":"Indian","dateOfBirth":"1996-02-19","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":3838,"fullName":"Rahul Tripathi","shortName":"R Tripathi","nationality":"Indian","dateOfBirth":"1991-03-02","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":1092,"fullName":"Sandeep Warrier","shortName":"S Warrier","nationality":"Indian","dateOfBirth":"1991-04-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":3779,"fullName":"Shivam Mavi","shortName":"S Mavi","nationality":"Indian","dateOfBirth":"1998-11-26","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":3761,"fullName":"Shubman Gill","shortName":"S Gill","nationality":"Indian","dateOfBirth":"1999-09-08","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":203,"fullName":"Sunil Narine","shortName":"S Narine","nationality":"West Indian","dateOfBirth":"1988-05-26","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":1619,"fullName":"Tim Seifert","shortName":"T Seifert","nationality":"New Zealander","dateOfBirth":"1994-12-14","rightArmedBowl":false,"rightHandedBat":true},{"id":5432,"fullName":"Varun Chakaravarthy","shortName":"V Chakaravarthy","nationality":"Indian","dateOfBirth":"1991-08-29","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":201,"fullName":"Shakib Al Hasan","shortName":"S Al Hasan","nationality":"Bangladeshi","dateOfBirth":"1987-03-24","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":1116,"fullName":"Sheldon Jackson","shortName":"S Jackson","nationality":"Indian","dateOfBirth":"1986-09-27","rightArmedBowl":false,"rightHandedBat":true},{"id":14859,"fullName":"Vaibhav Arora","shortName":"V Arora","nationality":"Indian","dateOfBirth":"1997-12-14","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":276,"fullName":"Karun Nair","shortName":"K Nair","nationality":"Indian","dateOfBirth":"1991-12-06","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":103,"fullName":"Harbhajan Singh","shortName":"H Singh","nationality":"Indian","dateOfBirth":"1980-07-03","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"},{"id":913,"fullName":"Ben Cutting","shortName":"B Cutting","nationality":"Australian","dateOfBirth":"1987-01-30","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":8540,"fullName":"Venkatesh Iyer","shortName":"V Iyer","nationality":"Indian","dateOfBirth":"1994-12-25","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":53,"fullName":"Pawan Negi","shortName":"P Negi","nationality":"Indian","dateOfBirth":"1983-01-06","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":253,"fullName":"Gurkeerat Mann Singh","shortName":"GM Singh","nationality":"Indian","dateOfBirth":"1990-06-29","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"OFF_SPIN"}]



var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/kkrgrp.jpg"
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
    
    
    
    var playerList=document.getElementById("kkrplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,mm,bats){
var data=document.getElementById("kkrtable");
 var table=document.getElementById("kkrtable1")
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
