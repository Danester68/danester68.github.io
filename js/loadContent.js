window.onload = function() {
    fetch("/home-page")
        .then(response => response.text())
        .then(homePageFile => {
            document.getElementById("menu").innerHTML = homePageFile;
        });
    fetch("/head-references")
        .then(response => response.text())
        .then(headReferencesFile => {
            console.log("1");
            const lines = headReferencesFile.split("*");
            for (i = 0; i < lines.length; i++) {
                console.log("2 (" + i + ")");
                document.getElementById("head").appendChild(document.createTextNode(lines[i]));
            }
        });
}