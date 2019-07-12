// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++

// SAVE THE PERSON OBJECT IN VARIABLE
const person = getPerson();

// CHECK IF THERE ARE RESULT
if (person !== null) {

    // IF THERE ARE MAKE NO VISIBLE THE NO RESULTS PANEL
    document.getElementById('no-results').className = 'no-display';

    // AND SHOW THE PERSON CARD INFORMATION IN THE DOM
    writeTextInElement('person-card-title', person.name + ', ' + person.age);
    writeTextInElement('person-card-notes', person.notes);
    writeTextInElement('person-card-address', person.address);
    writeTextInElement('person-card-email', person.email);
    writeItemsInHTML('person-card-phone', person.phoneNumbers, 'phone');
    writeItemsInHTML('person-card-relatives', person.relatives, 'name')
} else {

    // IF THERE ARE NOT RESULTS MAKE NO VISIBLE THE PERSON CARD
    document.getElementById('person-card').className = 'no-display';
}

// +++++++ --------- EXECUTE WHEN FILE IS LOADED --------- ++++++


// ------------------------------------------------------------------------
// GET THE ITEM PERSON FROM LOCAL STORAGE
// ------------------------------------------------------------------------
function getPerson() {

    // GET THE ITEM PERSON (as a string)
    var person = localStorage.getItem('person');

    // PARSE FROM STRING TO OBJECT
    person = JSON.parse(person);

    // RETURN IT
    return person;
}

// ------------------------------------------------------------------------
// WRITE A GIVEN TEXT IN AN GIVEN HTML ELEMENT TAKING HIS STYLE
// ------------------------------------------------------------------------
function writeTextInElement(elementId, text) {

    // GET THE ELEMENT WITH THE GIVEN ID
    var element = document.getElementById(elementId);

    // WRITE THE TEXT
    element.innerText = text;
}

// ------------------------------------------------------------------------
// WRITE THE ITEMS OF GIVEN LIST IN A GIVEN ELEMENT USING A GIVEN PROPERTY
// ------------------------------------------------------------------------
function writeItemsInHTML(elementId, list, property) {

    // GET THE ELEMENT WITH THE GIVEN ID
    var element = document.getElementById(elementId);

    // INITIALIZE VARIABLE
    let HTMLItems = '';

    // CONCAT ALL ITEMS
    for (let item of list) {
        HTMLItems += '<p>' + item[property] + '</p>';
    }

    // INSERT HTML ITEMS ON DOM
    element.innerHTML = HTMLItems;
}

// ------------------------------------------------------------------------
// UPDATE THE TEXT CONTENT OF THE SEARCH EMAIL MODULE
// ------------------------------------------------------------------------
function changeSearchModuleText() {

    // CHANGE TITLE TEXT CONTENT
    document.getElementById('search-module-title').innerText = 'Can’t Find The Right Person?';

    // CHANGE SUBTITLE CONTENT
    document.getElementById('search-module-subtitle').innerHTML = '<strong>Try Again</strong> - Make a new search';

}

// ------------------------------------------------------------------------
// UPDATE ALL THE VIEW FROM HOME TO SEARCH RESULT MODE
// ------------------------------------------------------------------------
function changeView() {

    // MAKE NO VISIBLE THE INDEX CONTENT
    document.getElementById('index-content').className = 'no-display';

    // CHANGE THE TEXT CONTENT OF SEARCH EMAIL MODULE
    changeSearchModuleText();
}
