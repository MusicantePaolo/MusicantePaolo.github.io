window.onload = function() {
    var textElements = document.getElementsByClassName("text");
    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFA500', '#FF4500', '#9400D3', '#FF1493']; // Aggiunto un altro colore

    for (var j = 0; j < textElements.length; j++) {
        var text = textElements[j].innerText;
        var newText = "";

        for (var i = 0; i < text.length; i++) {
            // Assegna un colore Tetris a ciascuna lettera
            var color = colors[i % colors.length];
            // Crea un elemento span per ogni lettera con il colore Tetris
            newText += '<span style="color:' + color + ';">' + text[i] + '</span>';
        }

        // Aggiorna il contenuto dell'elemento span con le lettere colorate
        textElements[j].innerHTML = newText;
    }
};
