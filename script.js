
const descriptions = {
    "Gestión de Sensores":
        "Cómo funcionan los sensores del dispositivo y cómo acceder a ellos desde una app.",
    "Servicios y Notificaciones en App":
        "Uso de servicios en segundo plano y manejo de notificaciones móviles.",
    "Librerías y Toolkits para Desarrollo Móvil":
        "Herramientas externas para acelerar el desarrollo de aplicaciones.",
    "Depuración y Seguridad en Apps":
        "Métodos para depurar apps y protegerlas contra amenazas.",
    "Herramientas para Empaquetado y Despliegue":
        "Proceso para empaquetar una app y publicarla en diferentes plataformas.",
    "Plataformas y Canales de Distribución":
        "Dónde y cómo distribuir una aplicación móvil.",
    "Referencias":
        "Bibliografía y sitios utilizados durante el desarrollo del proyecto."
};


const images = {
    "Gestión de Sensores": "img/sensores.png",
    "Servicios y Notificaciones en App": "img/notificaciones.png",
    "Librerías y Toolkits para Desarrollo Móvil": "img/librerias.png",
    "Depuración y Seguridad en Apps": "img/seguridad.png",
    "Herramientas para Empaquetado y Despliegue": "img/empaquetado.png",
    "Plataformas y Canales de Distribución": "img/distribucion.png",
    "Referencias": "img/referencias.png"
};





document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".container ul li");

    items.forEach(li => {
        const link = li.querySelector("a");
        const title = link.textContent.trim();
        const url = link.getAttribute("href");

        
        const desc = document.createElement("div");
        desc.classList.add("mini-desc");

        
        desc.innerHTML = `
            <img src="${images[title]}" alt="${title}">
            <span>${descriptions[title]}</span>
        `;

        
        desc.classList.remove("show");

        li.appendChild(desc);

        
        li.addEventListener("click", (e) => {
            e.preventDefault();

           
            if (!desc.classList.contains("show")) {
                
                document.querySelectorAll(".mini-desc.show").forEach(open => {
                    open.classList.remove("show");
                });

                desc.classList.add("show");
            } else {
               
                window.location.href = url;
            }
        });
    });
});
