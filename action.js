//--Create a Prompt That ask  the user for their Archetype// --Done//
//-- Add an If/ELSE for the different inpupts user use//
//---Add Alerts inside of the IF/ELSE--//

let typeSelctor = prompt("Which Archetype are you in Game Development?, Please Enter one of the Following Types : Knight, Mage, Rogue or Ranger.");
function archetypeChecker(){
if(typeSelctor === "Knight"){
    alert("Role: Builds and protects the core systems of the game.")
}
else if(typeSelctor === "Rogue"){
alert("Role: Agile, fast, and self-reliant; builds games end-to-end")
}
else if(typeSelctor === "Mage"){
alert("Role: Wields the arcane arts of balance, storytelling, and gameplay systems")
}
else if(typeSelctor === "Ranger"){
alert("Role: Bridges tech and art, sharp with visuals and UX")
}
else{
alert("Sorry, Refresh screen and try again.")
}
}
archetypeChecker();