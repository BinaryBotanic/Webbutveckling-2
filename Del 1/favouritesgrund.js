document.addEventListener("DOMContentLoaded", function () {
    // Globala variabler
    let index = 1; // Håller reda på ordningsnumret

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
        }

        if (!country) {
            alert("Please select a country!");
            return;
        }

        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<b>${index}. ${country}</b>`;
        listDiv.appendChild(newDiv);

        index++;
    }

    // Gör funktionen globalt tillgänglig
    window.myFavourites = myFavourites;
});