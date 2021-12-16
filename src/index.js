document.title = 'Github Action Test';

document.body.innerHTML = `
<center style="margin-top:80px">
    <h1>Hello World</h1>
    <p>hello github action</p>

    <p class="time" />
</center>`;

const el = document.querySelector('.time');

setInterval(() => {
    el.innerHTML = new Date().toLocaleString();
}, 1000);
