function modal() {
    document.getElementById('modal').style.left = "0%";
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.left = "100%";
    document.getElementById('modal').style.display = "none";
}

function submit() {
    document.getElementById('name').style.display = "none";
    document.getElementById('email').style.display = "none";
    document.getElementById('message').style.display = "none";
    document.getElementById('button').style.background = "green";
    document.getElementById('button').style.color = "white";
    document.getElementById('button').innerHTML = "Thank you!";
}