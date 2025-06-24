function cargarLocalStorage(){
    const cuerpo = document.getElementById("hoteles");
    cuerpo.innerHTML = ``
    let n = 0;
    while (localStorage.getItem(n)){
        const local = localStorage.getItem(n);
        const hotel = JSON.parse(local);
        console.log(hotel)
        cuerpo.innerHTML+=`
        <div id="card${hotel.id}" style="border-style: inset; border-radius: 2px; padding:5px;background-color: cadetblue;">
            <h3>${hotel.nombre}</h3>
            <img src="${hotel.imgsrc} alt="${hotel.nombre}" id="img${hotel.id}"></img>
            <p id="desc${hotel.id}">${hotel.desc}</p>
            <p>Ubicación: <b id="ubicacion${hotel.ubicacion}">${hotel.ubicacion}</b></p>
            <p>Precio por noche: <b id="precio${hotel.id}">${hotel.precio}</b></p>
            <div>
                <button id="Favoritos" onclick="EliminarFavoritos(${hotel.id})">Eliminar de Favoritos</button>
            </div>
        </div>`
        n++;
    }
}

function EliminarFavoritos(id){

    const hoteles = [];
    let n = 0;
    while (localStorage.getItem(n)){
        const local = localStorage.getItem(n);
        const hotel = JSON.parse(local);
        hoteles.push(hotel)
        localStorage.removeItem(n)
        n++;
    }

    n = 0;
    console.log(hoteles)
    console.log(id)
    hoteles.forEach(hotel => {
        if (hotel.id != id) {
            localStorage.setItem(n, JSON.stringify(hotel))
            n++;
        }

    })
    cargarLocalStorage()

}

window.onload = cargarLocalStorage()