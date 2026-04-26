const search = document.getElementById("searchText");
const profContainer = document.getElementById("cardContainer");

import { profiles } from "./profiles.js";

updateProfileContainer("");

//  Search input responsiveness.
search.addEventListener("input", function(){
    let searchText = search.value;
    console.log(searchText);

    updateProfileContainer(searchText);
})


function updateProfileContainer(searchText){
    profContainer.innerHTML = "";

    profiles.forEach(function(profile){
        let profileName = profile.name.toLowerCase();
        let filter = searchText.toLowerCase();
        if (profileName.startsWith(filter)){
            const card = document.createElement("div");
            card.className = "person-card";
            card.onclick = function (){
                console.log(profile.id);
                if (profile.access)
                    window.location.href = `profile.html?id=${profile.id}`;
                else
                    window.location.href = `/access-denied.html`;
            }

            card.innerHTML = `
            <div class="name">${profile.name}</div>
            <div class="name">id: ${profile.id}</div>`

            profContainer.appendChild(card);
        }
    })  
}



