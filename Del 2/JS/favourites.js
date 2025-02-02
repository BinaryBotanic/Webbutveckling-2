document.addEventListener("DOMContentLoaded", function () {
    let userFavourites = []; // Array för att lagra användarnamn och deras favoriter

    // Funktion för att hantera favoritlista
    function myFavourites() {
        let formElements = document.forms[0].elements;
        let userName = formElements["uname"].value;
        let countriesSelected = Array.from(formElements["Countries"].selectedOptions).map(option => option.value);
        let heading = document.getElementById("changeHead");
        let listDiv = document.getElementById("list");

        if (!userName) {
            alert("Please enter a username!");
            return;
        }

        if (countriesSelected.length === 0) {
            alert("Please select at least one country!");
            return;
        }

        // Lägg till användaren och deras städer i arrayen
        const existingUser = userFavourites.find(user => user.name === userName);
        if (existingUser) {
            // Uppdatera användarens lista med nya unika länder
            existingUser.countries = [...new Set([...existingUser.countries, ...countriesSelected])];
        } else {
            // Lägg till ny användare
            userFavourites.push({ name: userName, countries: countriesSelected });
        }

        // Uppdatera rubrik och lista
        heading.innerHTML = `${userName}'s favourite list:`;
        listDiv.innerHTML = ""; // Rensa listan först

        // Hämta användarens aktuella lista
        const userCountries = userFavourites.find(user => user.name === userName).countries;

        userCountries.forEach((country, i) => {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<b>${i + 1}. ${country}</b>`;
            listDiv.appendChild(newDiv);
        });
    }

    // Funktion för att hämta information från listan och visa den
    function pickList() {
        const userFormElements = document.forms[1].elements;
        const userName = userFormElements["pname"].value;

        if (!userName) {
            alert("Please enter a username!");
            return;
        }

        // Hitta användaren i arrayen
        const user = userFavourites.find(user => user.name === userName);

        let heading = document.getElementById("changeHead");
        let listDiv = document.getElementById("list");
        listDiv.innerHTML = ""; // Rensa gammal information

        if (user) {
            heading.innerHTML = `${userName}'s favourite list:`;
            user.countries.forEach((country, i) => {
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `<b>${i + 1}. ${country}</b>`;
                listDiv.appendChild(newDiv);
            });
        } else {
            heading.innerHTML = `${userName} has no saved list.`;
        }
    }

    // Exponera funktioner till globalt scope
    window.myFavourites = myFavourites;
    window.pickList = pickList;
});
