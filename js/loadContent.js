window.onload = function() {
    fetch("/home-page")
        .then(response => response.text())
        .then(homePageFile => {
            document.getElementById("menu").innerHTML = homePageFile;
        });
}