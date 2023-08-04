function cookieConstruct(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale, customersEachHour, cookiesPerHour, totalDailyCookies){

this.locationName = locationName;
this.minCustPerHour = minCustPerHour;
this.maxCustPerHour = maxCustPerHour;
this.avgCookiesPerSale = avgCookiesPerSale;
this.customersEachHour = customersEachHour;
this.cookiesPerHour = cookiesPerHour;
this.totalDailyCookies = totalDailyCookies;

}

cookieConstruct.prototype.randomCookieGenerator = function(min, max ){

    return Math.floor(Math.random() * (max - min + 1))

}; 

cookieConstruct.prototype.getLocationName = function(){
this.getLocationName = this.getLocationName(Seattle, Tokyo, Dubai, Paris,)

}


function Cookie