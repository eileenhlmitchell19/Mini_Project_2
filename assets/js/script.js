var form = document.querySelector("#search-form")
var searchInputEl= document.querySelector('#search-input')
var dropDownListEl = document.querySelector('#format-input');
var searchTerm = searchInputEl.value;
var listValue = dropDownListEl.value;
//formSubmitHandler is where we will enter data to transfer our search terms and dropdown selection to the API endpoing.
function formSubmitHandler() {
    console.log("This is where my"+searchInputEl.value +"lives");
    console.log("This is where my"+dropDownListEl.value+"lives");
    return;
}
//After the 'Click Me' button is pressed, the value for search and the drop down list are passed on to the formSubmitHandler function. 
function buttonClickHandler(event){

    event.preventDefault();
//If nothing is entered, alert pops up to enter a search term.
        if (searchInputEl.value===''){
          alert('Please enter a search term');
            return;
        } 
        else {
          formSubmitHandler(searchInputEl.value,dropDownListEl.value);
        }
}

document.getElementById('btn').addEventListener("click", buttonClickHandler);
