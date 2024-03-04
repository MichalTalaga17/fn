const form = document.querySelector("form");
const input = document.querySelector("input");
const lokalizuj = document.querySelector(".lokalizuj")
const info = document.getElementsByClassName("info");

let aktualna_title = document.querySelector(".aktualna_title");
let aktualna_ikona = document.querySelector(".aktualna_ikona");
let aktualna_slonce_wschod_v = document.querySelector(".aktualna_slonce_wschod_v");
let aktualna_slonce_zachod_v = document.querySelector(".aktualna_slonce_zachod_v");
let aktualna_wilgotnosc_v = document.querySelector(".aktualna_wilgotnosc_v");
let aktualna_wiatr_v = document.querySelector(".aktualna_wiatr_v");
let aktualna_temperatura_o_v = document.querySelector(".aktualna_temperatura_o_v");
let aktualna_temperatura_v = document.querySelector(".aktualna_temperatura_v");

let city = document.querySelector(".city");
let v_aqi = document.querySelector(".v_aqi");
let v_co = document.querySelector(".v_co");
let v_no = document.querySelector(".v_no");
let v_o3 = document.querySelector(".v_o3");
let v_pm10 = document.querySelector(".v_pm10");
let v_pm25 = document.querySelector(".v_pm25");
let v_so2 = document.querySelector(".v_so2");

let dzienna = document.querySelector(".dzienna");
let godzinowa = document.querySelector(".godzinowa");


function temp_cel(kelwin) {
    celcjusz = Math.round(kelwin - 273.15)
    return celcjusz

}

function date(UNIX_date) {
    var a = new Date(UNIX_date * 1000);
    var months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudznia'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    if (hour < 10) {
        hour = "0" + hour
    }
    var min = a.getMinutes();
    if (min < 10) {
        min = "0" + min
    }

    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}

function time(UNIX_date) {
    var a = new Date(UNIX_date * 1000);
    var hour = a.getHours();
    if (hour < 10) {
        hour = "0" + hour
    }
    var min = a.getMinutes();
    if (min < 10) {
        min = "0" + min
    }
    var time = hour + ':' + min;
    return time;
}

function days(UNIX_date) {
    var a = new Date(UNIX_date * 1000);
    var months = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Września', 'Października', 'Listopada', 'Grudznia'];
    var month = months[a.getMonth()];
    var date = a.getDate();

    var time = date + ' ' + month;
    return time;
}

function pokaz(){
    for (let i = 0; i < 4; i++) {
        info[i].classList.add("widoczny")
    }
}

function clear(){
    aktualna_title.innerHTML = "";
    aktualna_ikona.innerHTML = "";
    aktualna_slonce_wschod_v.innerHTML = "";
    aktualna_slonce_zachod_v.innerHTML = "";
    aktualna_wilgotnosc_v.innerHTML = "";
    aktualna_wiatr_v.innerHTML = "";
    aktualna_temperatura_o_v.innerHTML = "";
    aktualna_temperatura_v.innerHTML = "";
    city.innerHTML = "";
    v_aqi.innerHTML = "";
    v_co.innerHTML = "";
    v_no.innerHTML = "";
    v_o3.innerHTML = "";
    v_pm10.innerHTML = "";
    v_pm25.innerHTML = "";
    v_so2.innerHTML = "";
    dzienna.innerHTML = "";
    godzinowa.innerHTML = "";
}








