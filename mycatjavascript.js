function genNow() {
//var removee = document.getElementsByClassName('catt').remove();
    var div = document.getElementById('flexcat');
   // div.removeChild('img');
    var image = document.createElement('img');
    image.setAttribute("class", "catt");
    image.src = "http://www.randomkittengenerator.com/cats/rotator.php";
    
    div.appendChild(image);
}

function reset() {
    window.location.reload();
}
