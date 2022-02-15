// Filter method Example

// Example 1 Filter Method with Static Data
import teams from "./data/teams.js";
console.log(teams);

//2. select the teams-container class
//3. select the search class

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

//4. assign the teams data to a variable

let teamsToRender = teams;

//5. loop on the array and inject data to the DOM teamContainer

function renderTeams(someArr) {
  //clear the teamContainer
  teamContainer.innerHTML = "";
  for (let j = 0; j < someArr.length; j++) {
    console.log(someArr[j]);
    teamContainer.innerHTML += `<div class="team"><h3>${someArr[j].full_name}</h3></div>`;
  }
}

renderTeams(teamsToRender);

//6. wrap this for loop in a function and then we use it

//7. i want to detect that i wrote something ( text ) inside the input

search.onkeyup = function (event) {
  //8. get the search value or the search key-word the user entered
  const searchValue = event.target.value.trim().toLowerCase();
  console.log("searchvalue: ", searchValue);
  const filteredTeams = teamsToRender.filter(function (team) {
    //check if any of the full_name property starts with the searchValue
    if (team.full_name.toLowerCase().startsWith(searchValue)) {
      return true;
    }
  });
  //assign the new filtered array to the old array
//   teamsToRender = filteredTeams;
  console.log(filteredTeams);
  renderTeams(filteredTeams);
};
