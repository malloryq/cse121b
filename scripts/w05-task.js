/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

// Global empty array to store list of temples
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeArray) => {
    templeArray.forEach((temple) => {
      // Create article element
      const article = document.createElement('article');
  
      // Create h3 element for temple name
      const h3 = document.createElement('h3');
      h3.textContent = temple.templeName;
  
      // Create img element for temple image
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      // Append h3 and img to article
      article.appendChild(h3);
      article.appendChild(img);
  
      // Append article to templesElement
      templesElement.appendChild(article);
    });
  };



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Replace 'URL_TO_YOUR_TEMPLE_DATA' with the actual URL
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const templeData = await response.json();
      templeList = templeData; // Assign fetched data to templeList
  
      // Call displayTemples function and pass templeList
      displayTemples(templeList);
    } catch (error) {
      console.error('There was a problem fetching the temple data:', error);
    }
  };
  
  getTemples(); // Call getTemples function to fetch and display temples
/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';

/* sortBy Function */

const filter = document.getElementById('sortBy').value; // Get selected value from dropdown

switch (filter) {
  case 'utah':
    displayTemples(temples.filter(temple => temple.location.includes('Utah')));
    break;
  case 'nonutah':
    displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
    break;
  case 'older':
    displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
    break;
  case 'all':
  default:
    displayTemples(temples);
    break;
}
};



/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
  });
  
  getTemples();