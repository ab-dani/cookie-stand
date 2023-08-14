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
