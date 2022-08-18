'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}"/>
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
    `;

    countriesContainer?.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}

const getCountryDataAndNeighbour = function (country) {

    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send(); // fetches the data in the background, emit event load 
    console.log(request.responseText);
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText); // this -> request
        console.log(data);

        // Render country 1;
        renderCountry(data);

        // Get neighbour country
        const [neighbour] = data.borders;
        if (!neighbour) return;
        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send(); // fetches the data in the background, emit event load 

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, 'neighbour')
        })
    })
}


// getCountryDataAndNeighbour('portugal');
/* getCountryDataAndNeighbour('usa'); */


///////////////////////////////////////
/**
 * USING FETCH API
 */

/* //  const request = new XMLHttpRequest();
//  request.open('GET', `https://restcountries.com/v2/name/${country}`);
//  request.send()


const request = fetch("https://restcountries.com/v2/name/portugal"); // return promise  
console.log(request); */


/* const getCountryData = function (country) {
    // beginning promise is still pending
    // getting the data, still running in the background
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(function (response) { // get fullfil promise  
            console.log(response);
            return response.json(); // .json() return new promise 
        })
        .then(function (data) {
            console.log(data);
            renderCountry(data[0])
        })
} */

const getCountryData = function (country) {
    // beginning promise is still pending
    // getting the data, still running in the background
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0])
}

getCountryData("portugal");


