function cargarProductos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarProductos(this);
        }
    };

    xhttp.open("GET", "xml/productos.xml", true);
    xhttp.send();
}

function mostrarProductos(xml) {
    var documento = xml.responseXML;
    var productos = documento.getElementsByTagName("producto");
    var salida = "";

    for (var i = 0; i < productos.length; i++) {
        var nombre = productos[i].getElementsByTagName("nombre")[0].textContent;
        var precio = productos[i].getElementsByTagName("precio")[0].textContent;
        var descripcion = productos[i].getElementsByTagName("descripcion")[0].textContent;
        var imagen = productos[i].getElementsByTagName("imagen")[0].textContent;

        salida += "<div class='tarjeta'>";
        salida += "<img src='" + imagen + "'>";
        salida += "<p class='precio'>Desde: " + precio + "</p>";
        salida += "<h2>" + nombre + "</h2>";
        salida += "<p>" + descripcion + "</p>";
        salida += "<a class='boton' href='#'>Ver más</a>";
        salida += "</div>";
    }

    document.getElementById("productos").innerHTML = salida;
}

function cargarSucursales() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarSucursales(this);
        }
    };

    xhttp.open("GET", "xml/sucursales.xml", true);
    xhttp.send();
}

function mostrarSucursales(xml) {
    var documento = xml.responseXML;
    var sucursales = documento.getElementsByTagName("sucursal");
    var salida = "";

    for (var i = 0; i < sucursales.length; i++) {
        var nombre = sucursales[i].getElementsByTagName("nombre")[0].textContent;
        var direccion = sucursales[i].getElementsByTagName("direccion")[0].textContent;
        var horario = sucursales[i].getElementsByTagName("horario")[0].textContent;

        salida += "<tr>";
        salida += "<td>" + nombre + "</td>";
        salida += "<td>" + direccion + "</td>";
        salida += "<td>" + horario + "</td>";
        salida += "</tr>";
    }

    document.getElementById("tablaSucursales").innerHTML = salida;
}

function enviarMensaje() {
    document.getElementById("mensaje").innerHTML = "Gracias por contactarnos. Pronto responderemos tu mensaje.";
}