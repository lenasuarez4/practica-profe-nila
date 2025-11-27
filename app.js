let db;

// Abrir la base de datos
const request = indexedDB.open("UsuariosDB", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    const store = db.createObjectStore("usuarios", { keyPath: "usuario" });
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onerror = function() {
    alert("Error al abrir la base de datos");
};


// Registrar usuario
function registrar() {
    const usuario = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if (usuario === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    const tx = db.transaction("usuarios", "readwrite");
    const store = tx.objectStore("usuarios");

    const addUser = store.add({ usuario, password });

    addUser.onsuccess = () => {
        alert("Registro exitoso");
        window.location.href = "index.html";
    };

    addUser.onerror = () => {
        alert("El usuario ya existe");
    };
}


// Login
function iniciar() {
    const usuario = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    const tx = db.transaction("usuarios", "readonly");
    const store = tx.objectStore("usuarios");

    const requestUser = store.get(usuario);

    requestUser.onsuccess = () => {
        if (requestUser.result && requestUser.result.password === password) {

            // Guardar sesión
            localStorage.setItem("sesion", usuario);

           
            window.location.href = "menu.html";

        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };
}
