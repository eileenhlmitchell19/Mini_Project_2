var searchEl = $("#search-input");
var formatEl = $("#format-input");

function search(e){
    e.preventDefault();
    var query = searchEl.val();
    var format = formatEl.val();
    if(query){
        if(!format){
            format = "";
        }
        document.location.replace(`./search-results.html?q=${query}&format=${format}`);
    }
}

$("form").submit(search);