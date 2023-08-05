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


