
window.addEventListener('DOMContentLoaded', (event) => {
    
    $.get( "https://json.geoiplookup.io", function( data ) {

var  cont=  document.getElementsByClassName('w3-container')[2];
    for (const key in data) {
        var x = document.createElement('li');
        x.setAttribute('style', 'height: 40px')

        var y =  document.createElement('hr');
        //border-width:0
        y.setAttribute('style','border-width:2 ; ');
      
    
        x.innerHTML =key +": &nbsp "+ data[key];

        cont.appendChild(x); 
        cont.appendChild(y);
    }

    });
})

 





