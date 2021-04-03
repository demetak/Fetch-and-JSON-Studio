window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const destination = document.getElementById("container");
            const header1 = document.getElementById("header1");
            let count = 0;
            json.sort(function(a,b){return b.hoursInSpace-a.hoursInSpace;}).forEach(astronaut => {
                count++;
                   destination.innerHTML += `
                   <div class="astronaut">
                   <div class="bio">
                      <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                      <ul>
                         <li>Hours in space: ${astronaut.hoursInSpace}</li>
                         <li><label id="active${astronaut.active}">Active: ${astronaut.active}</label></li>
                         <li>Skills: ${astronaut.skills}</li>
                      </ul>
                   </div>
                   <img class="avatar" src="${astronaut.picture}">
                </div>
                   `;
                          
            });
            header1.innerHTML='Astronauts (count:'+count+')';
        })
    })
})