<?php
// Recupera i dati del modulo
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$oggetto = $_POST['oggetto'];
$messaggio = $_POST['messaggio'];

// Destinatario dell'email
$destinatario = "paolomusicopio@gmail.com";

// Costruisci il corpo dell'email
$corpo_email = "Nome: $nome\n";
$corpo_email .= "Email: $email\n";
$corpo_email .= "Telefono: $telefono\n\n";
$corpo_email .= "Messaggio:\n$messaggio";

// Invia l'email
if (mail($destinatario, $oggetto, $corpo_email)) {
    echo "Email inviata con successo!";
} else {
    echo "Si è verificato un errore durante l'invio dell'email.";
}
?>