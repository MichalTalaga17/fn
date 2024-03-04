function pogoda() {let inputVal = input.value;
    const url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&lang=pl&appid=e58dfbc15daacbeabeed6abc3e5d95ca`;
    fetch(url_weather)
        .then(response => response.json())
        .then(dane => {
            const {
                dt,
                main,
                sys,
                weather,
                wind
            } = dane;
            const {
                feels_like,
                humidity,
                temp
            } = main;
            const {
                sunrise,
                sunset
            } = sys;
            const {
                description,
                icon
            } = weather[0];
            const {
                speed,
                deg
            } = wind
            let kierunek = "";
            if (deg < 22.5) {
                kierunek = "N"
            } else if (deg < 67.5) {
                kierunek = "NE"
            } else if (deg < 112.5) {
                kierunek = "E"
            } else if (deg < 157.5) {
                kierunek = "SE"
            } else if (deg < 202.5) {
                kierunek = "S"
            } else if (deg < 247.5) {
                kierunek = "SW"
            } else if (deg < 292.5) {
                kierunek = "W"
            } else if (deg < 337.5) {
                kierunek = "NW"
            } else {
                kierunek = "N"
            }
            aktualna_title.innerHTML = days(dt);
            aktualna_ikona.innerHTML = `<img src="assets/icons/${icon}.png" alt="${description}">`;
            aktualna_slonce_wschod_v.innerHTML = time(sunrise);
            aktualna_slonce_zachod_v.innerHTML = time(sunset);
            aktualna_wilgotnosc_v.innerHTML = `${humidity}%`;
            aktualna_wiatr_v.innerHTML = `${speed} m/s ${kierunek}`;
            aktualna_temperatura_o_v.innerHTML = temp_cel(feels_like);
            aktualna_temperatura_v.innerHTML = temp_cel(temp);



        });
}

function prognoza(link) {
    let inputVal = input.value;
    const url_forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&lang=pl&appid=e58dfbc15daacbeabeed6abc3e5d95ca`;
    fetch(url_forecast)
        .then(response => response.json())
        .then(dane => {
            for (i = 0; i < 4; i++) {
                const {
                    list
                } = dane;
                const {
                    dt,
                    main,
                    pop,
                    weather
                } = list[i];
                const {
                    temp
                } = main;
                const {
                    description,
                    icon
                } = weather[0];

                
                godzinowa.innerHTML +=
                `
                <div class="col-xl-3 godzina${i} srodek">
                        <div class="col-xl-12">
                            <h6>g.${time(dt)}</h6>
                        </div>
                        <div class="col-xl-12">
                            <img src="assets/icons/${icon}.png" alt="${description}">
                        </div>
                        <div class="col-xl-12">
                            <h6>Temperatura:</h6>
                            <span class="godzina_temperatura_v">${temp_cel(temp)} &degC</span>
                        </div>
                        <div class="col-xl-12">
                            <h6>Opady:</h6>
                            <span class="godzina_opady_v">${Math.round(pop * 100)}%</span>
                        </div>

                    </div>`;
            }


            for (i = 8; i < 33; i = i + 8) {
                const {
                    list
                } = dane;
                const {
                    dt,
                    main,
                    pop,
                    weather
                } = list[i];
                const {
                    temp
                } = main;
                const {
                    description,
                    icon
                } = weather[0];

               dzienna.innerHTML +=
                    `
                    <div class="col-xl-3 dzien${i} srodek">
                        <div class="col-xl-12">
                            <h6>${days(dt)}</h6>
                        </div>
                        <div class="col-xl-12">
                            <img src="assets/icons/${icon}.png" alt="${description}">
                        </div>
                        <div class="col-xl-12">
                            <h6>Temperatura:</h6>
                            <span class="dzienna3_temperatura_v">${temp_cel(temp)} &degC</span>
                        </div>
                        <div class="col-xl-12">
                            <h6>Opady:</h6>
                            <span class="dzienna3_opady_v">${Math.round(pop * 100)}%</span>
                        </div>

                    </div>
                    `;
            }

        });
}

function powietrze() {

    let inputVal = input.value;
    const url_weather = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&lang=pl&appid=e58dfbc15daacbeabeed6abc3e5d95ca`;
    fetch(url_weather)
        .then(response => response.json())
        .then(dane => {
            const {
                coord,
                name
            } = dane;
            const {
                lon,
                lat
            } = coord;
            const [y, x] = [lon, lat];
            const url_air_pollution_local = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${x}&lang=pl&lon=${y}&appid=e58dfbc15daacbeabeed6abc3e5d95ca`;
            fetch(url_air_pollution_local)
                .then(response => response.json())
                .then(dane => {
                    const {
                        list
                    } = dane;

                    a = list[0];
                    const {
                        main,
                        components,
                        dt
                    } = a;
                    dt_new = date(dt)
                    const {
                        aqi
                    } = main;

                    const {
                        co,
                        no,
                        o3,
                        pm2_5,
                        pm10,
                        
                        so2
                    } = components;





                    let color = "";
                    if (aqi < 50) {
                        color = "green";
                        num = 1;
                    } else if (aqi < 100) {
                        color = "yellow";
                        num = 2;
                    } else if (aqi < 150) {
                        color = "orange";
                        num = 3;
                    } else if (aqi < 200) {
                        color = "red";
                        num = 4;
                    } else if (aqi < 300) {
                        color = "#660000";
                        num = 5;
                    } else if (aqi < 500) {
                        color = "#4c1130";
                        num = 6;
                    };

                    city.innerHTML = name;
                    v_aqi.innerHTML = " " + aqi;
                    v_aqi.style.color = color;
                    v_co.innerHTML = co;
                    v_no.innerHTML = no;
                    v_o3.innerHTML = o3;
                    v_pm10.innerHTML = pm10;
                    v_pm25.innerHTML = pm2_5;
                    v_so2.innerHTML = so2;              
                    

                });
        })



}
form.addEventListener("submit", e => {
    clear();
    pokaz();
    e.preventDefault();
    pogoda();
    prognoza();
    powietrze();
    form.reset();


})