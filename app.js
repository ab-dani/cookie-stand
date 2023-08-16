'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




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

const seattle = new CookieConstruct('Seattle', 23, 65, 6.3);
const desiredNumberOfHours = 10;
seattle.calcCookiesEachHour();
console.log(seattle.cookiesPerHour);
console.log(seattle.totalDailyCookies);

const locations = [
new CookieConstruct('Seattle', 23, 65, 6.3),
new CookieConstruct('Tokyo', 3, 24, 1.2),
new CookieConstruct('Dubai', 11, 38, 3.7),
new CookieConstruct('Paris', 20, 38, 2.3),
new CookieConstruct('Lima', 2, 16, 4.6),
];

function generateTable() {

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');


const headerRow = document.createElement('tr');
const headerLocations = document.createElement('th');
headerLocations.textContent = 'Locations';
headerRow.appendChild(headerLocations);

for (let i = 0; i < desiredNumberOfHours; i++) {
  const headerHour = document.createElement('th');
  headerHour.textContent = `${i + 1}h`;
  headerRow.appendChild(headerHour);
}

const headerTotal = document.createElement('th');
headerTotal.textContent = 'Daily Location Total';
headerRow.appendChild(headerTotal);
thead.appendChild(headerRow);


for (const location of locations) {
  const bodyRow = document.createElement('tr');
  const bodyLocation = document.createElement('td');
  bodyLocation.textContent = location.locationName;
  bodyRow.appendChild(bodyLocation);

  location.calcCookiesEachHour();

  for (const cookies of location.cookiesPerHour) {
    const bodyCookies = document.createElement('td');
    bodyCookies.textContent = cookies;
    bodyRow.appendChild(bodyCookies);
  }

  const bodyTotal = document.createElement('td');
  bodyTotal.textContent = location.totalDailyCookies;
  bodyRow.appendChild(bodyTotal);
  tbody.appendChild(bodyRow);
}


const footerRow = document.createElement('tr');
const footerTotal = document.createElement('th');
footerTotal.textContent = 'Totals';
footerRow.appendChild(footerTotal);

let grandTotal = 0;

for (let i = 0; i < desiredNumberOfHours; i++) {
  let hourTotal = 0;
  for (const location of locations) {
    hourTotal += location.cookiesPerHour[i];
  }
  grandTotal += hourTotal;
  const footerHour = document.createElement('td');
  footerHour.textContent = hourTotal;
  footerRow.appendChild(footerHour);
}

const footerGrandTotal = document.createElement('td');
footerGrandTotal.textContent = grandTotal;
footerRow.appendChild(footerGrandTotal);

tbody.appendChild(footerRow);

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('cookie-stand-table').appendChild(table);
}

generateTable();



document.getElementById('cookieStandForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const minCustomers = parseInt(document.getElementById('minCustomers').value); // Use 'minCustomers' input for minCustomers
    const maxCustomers = parseInt(document.getElementById('maxCustomers').value);
    const avgCookies = parseFloat(document.getElementById('avgCookies').value);

    const newCookieStand = new CookieStand(location, minCustomers, maxCustomers, avgCookies);

    const totalDailySales = Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) * avgCookies;

    const tableBody = document.querySelector('#cookieStandTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${newCookieStand.location}</td>
        <td>${newCookieStand.minCustomers}</td>
        <td>${newCookieStand.maxCustomers}</td>
        <td>${newCookieStand.avgCookies}</td>
        <td>${totalDailySales}</td>
    `;

    document.getElementById('cookieStandForm').reset();
});

