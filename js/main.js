document.addEventListener('DOMContentLoaded', (event) => {
  // initMap(); // added
  createNeighborhoodsHTML();
  createLocationsHTML();
  // updateLocations();
});


// Data about points of interest - locations - to visit
const locations = [
    {title: "Castillo De Los Tres Reyes Del Morro", lat: 23.15076, lng: -82.356233, neighborhood: "Old Havana"},
    {title: "El Capitolio - National Capitol Building", lat: 23.135178, lng: -82.359542, neighborhood: "Old Havana"},
    {title: "Almacenes San Jose Market", lat: 23.129878, lng: -82.349035, neighborhood: "Old Havana"},
    {title: "The Cathedral Havana", lat: 23.14137, lng: -82.351908, neighborhood: "Old Havana"},
    {title: "Hotel Ambos Mundos", lat: 23.139444, lng: -82.350556, neighborhood: "Old Havana"},
    {title: "Coppelia Ice Cream Parlor", lat: 23.1397532, lng: -82.3864961, neighborhood: "Vedado"},
    {title: "Paseo del Prado", lat: 23.1388888, lng: -82.3614639, neighborhood: "Central Havana"},
    {title: "ChinaTown", lat: 23.1339125, lng: -82.3681122, neighborhood: "Central Havana"}
  ];

//*** Filter neighborhoods for select menu ***
//Get all neighborhoods from all locations
const neighborhoods = locations.map((v, i) => locations[i].neighborhood);
// Remove duplicate neighborhoods
const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i);

function createNeighborhoodsHTML() {
  const select = document.getElementById('neighborhoods-select');

  uniqueNeighborhoods.forEach(uniqueNeighborhood => {
    const option = document.createElement('option');
    option.innerHTML = uniqueNeighborhood;
    option.value = uniqueNeighborhood;
    select.append(option);
  });
  console.log(select);
};

console.log(locations);

let locationsList = locations.map((v, i) => locations[i].title);
console.log(locationsList);

 // * Fill all locations HTML
function createLocationsHTML() {
  const ul = document.getElementById('locations-list');

  locations.forEach(location => {
    const li = document.createElement('li');
    li.setAttribute('value', location.neighborhood);

    const title = document.createElement('h4');
    title.innerHTML = location.title;
    li.append(title);

    ul.append(li);
  });
  console.log(ul);
};
