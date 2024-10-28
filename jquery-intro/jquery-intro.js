/* JavaScript */
// place this in your external JavaScript file
$(document).ready(function() {
//creating months array
const months = ['January', 'February','March','April','May','June','July','August','September','Tips for October','Tips for November', 'Tips for December'];
const today = new Date();
var name = months[today.getMonth()];
//greeting message if it is December
//const month = today.getMonth(); // 0 for January, 11 for December
function greet() {
  let greeting = "Welcome to Patti's Posies!";
  if (months === 11) { // December
    greeting = "Happy Holidays!";
  }
  return greeting;
}
console.log(greet()); 
document.getElementById("month").innerHTML = name;

//season function
function getSeasonAndMonthInfo(monthNumber) {
    var monthName, season;
  
    switch (monthNumber) {
      case 1:
        monthName = "January";
        season = "Winter";
        break;
      case 2:
        monthName = "February";
        season = "Winter";
        break;
      case 3:
        monthName = "March";
        season = "Spring";
        break;
      case 4:
        monthName = "April";
        season = "Spring";
        break;
      case 5:
        monthName = "May";
        season = "Spring";
        break;
      case 6:
        monthName = "June";
        season = "Summer";
        break;
      case 7:
        monthName = "July";
        season = "Summer";
        break;
      case 8:
        monthName = "August";
        season = "Summer";
        break;
      case 9:
        monthName = "September";
        season = "Autumn";
        break;
      case 10:
        monthName = "October";
        season = "Autumn";
        break;
      case 11:
        monthName = "November";
        season = "Autumn";
        break;
      case 12:
        monthName = "December";
        season = "Winter";
        break;
      default:
        monthName = "Invalid Month";
        season = "Invalid Season";
    }
  
    return { month: monthName, season: season };
  }
  
  const monthInfo = getSeasonAndMonthInfo(10);
  //console.log(monthInfo.month); // Output: October
  document.getElementById("season").innerHTML = (monthInfo.season); // Output: Autumn

  //changing background image based on seasons
  const seasons = ["spring", "summer", "autumn", "winter"];
        const backgrounds = ["url('springbg.jpg')", "url('summerbg.jpg')", "url('fallbg.jpg')", "url('winterbg.jpg')"];
      
        function getSeason() {
          // Logic to determine the current season (e.g., based on month)
          const month = new Date().getMonth();
          if (month >= 2 && month <= 4) {
            return 0; // Spring
          } else if (month >= 5 && month <= 7) {
            return 1; // Summer
          } else if (month >= 8 && month <= 10) {
            return 2; // Autumn
          } else {
            return 3; // Winter
          }
        }
        const seasonIndex = getSeason();
        $("body").css("background-image", backgrounds[seasonIndex]);

        //changing color of html elements
        const seasonColor = document.getElementById("container");
    seasonColor.style.color = "#930"

});

//Get year function
$(document).ready(function() {
    const y = new Date();
    var year = y.getFullYear();
    document.getElementById("copy").innerHTML = year;
});

// create a tips array
var tips=[/*"<p>Those of  us who live through our gardens know how bittersweet it can be to see the lush green growth of  summer disappear during the cold months of  winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of  both of  these cool season beauties and enjoy them in your garden for years to come.</p>",
"<p>Spring is a time of  renewal for both the gardener and the garden. Suggestions for this month: </p><ul><li> Transplants of  tomatoes should be planted by March 15th</li><li> Fertilize your  lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li> Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants. </li></ul>",
"<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes from the huge selection of  varieties we offer.</li><li>Transplants of  peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",*/
"<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of  our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of  winter’s trusted and long-lasting pansies and violas.</p>"];

document.getElementById("seasontips").innerHTML = tips;

// create a specials array
var specials = [/*"<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p> ",
"<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
"<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
"<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
"<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
"<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
"<p><strong>BOGO</strong></p><p>All containers, buy one, get one of equal or lesser value 1/2 price</p>",
"<p>Cacti and succulents, 25% off</p>",*/
"<p>Get ready for fall!<p><p>Mums: 6 inch pot $5.99</p>",
"<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins: <br>large $8.99<br>small $5.99<br>Decorative pumpkins: <br>$7.99-11.99<br>Gourds: $6.99</p>",
/*"<p>Trees and shrubs: 1/2 price - in stock only.</p>",
"<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties. Find the perfect fit for your family while they last!</p>"*/];

document.getElementById("specials").innerHTML = specials;