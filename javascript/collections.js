//Uppgift 1
function submitForm() {
    // Hämta formulärfält och fältnummer
    const form = document.forms['demo'];
    const fname = form['fname'].value;
    const ename = form['ename'].value;
    const email = form['email'].value;
    const msg = form['msg'].value;
    const fieldNumber = form.querySelector('input[type="number"]').value;

    // Välj vilket fält som ska skickas baserat på fältnummer
    let resultText = '';
    switch (parseInt(fieldNumber)) {
        case 1:
            resultText = `I input fält 1 står det<br> ${fname}`;
            break;
        case 2:
            resultText = `I input fält 2 står det:<br> ${ename}`;
            break;
        case 3:
            resultText = `I input fält 3 står det:<br> ${email}`;
            break;
        case 4:
            resultText = `I input fält 4 står det:<br> ${msg}`;
            break;
        default:
            resultText = "Välj ett nummer mellan 1 och 4.";
    }

    // Skapa en ny paragraf och lägg till resultatet
    const utskrift = document.getElementById('utskrift');
    const newResult = document.createElement('p');

    // Använd HTML för att dela upp texten i olika stilar
    newResult.innerHTML = `<strong style="font-size: 1.2em;">Resultat för skicka fält från formulär:</strong><br>${resultText}`;
    utskrift.appendChild(newResult);
}

//Uppgift 2
let counter = 0;

function submitDivar() {
    // Hämta containern med id "text"
    const container = document.getElementById("text");

    // Hämta endast de översta `div`-elementen direkt under containern
    const divs = Array.from(container.children).filter(el => el.tagName === 'DIV');

    // Skapa en rubrik för utskriften
    let resultText = '';

    // Loopa genom de översta divarna
    divs.forEach((div) => {
        // Texten från den yttre div
        let content = div.firstChild?.nodeValue?.trim() || ''; // Hämtar endast texten från yttre div, inte från barn

        // Kontrollera om det finns en inre div
        const childDiv = div.querySelector('div');
        if (childDiv) {
            content += ' child'; // Lägg till "child" om det finns ett barn
        }

        // Om texten inte är tom, lägg till den till resultatet
        if (content !== '') {
            resultText += `Div ${counter++}: ${content}<br>`;
        }
    });

    // Lägg till rubrik och resultat i den fjärde kolumnen
    const utskrift = document.getElementById("utskrift");

    // Skapa ett nytt p-element för att visa resultatet
    const newResult = document.createElement("p");
    newResult.innerHTML = `<strong style="font-size: 1.2em;">Resultat för skicka fält från formulär:</strong><br>${resultText}`;

    // Lägg till det nya resultatet
    utskrift.appendChild(newResult);
}

//Uppgift 3
//Uppgift a: Skicka objektet(välj children eller childNodes, det blir olika antal beroende på vad ni väljer)
function submitAllEntries() {
    const nodesContainer = document.getElementById("nodes"); // Hämta containern med id "nodes"
    const childNodes = nodesContainer.childNodes; // Hämta alla childNodes från containern

    let result = []; // Skapa en array för att lagra noder

    // Loopa genom alla childNodes med index
    childNodes.forEach((node, index) => {
        result.push(`${index}, ${node}`);
    });

    // Visa resultatet i fjärde kolumnen (element med id "utskrift")
    document.getElementById("utskrift").innerText = result.join("\n");
}

//Uppgift b: Skicka nycklarna(index)
function submitAllKeys() {
    const nodesContainer = document.getElementById("nodes"); // Hämta containern med id "nodes"
    const childElements = nodesContainer.children; // Hämta enbart child elementnoder
    let allIndexes = []; // Array för att lagra alla index (nycklar)

    // Loopa igenom alla childElements och hämta indexen för dessa elementnoder
    for (let i = 0; i < childElements.length; i++) {
        allIndexes.push(i); // Lägg till indexet (nyckeln) i arrayen
    }

    // Visa alla index (nycklar) i fjärde kolumnen (elementet med id "utskrift")
    document.getElementById("utskrift").innerHTML = allIndexes.join('<br>'); // Skapar radbrytningar mellan indexen
}

//Uppgift c: Skicka värdena(innerHTML)
function submitAllValues() {
    const nodesContainer = document.getElementById("nodes"); // Hämta containern med id "nodes"
    const childElements = nodesContainer.children; // Hämta enbart child elementnoder
    let allValues = []; // Array för att lagra alla innerHTML-värden

    // Loopa igenom alla childElements och hämta innerHTML-värden för dessa elementnoder
    for (let i = 0; i < childElements.length; i++) {
        allValues.push(childElements[i].innerHTML); // Lägg till innerHTML-värdet i arrayen
    }

    // Visa alla innerHTML-värden i fjärde kolumnen (elementet med id "utskrift")
    document.getElementById("utskrift").innerHTML = allValues.join('<br>'); // Skapar radbrytningar mellan värdena
}

//Uppgift d: Skicka värden(innerHTML) i paragrafer(p-element)
function submitParagraphValues() {
    const nodesContainer = document.getElementById("nodes"); // Hämta containern med id "nodes"
    const pElements = nodesContainer.getElementsByTagName("p"); // Hämta alla p-element
    let allValues = []; // Array för att lagra alla innerHTML-värden från p-elementen

    // Loopa igenom alla p-element och hämta innerHTML-värden för dessa element
    for (let i = 0; i < pElements.length; i++) {
        allValues.push(pElements[i].innerHTML); // Lägg till innerHTML-värdet i arrayen
    }

    // Visa alla innerHTML-värden från p-elementen i fjärde kolumnen (elementet med id "utskrift")
    document.getElementById("utskrift").innerHTML = allValues.join('<br>'); // Skapar radbrytningar mellan värdena
}

// Uppgift e: Skicka värdet(innerHTML) i rubrik h4
function submitHeader4Value() {
    const nodesContainer = document.getElementById("nodes"); // Hämta containern med id "nodes"
    const h4Elements = nodesContainer.getElementsByTagName("h4"); // Hämta alla h4-element
    let allValues = []; // Array för att lagra alla innerHTML-värden från h4-elementen

    // Loopa igenom alla h4-element och hämta innerHTML-värden för dessa element
    for (let i = 0; i < h4Elements.length; i++) {
        allValues.push(h4Elements[i].innerHTML); // Lägg till innerHTML-värdet i arrayen
    }

    // Visa alla innerHTML-värden från h4-elementen i fjärde kolumnen (elementet med id "utskrift")
    document.getElementById("utskrift").innerHTML = allValues.join('<br>'); // Skapar radbrytningar mellan värdena
}




//Samma för alla 
function rensa() {
    // Töm formulärfälten
    const form = document.forms['demo'];
    form.reset();

    // Rensa utskriftsområdet
    document.getElementById('utskrift').innerHTML = '';

    const utskrift = document.getElementById("utskrift");
    utskrift.innerHTML = '';
    counter = 0; // Återställ ordningsnumret

}