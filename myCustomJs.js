//Uppgift C/D
function clearError(element) {
    // Ta bort klassen 'error' från fältet
    element.classList.remove("error");

    // Ta bort det närliggande felmeddelandet om det finns
    const nextSibling = element.nextSibling;
    if (nextSibling && nextSibling.classList.contains("error-message")) {
    nextSibling.remove();
    }
}
function showError(element, message) {
    // Lägg till en visuell indikator (röd ram)
    element.classList.add("error");

    // Kontrollera om ett felmeddelande redan finns bredvid elementet
    const existingError = element.nextSibling;
    if (existingError && existingError.classList && existingError.classList.contains("error-message")) {
        // Uppdatera meddelandet om det redan finns
        existingError.innerText = message;
    } else {
        // Skapa ett nytt felmeddelande om det inte finns
        const errorElement = document.createElement("span");
        errorElement.className = "error-message";
        errorElement.innerText = message;
        element.parentNode.insertBefore(errorElement, element.nextSibling);
    }
}


// Uppgift B kontrolera att fält e rätt ifylda
function validateForm() {
    let isValid = true;

    //Hämta info om fält
    const name = document.getElementById("txtName");
    const email = document.getElementById("txtEmail");
    const city = document.getElementById("selCity");
    const message = document.getElementById("msg");

    // Tar bort fel
    clearError(name);
    clearError(email);
    clearError(city);
    clearError(message);

    // Kontolera namn
    if (name.value.trim () === ""){
        showError(name, "Name is requierd");
        ifValid=false;
    }

    // Kontrolerar email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
        showError(email, "Email is invalid.");
        isValid = false;
    }

    // Kontrollera stad
    if (city.value === "") {
        showError(city, "City is required.");
        isValid = false;
    }

    // Kontrollera meddelande
    if (message.value.trim() === "") {
        showError(message, "Message is required.");
        isValid = false;
    }

    // Om allt är giltigt, byt bild och spara
    if (isValid) {
        changePicture();
        saveFile();
    }
}


// Uppgift A ändrar bilder
function changePicture() {

    // Hämta bilderna
    const show = document.getElementById("show");
    const hide = document.getElementById("hide");

    // Döljer bilden "please.png" och visar "thankyou.png"
    show.classList.remove("visible");
    show.classList.add("hidden");

    hide.classList.remove("hidden");
    hide.classList.add("visible");
}    


function saveFile() {

    // Get the data from each element on the form.
    const name = document.getElementById('txtName');
    const email = document.getElementById('txtEmail');
    const city = document.getElementById('selCity');
    const msg = document.getElementByimputtype('number');

    // This variable stores all the data.
    let data = '\r Name: ' + name.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'City: ' + city.value + ' \r\n ' +
        'Message: ' + msg.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt'; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
    }