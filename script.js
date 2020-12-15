// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput === ""||fuelLevelInput.value===""||cargoMassInput.value==="") 
         alert("All fields are required!");
      if ((isNaN(fuelLevelInput.value))===true)
         alert("Fuel Level must be a number.");
      if ((isNaN(cargoMassInput.value))===true)
         alert("Cargo Mass must be a number.");
      if ((isNaN(pilotNameInput.value))===false)
         alert("Pilot Name cannot be numeric.");
      if ((isNaN(copilotNameInput.value))===false)
         alert("Co-Pilot Name cannot be numeric.");
         event.preventDefault();
      }
   )}
)


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
