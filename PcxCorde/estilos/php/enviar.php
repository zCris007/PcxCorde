<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $to = "PcxCordeZ@gmail.com";
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $nombre\nCorreo: $email\nMensaje: $mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "¡Mensaje enviado correctamente!";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>
