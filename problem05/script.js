const interceptFormSubmit = event => {
    // Prevent default and take datas
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = formData.get('age');
    const color = formData.get('color');
    const div01 = document.getElementById('d01');
    const div02 = document.getElementById('d02');
    const body = document.getElementById('body');

    // Display datas and change color
    div01.innerHTML = "Hello user " + name + "!!!";
    div02.innerHTML = "Your age is " + age;
    if (color === "red") body.style.backgroundColor = `rgb(239, 68, 68)`;
    else if (color === "green") body.style.backgroundColor = `rgb(16, 185, 129)`;
    else if (color === "blue") body.style.backgroundColor = `rgb(59, 130, 246)`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('container');
    form.addEventListener('submit', interceptFormSubmit);
});