function mostrarBebidas() {
    fetch('bebidas.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const bebidas = xmlDoc.getElementsByTagName('bebida');
            let table = "<table><tr><th>Nombre</th><th>Precio</th><th>Tamaño</th><th>Descripción</th><th>Tipo</th></tr>";
            for (let i = 0; i < bebidas.length; i++) {
                table += "<tr>";
                table += "<td>" + bebidas[i].getElementsByTagName("nombre")[0].textContent + "</td>";
                table += "<td>" + bebidas[i].getElementsByTagName("precio")[0].textContent + "</td>";
                table += "<td>" + bebidas[i].getElementsByTagName("tamaño")[0].textContent + "</td>";
                table += "<td>" + bebidas[i].getElementsByTagName("descripcion")[0].textContent + "</td>";
                table += "<td>" + bebidas[i].getElementsByTagName("tipo")[0].textContent + "</td>";
                table += "</tr>";
            }
            table += "</table>";
            document.getElementById("resultado").innerHTML = table;
        });
}

function mostrarAlimentos() {
    fetch('alimentos.json')
        .then(response => response.json())
        .then(data => {
            let table = "<table><tr><th>Nombre</th><th>Precio</th><th>Tamaño</th><th>Descripción</th><th>Tipo</th></tr>";
            data.forEach(item => {
                table += "<tr>";
                table += "<td>" + item.nombre + "</td>";
                table += "<td>" + item.precio + "</td>";
                table += "<td>" + item.tamaño + "</td>";
                table += "<td>" + item.descripcion + "</td>";
                table += "<td>" + item.tipo + "</td>";
                table += "</tr>";
            });
            table += "</table>";
            document.getElementById("resultado").innerHTML = table;
        });
}
