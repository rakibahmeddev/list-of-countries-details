const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

// display countries
const displayCountries = countries => {

    // for (const country of countries) {
    //     console.log(country)
    // }

    const countriesDiv = document.getElementById('countries');

    // for eatch
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-container')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>Captial: ${country.capital}</p>
            <button class ="country-details" onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);

    });
};


// Country URL
const loadCountryByName = countryName => {
    const url = `https://restcountries.com/v2/name/${countryName}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
};

// display country details
const displayCountryDetails = country => {
    console.log(country);
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML = `
    <h5>Name: ${country.name}</h5>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Region: ${country.region}</p>
    <p>Flag: <img width="50px" src=" ${country.flag}"></p>
    
    `;


}