// Write your JavaScript code here!
window.addEventListener("load",  () => {
   let form = document.querySelector("form");
   form.addEventListener("submit", async function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput === ""||fuelLevelInput.value===""||cargoMassInput.value==="") 
         alert("All fields are required!");
      if ((isNaN(fuelLevelInput.value))===true)
         alert("Fuel Level must numeric.");
      if ((isNaN(cargoMassInput.value))===true)
         alert("Cargo Mass must be numeric.");
      if ((isNaN(pilotNameInput.value))===false)
         alert("Pilot Name cannot be numeric.");
      if ((isNaN(copilotNameInput.value))===false)
         alert("Co-Pilot Name cannot be numeric.");
      event.preventDefault();

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus")

      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`

      if (fuelLevelInput.value < 10000){
         faultyItems.style.visibility = "visible"
         fuelStatus.innerHTML = "Insufficient fuel for launch"
         launchStatus.style.color= "red"
         launchStatus.innerHTML = "Shuttle not ready for launch"
      }else{
         faultyItems.style.visibility = "visible"
      }

      if(cargoMassInput.value > 10000){
         faultyItems.style.visibility = "visible"
         cargoStatus.innerHTML = "Cargo mass too high for launch"
         launchStatus.style.color= "red"
         launchStatus.innerHTML = "Shuttle not ready for launch"
      }else{
         faultyItems.style.visibility = "visible"
      }
      
      if((fuelLevelInput.value > 10000) && (cargoMassInput.value < 10000)){
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
         faultyItems.style.visibility = "visible"
      }
       
      let missionTarget = document.getElementById("missionTarget");

      try{
         const res = await fetch(
           'https://handlers.education.launchcode.org/static/planets.json' 
         )
         const data = await res.json();
         
         missionTarget.innerHTML =
         `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${data[0].name}</li>
               <li>Diameter: ${data[0].diameter}</li>
               <li>Star: ${data[0].star}</li>
               <li>Distance from Earth: ${data[0].distance}</li>
               <li>Number of Moons: ${data[0].moons}</li>
            </ol>
         <img src="${data[0].image}"></img>`

      } catch (err) {
         console.error(err);
      }
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
