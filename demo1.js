function showMessage() {
    alert('clicked');
}

function enterName() {
    let name = prompt('Your name is:');
    if (name !== null && name !== "") {
        console.log("Hi ", name);
    }
}
