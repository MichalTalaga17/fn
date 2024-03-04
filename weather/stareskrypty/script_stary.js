const form = document.querySelector("form");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const nadrzedny = document.querySelector(".nadrzedny");
const aktualna = document.querySelector(".aktualna");
const godzinowa = document.querySelector(".godzinowa");
const dzienna = document.querySelector(".dzienna");
const zanieczyszczenie = document.querySelector(".zanieczyszczenie");
const szukaj = document.querySelector(".szukaj");
//nadrzedny.toggleAttribute("ukryty")



function clear(){
    godzinowa.innerHTML = "<h1 class='title'> Prognoza godzinowa</h1 > "
    dzienna.innerHTML = "<h1 class='title'> Prognoza dzienna</h1> "
    zanieczyszczenie.innerHTML = "<h1 class='title'> Zanieczyszczenie powietrza</h1>"
}


   

form.addEventListener("submit", e => {

    zanieczyszczenie.toggleAttribute("ukryty")

    clear();
    e.preventDefault();
    wynik1.innerHTML = "";
    pogoda();
    prognoza();
    powietrze();
    form.reset();
    input.focus();


})
