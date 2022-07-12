/* button read more - read less */

let btnText = document.querySelector('#myBtn');
let dots = document.querySelector('#dots');
let moreText = document.querySelector('#more');

moreText.style.display = 'none';


let expandText = () => {
    let dots = document.querySelector('#dots');
    let moreText = document.querySelector('#more');
    let btnText = document.querySelector('#myBtn');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

btnText.addEventListener('click', expandText);