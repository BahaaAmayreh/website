function changeImage() {
    const image = document.getElementById("icon01");
    let fileName = getFileName(image.src);
    console.log(fileName);

    if (fileName === "octopus.jpg") {
        image.src = "kitty.jpg";
    } else {
        image.src = "octopus.jpg";
    }
}

function getFileName(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
}
