// To allow to make three request per second
// If reload page very fast you will get an error with the code four or three.
// Fetch() does NOT rejected the promise in this case.
// Need to create an error to reject the promise your self
// Part Two use date from step one to render a county

const renderCountries = function (data, className = '') {
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
    // countriesContainer.style.opacity = 1;
}

const whereAmI = (lat, lng) => {
    let url = `https://geocode.xyz/${lat},${lng}?json=1&auth=327535536316498294638x84766`

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Api Allows only 3 request status code ${response.status}`)
            return response.json()
        })
        .then(data => {
            console.log(` You are in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.com/v2/name/${data.country}`)
        }).then((response) => {
            return response.json()
        }).then(data => console.log(data[0]))
        .catch(error => {
            console.error(`${error}`);
        })
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);



