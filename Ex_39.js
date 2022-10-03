/**
 * 
 City Names: 
 Write a function called city_country() that takes in the name of a city and its country. The function should return 
 a string formatted like this:

"Lahore, Pakistan"
 * 
 */


city_country = (city, country) => {
    return `"${city}" , "${country}"`
}

console.log(city_country('Islamabad', 'Pakistan'))
console.log(city_country('Sydney', 'Australia'))
console.log(city_country('Ankara', 'Turkey'))
