document.addEventListener("DOMContentLoaded", function () { 
    // Globala variabler
    let index = 1; // Håller reda på ordningsnumret
    let favouritesArray = []; // Array för att lagra favoritländer

    // Funktion för att hantera favoritlistan
    function myFavourites() {
        let formElements = document.forms[0].elements;
        let userName = formElements["uname"].value;
        let country = formElements["Countries"].value;
        let heading = document.getElementById("changeHead");
        let listDiv = document.getElementById("list");

        if (!userName) {
            alert("Please enter a username!");
            return;
        }

        if (heading.innerHTML !== `${userName}'s favourite list: `) {
            heading.innerHTML = `${userName}'s favourite list: `;
            listDiv.innerHTML = "";
            index = 1;
            favouritesArray = []; // Rensa listan om användaren ändras
        }

        if (!country) {
            alert("Please select a country!");
            return;
        }

        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<b>${index}. ${country}</b>`;
        listDiv.appendChild(newDiv);

        // Spara landet i arrayen
        favouritesArray.push(country);

        // Spara arrayen i en cookie med användar-ID
        setCookie(userName, JSON.stringify(favouritesArray), 7); // Cookie sparas i 7 dagar

        index++;
    }

    // Funktion för att spara cookie
    function setCookie(userId, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Beräkna utgångsdatum
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${userId}=${value}; ${expires}; path=/`;
    }

    // Gör funktionen globalt tillgänglig
    window.myFavourites = myFavourites;
    window.pickList = pickList;
});
