  'use strict';
  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  /*const SEAhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  
    calcCookiesEachHour: function() {
      for (let i = 0; i < SEAhours.length; i++) {
        this.calcCustomersEachHour();
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
        this.cookiesPerHour.push(oneHour)
        this.totalDailyCookies += oneHour;
      }
    },
    SEArender: function (){

      this.calcCookiesEachHour();

      console.log(this.calcCookiesEachHour);

      let article = document.getElementById("citySEA");

      let citySEA = document.createElement("h1");

      citySEA.innerText = this.locationName;

      article.appendChild(citySEA);

      let citySEAList = document.createElement("ol");

      article.appendChild(citySEAList);

      for(let i = 0; i < SEAhours.length;i++){
        let cookielist = document.createElement("li");
        cookielist.innerText = `${SEAhours[i]}: ${this.avgCookiesPerSale[i]}`;
        citySEAList.appendChild(cookielist);
      }
const cookielist = document.createElement("li");
cookielist.textContent = "total: " + 
this.totalDailyCookies + "cookies";
citySEAList.appendChild(cookielist);

    }
   
  };
Seattle.SEArender()
*/


function CookieConstruct(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
  this.customersEachHour = [];
}

CookieConstruct.prototype.random = function () {
  return Math.ceil(Math.random() * (this.maxCustPerHour - this.minCustPerHour + this.minCustPerHour));
}

CookieConstruct.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < desiredNumberOfHours; i++) {
    this.calcCustomersEachHour();
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesPerHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
}

CookieConstruct.prototype.calcCustomersEachHour = function () {
  this.customersEachHour.push(this.random());
}


const seattle = new CookieConstruct('seattle', 23, 65, 6.3);
const desiredNumberOfHours = 10; 
seattle.calcCookiesEachHour();
console.log(seattle.cookiesPerHour);
console.log(seattle.totalDailyCookies);


const locations = [
new CookieStand('Seattle',23, 65, 6.3),
new CookieStand('Tokyo',24,1.2),
new CookieStand('Dubai',38,3.7),  
new CookieStand('Paris',38,2.3),
new CookieStand('Lima',16,4.6),
];

function generateTable(){

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Header Row // 

const headerRow = document.createElement('tr');
const headerLocations = document.createElement('th');
headerLocations.textContent = 'Locations';
headerRow.appendChild(headerLocations);

for(let i = 0; i < desiredNumberOfHours; i++) {

const headerHour = document.createElement('th');
headerHour.textContent = '$(i + 1)h';
headerRow.appendChild(headerHour);
}

const headerTotal = document.createElement('th');
headerTotal.textContent = 'Daily Location Total';
headerRow.appendChild(headerTotal);
thead.appendChild(headerRow);




}


