document.addEventListener('DOMContentLoaded', () => {
    const maxCities = 5; // Maximalt antal städer
    const cities = []; // Skapa en tom array för städer

    // Knapp för att lägga till från inputfältet #new
    document.getElementById('addCityBtn').addEventListener('click', () => {
        const inputField = document.getElementById('new'); // Input-fältet
        const city = inputField.value.trim(); // Hämta text och ta bort whitespace

        if (!city) {
            alert('Du måste skriva in en stad!'); // Om inputfältet är tomt
            return;
        }


        if (cities.length >= maxCities) {
            alert('Alla fält är redan fyllda!'); // Om alla fält är fyllda
            return;
        }

        // Lägg till stad till arrayen om den inte redan finns
        if (!cities.includes(city)) {
            cities.push(city);
            updateTextAreas(); // Uppdatera textarea-fält
        } else {
            alert('Den här staden är redan tillagd!');
        }

        inputField.value = ''; // Töm inputfältet
    });

    // Funktion för att läsa från textarea och uppdatera arrayen
    document.getElementById('addCityBtn').addEventListener('click', () => {
        for (let i = 1; i <= maxCities; i++) {
            const cityInput = document.getElementById(`city${i}`).value.trim();
            if (cityInput && !cities.includes(cityInput)) {
                cities.push(cityInput); // Lägg till stad
            }
        }
        updateTextAreas();
    });

    // Funktion för att uppdatera textområden från arrayen
    function updateTextAreas() {
        for (let i = 0; i < maxCities; i++) {
            const textarea = document.getElementById(`city${i + 1}`);
            textarea.value = cities[i] || ''; // Fyll med stad eller lämna tom
        }
        updateCityList(); // Uppdatera arrayens innehåll
        updateDetails();  // Uppdatera detaljer
    }

    // Uppdatera listan i <p id="cityList">
    function updateCityList() {
        const cityList = document.getElementById('cityList');
        cityList.textContent = `Arrayens innehåll: ${cities.join(', ')}`;
    }

    // Visa detaljer för varje stad i arrayen
    function updateDetails() {
        const details = document.getElementById('details');
        details.innerHTML = '';
        cities.forEach(city => {
            details.innerHTML += `
                <p>Stad: ${city.toUpperCase()}, 
                Förekomst: ${cities.filter(c => c === city).length}, 
                Börjar på: ${city[0]}, 
                Antal bokstäver: ${city.length}</p>`;
        });
    }

    // Sortera städer när "Sortera"-knappen trycks
    document.getElementById('sortBtn').addEventListener('click', () => {
        cities.sort(); // Sortera arrayen
        updateTextAreas(); // Uppdatera fält och arrayens visning
    });
});