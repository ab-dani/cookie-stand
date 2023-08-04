  'use strict';

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const SEAhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  const Seattle = {
    locationName: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    cookiesPerHour:[],
    totalDailyCookies: 0, 
    calcCustomersEachHour: function() {
      this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    },
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


  const TOKhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  const Tokyo = {
    locationName: 'Tokyo',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    totalDailyCookies: 0, 
    calcCustomersEachHour: function() {
      this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    },
    calcCookiesEachHour: function() {
      for (let i = 0; i < TOKhours.length; i++) {
        this.calcCustomersEachHour();
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
        this.totalDailyCookies += oneHour;
      }
    }
  };


  

  const DUBIhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  const Dubai = {
    locationName: 'Dubai',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    totalDailyCookies: 0, 
    calcCustomersEachHour: function() {
      this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    },
    calcCookiesEachHour: function() {
      for (let i = 0; i < DUBIhours.length; i++) {
        this.calcCustomersEachHour();
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
        this.totalDailyCookies += oneHour;
      }
    }
  };

  const PARIhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  const Paris = {
    locationName: 'Paris',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    customersEachHour: [],
    totalDailyCookies: 0, 
    calcCustomersEachHour: function() {
      this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    },
    calcCookiesEachHour: function() {
      for (let i = 0; i < PARIhours.length; i++) {
        this.calcCustomersEachHour();
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
        this.totalDailyCookies += oneHour;
      }
    }
  };

  const LIMAhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm']


  const Lima =  {

    locationName: 'Lima', 
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiesPerSale: 4.6,
    customersEachHour: [],
    totalDailyCookiesL: 0,
    
    calcCookiesEachHour: function() {
      for (let i =0; i < LIMAhours.length; i++){
        this.calcCustomersEachHour();
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
        this.totalDailyCookies += oneHour;

    }
    render: function (){

      this.calcCookiesEachHour();

      console.log(this.totalDailyCookiesa);

      let article = document.getElementById("cityLIMA");

      let cityLIMA = document.createElement("h1");

      cityLIMAList.innerText = this.locationName;

      article.appendChild(cityLIMA);

      let cityLIMAList = document.createElement("ol");

      article.appendChild(cityLIMAList);

      for(let i = 0; i < SEAhours.length;i++){
        let cookielist = document.createElement("li");
        cookielist.innerText = `${SEAhours[i]}: ${this.avgCookiesPerSale[i]}`;
        cityLIMAList.appendChild(cookielist);
      }
const cookielist = document.createElement("li");
cookielist.textContent = "total: " + 
this.totalDailyCookies + "cookies";
cityLIMAList.appendChild(totalcookieList);
   
    }

  },

  Lima.render();
