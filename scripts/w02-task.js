/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Mallory Clark';
let currentYear = 2023;
let profilePicture = 'images/profile.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profileImage');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
/*imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);*/


/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Ice Cream', 'Sushi'];

// Display the array of favorite foods under the "Favorite Food" section
foodElement.innerHTML = `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;

// Add a new favorite food
const newFavoriteFood = 'Burgers';
favoriteFoods.push(newFavoriteFood);

// Display the modified array with a line break
foodElement.innerHTML += `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Display the modified array with a line break
foodElement.innerHTML += `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Display the final modified array with a line break
foodElement.innerHTML += `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;




