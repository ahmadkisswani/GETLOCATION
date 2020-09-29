
window.addEventListener('DOMContentLoaded', (event) => {
    
    $.get( "https://json.geoiplookup.io", function( data ) {

var  cont=  document.getElementsByClassName('w3-container')[2];
    for (const key in data) {
        var x = document.createElement('p');
    
        x.innerHTML =key +": &nbsp "+ data[key];

        cont.appendChild(x); 
    }

    });
})

 





