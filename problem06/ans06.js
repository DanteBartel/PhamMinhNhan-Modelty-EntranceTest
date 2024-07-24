// This function will get a random country from a free api called sampleapis and print out some information
const getRandomCountry = async () => {
    try {
        // Fetch a random country from sample apis
        const res = await fetch('https://api.sampleapis.com/countries/countries');
        const datas = await res.json();
        const idx = Math.floor(Math.random() * datas.length);
        const country = datas[idx];

        // Print info
        console.log("Country: " + country.name);
        console.log("Capital: " + country.capital);
        console.log("Abbreviation: " + country.abbreviation);
        console.log("Currency: " + country.currency);
        console.log("Population: " + country.population);
    } catch (e) {
        console.error(e);
    }
}

getRandomCountry();