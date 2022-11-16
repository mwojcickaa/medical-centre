function showSnackbar () {
    document.querySelector('#snackbar').style.display = 'flex';
    setTimeout(function () {
        document.querySelector('#snackbar').style.display = 'none';
    }, 3000)
}

document.querySelector('#buttonInTouch').addEventListener('click', showSnackbar)

for (let i=0; i<4; i++) {
    for (let j=0; j<3; j++) {
        document.getElementsByClassName("fotter-link")[j].children[i].addEventListener('click', showSnackbar)
    }
}

const form = document.querySelector('#formInTouch')
function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm)
document.querySelector('#formReservationVisit').addEventListener('submit', handleForm)

document.querySelector('#buttonPriceBasic').addEventListener('click', showSnackbar)
document.querySelector('#buttonPriceStandard').addEventListener('click', showSnackbar)
document.querySelector('#buttonPricePremium').addEventListener('click', showSnackbar)
document.querySelector('#buttonPricingIndividual').addEventListener('click', showSnackbar)
document.querySelector('#buttonReservation').addEventListener('click', showSnackbar)
document.querySelector('#buttonReadMore').addEventListener('click', showSnackbar)
document.querySelector('#buttonReservationVisit').addEventListener('click', showSnackbar)
document.querySelector('#opinion').addEventListener('click', showSnackbar)

let menuList = document.getElementById("menuList");


function togglemenu() {
    if(menuList.style.display == "none") {
        menuList.style.display = "flex";
    }
    else {
        menuList.style.display = "none";
    }
}