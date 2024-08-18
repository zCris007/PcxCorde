// Funciones de JavaScript para mejorar la interactividad de la página web

// Suavizar el scroll al hacer clic en los enlaces de navegación

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación de formulario de contacto

function validateForm() {
    let nombre = document.forms["contactForm"]["nombre"].value;
    let email = document.forms["contactForm"]["email"].value;
    let mensaje = document.forms["contactForm"]["mensaje"].value;
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    return true;
}

// Simulación de función de chat en vivo

function toggleChat() {
    let chatBox = document.getElementById("chat-box");
    if (chatBox.style.display === "none") {
        chatBox.style.display = "block";
    } else {
        chatBox.style.display = "none";
    }
}

// Añadir evento de submit al formulario de contacto

document.getElementById("contactForm").onsubmit = function() {
    return validateForm();
};

// Añadir evento de clic al botón de chat

document.getElementById("chat-button").onclick = function() {
    toggleChat();
};

// Inicializar el chat en vivo oculto

document.getElementById("chat-box").style.display = "none";