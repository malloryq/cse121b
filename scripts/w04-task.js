/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mallory Clark",
    photo: "images/profile.png",
    favoriteFoods: ["Pizza", "Sushi", "Tacos"],
    hobbies: ["K-Dramas", "Reading", "Drawing"], 
    placesLived: [] // Empty array for now
};

/* Populate Profile Object with placesLive objects */
    myProfile.placesLived.push({
        place: "Cedar Rapids, Iowa",
        length: "4 years"
},
{
  place: "Storm Lake, Iowa",
  length: "2 years"
},
{
  place: "Iowa City, Iowa",
  length: "1 years"
},
{
  place: "Oelwein, Iowa",
  length: "20 years"
}
);



/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerText = myProfile.name;
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;
/* Photo with attributes */


/* Favorite Foods List*/
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  const listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

// Populating hobbies list
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach(hobby => {
  const listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

// Populating places lived data list
const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach(place => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = place.place;
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});