const hoteles = [{
    id : 0,
    nombre : "Hotel Las Aguilas",
    imgsrc : "img0.png",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    piscina : false,
    ubicacion : "Barcelona",
    precio : 50.45,
},
{
    id : 1,
    nombre : "Hotel El Paso",
    imgsrc : "img1.png",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    piscina : true,
    ubicacion : "Miami",
    precio : 85.95,
},
{
    id : 2,
    nombre : "Albergue El Peregrino",
    imgsrc : "img2.png",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    piscina : true,
    ubicacion : "Santiago de Compostela",
    precio : 75,
},
{
    id : 3,
    nombre : "Hostal Los Forajidos",
    imgsrc : "img3.png",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    piscina : false,   
    ubicacion : "Mexico DF",
    precio : 35.45,
},
{
    id : 4,
    nombre : "Hotel Los Halcones",
    imgsrc : "img4.png",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    piscina : false,
    ubicacion : "Dublin",
    precio : 50.45,
},
{
    id : 5,
    nombre : "Hotel Paraiso Perdido",
    imgsrc : "img5.png",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    piscina : true,
    ubicacion : "Malta",
    precio : 70.45,
},
]

console.log(hoteles)

function MostrarTodos(){
    const cuerpo = document.getElementById("hoteles");
    cuerpo.innerHTML=``;
    const total = document.createElement("h2")
    total.innerHTML = `Total hoteles encontrados ${hoteles.length}`;
    cuerpo.appendChild(total);
    hoteles.forEach(hotel =>{
        cuerpo.innerHTML+=`
            <div id="card${hotel.id}" style="border-style: inset; border-radius: 2px; padding:5px;background-color: cadetblue;">
                <h3>${hotel.nombre}</h3>
                <img src="${hotel.imgsrc} alt="${hotel.nombre}" id="img${hotel.id}"></img>
                <p id="desc${hotel.id}">${hotel.desc}</p>
                <p>Ubicación: <b id="ubicacion${hotel.ubicacion}">${hotel.ubicacion}</b></p>
                <p>Precio por noche: <b id="precio${hotel.id}">${hotel.precio}</b></p>
                <div>
                    <button id="Favoritos" onclick="Favoritos(${hotel.id})">Añadir a Favoritos</button>
                    <button id="Mostrar">Ver Más</button>
                </div>
            </div>
        `;
    })
}

function Favoritos(id){
    let n = 0;
    while(localStorage.getItem(n)){
        n++;
    }
    let hotelFavorito
    hoteles.forEach(hotel =>{
        if (hotel.id == id){
            hotelFavorito = hotel
        }
    })
    console.log(hotelFavorito)
    localStorage.setItem(n, JSON.stringify(hotelFavorito))
}

document.getElementById("buscador").addEventListener('keyup', e=>{
    console.log(document.getElementById("buscador").value)
    const cuerpo = document.getElementById("hoteles");
    cuerpo.innerHTML = ``
    hoteles.forEach(hotel => {
        console.log(hotel.nombre)
        if (hotel.nombre.toLowerCase() == document.getElementById("buscador").value.toLowerCase()){
            cuerpo.innerHTML+=`
                <div id="card${hotel.id}" style="border-style: inset; border-radius: 2px; padding:5px;background-color: cadetblue;">
                    <h3>${hotel.nombre}</h3>
                    <img src="${hotel.imgsrc} alt="${hotel.nombre}" id="img${hotel.id}"></img>
                    <p id="desc${hotel.id}">${hotel.desc}</p>
                    <p>Ubicación: <b id="ubicacion${hotel.ubicacion}">${hotel.ubicacion}</b></p>
                    <p>Precio por noche: <b id="precio${hotel.id}">${hotel.precio}</b></p>
                    <div>
                        <button id="Favoritos" onclick="Favoritos(${hotel.id})">Añadir a Favoritos</button>
                        <button id="Mostrar">Ver Más</button>
                    </div>
                </div>
        `
        }
    })
})


function Piscina(){
    const piscina = document.getElementById("piscina").value;
    console.log(piscina);
    const cuerpo = document.getElementById("hoteles");
    cuerpo.innerHTML=``;
    const total = document.createElement("h2")
    //total.innerHTML = `Total hoteles encontrados ${hoteles.length}`;
    //cuerpo.appendChild(total);
    if (piscina == "Con Piscina"){
        hoteles.forEach(hotel =>{
        if(hotel.piscina){
             cuerpo.innerHTML+=`
                <div id="card${hotel.id}" style="border-style: inset; border-radius: 2px; padding:5px;background-color: cadetblue;">
                    <h3>${hotel.nombre}</h3>
                    <img src="${hotel.imgsrc} alt="${hotel.nombre}" id="img${hotel.id}"></img>
                    <p id="desc${hotel.id}">${hotel.desc}</p>
                    <p>Ubicación: <b id="ubicacion${hotel.ubicacion}">${hotel.ubicacion}</b></p>
                    <p>Precio por noche: <b id="precio${hotel.id}">${hotel.precio}</b></p>
                    <div>
                        <button id="Favoritos" onclick="Favoritos(${hotel.id})">Añadir a Favoritos</button>
                        <button id="Mostrar" onclick="Detalles(${hotel.id}">Ver Más</button>
                    </div>
                </div>
            `;
        }

    })
    }
    else {
        MostrarTodos()
    }

}



window.onload = MostrarTodos()