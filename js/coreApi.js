

window.addEventListener('DOMContentLoaded', (event) => {
    

   

    $.get( "https://www.cloudflare.com/cdn-cgi/trace", function( data ) {

   var e= document.getElementsByTagName('p')[0];
   e.innerHTML=data; 
  
   e.innerText = e.textContent.replaceAll("=",":")



    

    });

    



})

 





