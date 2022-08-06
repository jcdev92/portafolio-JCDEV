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



/* form validation */



const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.currentTarget.elements
    const myemail = 'jcdeveloper92@gmail.com'
    const URL_BASE = `https://formsubmit.co/ajax/${myemail}`;
    
    const dataForm = {
        name: input.name.value,
        email: input.email.value,
        message: input.message.value
    }

    if (e.target.name.value.length < 3 || e.target.email.value.length < 3 || e.target.message.value.length < 3) {
        alert('Please fill in all fields, at least 3 characters');
    } else {
        fetch(URL_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(dataForm)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Thank you for your message!')
            })
            .catch(error => console.error(error))
        e.currentTarget.reset();
    }
});


/* navbar activation */

const nav = document.querySelector('.navbar');
const check = document.querySelector('.nav-toggle');

const display = () => {
    if (check.checked) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}


check.addEventListener('click', display);


// /* scroll skills to left */

ScrollReveal().reveal('.about', {
    duration: 2000,
    origin: 'left',
    distance: '500px',
    delay: 50,
    mobile: false,
})

ScrollReveal().reveal('.skills', {
    duration: 2000,
    origin: 'right',
    distance: '500px',
    delay: 50,
    mobile: false,
})

ScrollReveal().reveal('.portfolio', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px',
    delay: 50,
    mobile: false,
})

ScrollReveal().reveal('.contact', {
    duration: 2000,
    origin: 'top',
    distance: '500px',
    delay: 50,
    mobile: false,
})




