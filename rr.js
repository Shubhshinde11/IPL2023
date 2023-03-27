var api=[{"id":1480,"fullName":"Andrew Tye","shortName":"A Tye","nationality":"Australian","dateOfBirth":"1986-12-12","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":10788,"fullName":"Anuj Rawat","shortName":"A Rawat","nationality":"Indian","dateOfBirth":"1999-10-17","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":1154,"fullName":"Ben Stokes","shortName":"B Stokes","nationality":"English","dateOfBirth":"1991-06-04","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":187,"fullName":"David Miller","shortName":"D Miller","nationality":"South African","dateOfBirth":"1989-06-10","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"OFF_SPIN"},{"id":86,"fullName":"Jaydev Unadkat","shortName":"J Unadkat","nationality":"Indian","dateOfBirth":"1991-10-18","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"MEDIUM_SEAM"},{"id":3502,"fullName":"Jofra Archer","shortName":"J Archer","nationality":"English","dateOfBirth":"1995-04-01","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":509,"fullName":"Jos Buttler","shortName":"J Buttler","nationality":"English","dateOfBirth":"1990-09-08","rightArmedBowl":true,"rightHandedBat":true},{"id":10059,"fullName":"Kartik Tyagi","shortName":"K Tyagi","nationality":"Indian","dateOfBirth":"2000-11-08","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":2970,"fullName":"Mahipal Lomror","shortName":"M Lomror","nationality":"Indian","dateOfBirth":"1999-11-16","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"ORTHODOX"},{"id":1085,"fullName":"Manan Vohra","shortName":"M Vohra","nationality":"Indian","dateOfBirth":"1993-07-18","rightArmedBowl":false,"rightHandedBat":true},{"id":4951,"fullName":"Mayank Markande","shortName":"M Markande","nationality":"Indian","dateOfBirth":"1997-11-11","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":1749,"fullName":"Rahul Tewatia","shortName":"R Tewatia","nationality":"Indian","dateOfBirth":"1993-05-20","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"LEG_SPIN"},{"id":4445,"fullName":"Riyan Parag","shortName":"R Parag","nationality":"Indian","dateOfBirth":"2001-11-10","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":258,"fullName":"Sanju Samson","shortName":"S Samson","nationality":"Indian","dateOfBirth":"1994-11-11","rightArmedBowl":true,"rightHandedBat":true},{"id":1748,"fullName":"Shreyas Gopal","shortName":"S Gopal","nationality":"Indian","dateOfBirth":"1993-09-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":13538,"fullName":"Yashasvi Jaiswal","shortName":"Y Jaiswal","nationality":"Indian","dateOfBirth":"2001-12-28","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":5431,"fullName":"Shivam Dube","shortName":"S Dube","nationality":"Indian","dateOfBirth":"1993-06-26","rightArmedBowl":true,"rightHandedBat":false,"bowlingStyle":"MEDIUM_SEAM"},{"id":836,"fullName":"Chris Morris","shortName":"C Morris","nationality":"South African","dateOfBirth":"1987-04-30","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":1594,"fullName":"Mustafizur Rahman","shortName":"M Rahman","nationality":"Bangladeshi","dateOfBirth":"1995-09-06","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":11062,"fullName":"Chetan Sakariya","shortName":"C Sakariya","nationality":"Indian","dateOfBirth":"1998-02-28","rightArmedBowl":false,"rightHandedBat":false,"bowlingStyle":"FAST_SEAM"},{"id":2743,"fullName":"KC Cariappa","shortName":"KC Cariappa","nationality":"Indian","dateOfBirth":"1994-04-13","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":3644,"fullName":"Liam Livingstone","shortName":"L Livingstone","nationality":"English","dateOfBirth":"1993-08-04","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"LEG_SPIN"},{"id":12480,"fullName":"Kuldip Yadav","shortName":"K Yadav","nationality":"Indian","dateOfBirth":"1996-10-15","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":12585,"fullName":"Akash Singh","shortName":"A Singh","nationality":"Indian","dateOfBirth":"2002-04-26","rightArmedBowl":false,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"},{"id":4567,"fullName":"Gerald Coetzee","shortName":"G Coetzee","nationality":"South African","dateOfBirth":"2000-10-02","rightArmedBowl":true,"rightHandedBat":true,"bowlingStyle":"FAST_SEAM"}]


var playerImage=document.createElement("img");
playerImage.className="playerName";
playerImage.src="./images/rrgp.jpg"
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
    
    
    
    var playerList=document.getElementById("rrplayers");
    playerList.appendChild(playerImage);
    playerList.appendChild(playerName);
    playerList.appendChild(DOB);
    playerList.appendChild(playerShort);
    playerList.appendChild(nationality);
    playerList.appendChild(bowl);
    playerList.appendChild(bat);




function tableFunction(Name,rr,short,nation,bats){
var data=document.getElementById("rrtable");
 var table=document.getElementById("rrtable1")
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
    
    
    
    var playerList=document.getElementById("rrplayers");
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
