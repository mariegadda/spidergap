// We 'd like to contact partners with offices within 100km of central London (coordinates 51.515419, -0.141099) to invite them out for a meal.

//Write a NodeJS/JavaScript program that reads our list of partners (download partners.json here) and outputs the company names and addresses of matching partners (with offices within 100km) sorted by company name (ascending).

//You can use the first formula from this Wikipedia article to calculate distance. Don 't forget to convert degrees to radians! 
const partners = require("./partners.json");

//main function
function closePartners() {
	let distanceArray =[];
	let lessThan100Array =[];
	const londonLat = 51.515419;
	const londonLon = -0.141099;
	//convert degrees to radians (used in the getDistance function)
    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }
    //get the distance between two points on the earth!
    function getDistance(lat1, lon1, lat2, lon2) {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2 - lat1); // deg2rad below
        let dLon = deg2rad(lon2 - lon1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km

        distanceArray.push(d);
     
    }
    //iterates through json object, isolates the coordinates for each partner and runs the getDistance function on each
    for (let i = 0; i < partners.length; i++) {
        let partnerLoc = partners[i].offices[0].coordinates;
        let locations = partnerLoc.split(',');
        let partnerLat = locations[0];
        let partnerLon = locations[1];
        getDistance(londonLat, londonLon, partnerLat, partnerLon);

    }
    //iterates through the distanceArray, if the distance is less than 100 it pushes the company name and address to the lessThan100Array. 
    for (let i = 0; i < distanceArray.length; i++) {
    	if (distanceArray[i]<=100){
    		lessThan100Array.push(partners[i].organization + " " + partners[i].offices[0].address)
    	}
    }

    //if there were monre than one result in this array - it would sort them alphabetically by company name
   lessThan100Array.sort();

   //logs the resulting companies that are less than 100 km from london! 
   console.log(lessThan100Array);

}

closePartners();

















