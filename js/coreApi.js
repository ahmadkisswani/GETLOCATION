window.addEventListener('DOMContentLoaded', (event) => {
    $.get("https://json.geoiplookup.io", function(data) {
        var cont = document.getElementsByClassName('w3-container')[0];

        // Create a ul element with Bootstrap list-group class
        var ul = document.createElement('ul');
        ul.className = 'list-group list-group-flush';

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                // Create an li element with Bootstrap list-group-item class
                var x = document.createElement('li');
                x.className = 'list-group-item';

                var y = document.createElement('hr');
                y.style.border = 'none';

                x.innerHTML = key + ": &nbsp " + data[key];

                // Append the li element to the ul
                ul.appendChild(x);
                ul.appendChild(y);
            }
        }

        // Append the ul element to the container
        cont.appendChild(ul);
    });
});
