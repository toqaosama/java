let btn = document.getElementById('btn');
let div = document.getElementById('maindiv');

let them = () => {
    if (btn.textContent == "light") {
        div.style.background = '#eee'
        div.style.color = '#111'
        btn.textContent = "dark"
        btn.classList = 'btn btn-dark'
    } else if (btn.textContent == "dark") {
        div.style.background = '#111'
        div.style.color = '#eee'
        btn.textContent = "light"
        btn.classList = 'btn btn-light'
    }
}
btn.addEventListener('click', them);
