var listaProductos = [];
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

function activarAnimaciones() {
    var elementos = document.getElementsByClassName("animar");

    for (var i = 0; i < elementos.length; i++) {
        var posicion = elementos[i].getBoundingClientRect().top;
        var alto = window.innerHeight;

        if (posicion < alto - 80) {
            elementos[i].classList.add("visible");
        }
    }
}

window.onload = function() {
    activarAnimaciones();
};

window.onscroll = function() {
    activarAnimaciones();
};
function activarAnimaciones() {
    var elementos = document.getElementsByClassName("animar");

    for (var i = 0; i < elementos.length; i++) {
        var posicion = elementos[i].getBoundingClientRect().top;
        var alto = window.innerHeight;

        if (posicion < alto - 80) {
            elementos[i].classList.add("visible");
        }
    }
}

window.onload = function () {
    activarAnimaciones();
};

window.onscroll = function () {
    activarAnimaciones();
};

function cargarProductosSugeridos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            guardarProductos(this);
        }
    };

    xhttp.open("GET", "xml/productos.xml", true);
    xhttp.send();
}
function guardarProductos(xml) {
    var documento = xml.responseXML;
    var productos = documento.getElementsByTagName("producto");

    listaProductos = [];

    for (var i = 0; i < productos.length; i++) {
        var producto = {
            imagen: productos[i].getElementsByTagName("imagen")[0].textContent,
            categoria: productos[i].getElementsByTagName("categoria")[0].textContent,
            nombre: productos[i].getElementsByTagName("nombre")[0].textContent,
            precio: productos[i].getElementsByTagName("precio")[0].textContent
        };

        listaProductos.push(producto);
    }

    mostrarListaProductos(listaProductos);
}

function mostrarListaProductos(productos) {
    var salida = "";

    for (var i = 0; i < productos.length; i++) {
        salida += "<div class='producto-card animar'>";
        salida += "<img src='" + productos[i].imagen + "'>";
        salida += "<div class='info-producto'>";
        salida += "<p class='categoria'>" + productos[i].categoria + "</p>";
        salida += "<h2>" + productos[i].nombre + "</h2>";
        salida += "<p class='precio-producto'>" + productos[i].precio + "</p>";
        salida += "</div>";
        salida += "</div>";
    }

    document.getElementById("listaProductos").innerHTML = salida;
    activarAnimaciones();
}
function filtrarProductos(categoria) {
    var filtrados = [];

    if (categoria == "Todos") {
        mostrarListaProductos(listaProductos);
    } else {
        for (var i = 0; i < listaProductos.length; i++) {
            if (listaProductos[i].categoria == categoria) {
                filtrados.push(listaProductos[i]);
            }
        }

        mostrarListaProductos(filtrados);
    }
}

window.onload = function() {
    activarAnimaciones();
    cargarProductosSugeridos();
};

