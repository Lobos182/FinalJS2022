fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        mostrarCards(data.productos)
    })


function buscarProducto() {
    fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
            productos = data.productos
            const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();
            const productosEncontrados = productos.filter((producto) => {
                return producto.nombre.toUpperCase().match(nombreProductoBuscado);
            });
            mostrarCards(productosEncontrados);
        })
}




function mostrarCards(productos) {
    const divProductos = document.getElementById("list-cards")
    divProductos.innerHTML = ""
    productos.forEach(element => {
        let card = document.createElement('div')
        card.className = "card"
        card.innerHTML = `<div class="col mb-5">
        <div class="card" style="width: 18rem;">
            <!-- Sale badge-->
            <div id=stock${element.id} class="badge bg-dark text-white position-absolute" 
            style="top: 0.5rem; right: 0.5rem">
            En Stock
            </div>
            <!-- Product image-->
            <!-- Carrousel de imagenes-->          
            <div id="carouselExampleIndicators${element.id}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators${element.id}" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators${element.id}" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators${element.id}" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner card-img-top">
                <div class="carousel-item active">
                    <img src="${element.imagen === '' ? 'images/productos/sinimagen.jpg' : element.imagen}"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${element.imagen2 === '' ? 'images/productos/sinimagen.jpg' : element.imagen2}"
                        class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${element.imagen3 === '' ? 'images/productos/sinimagen.jpg' : element.imagen3}"
                        class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${element.id}"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${element.id}"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>            
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${element.nombre}</h5>
                    <!-- Product price-->
                    $ ${element.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center" id=btnCart${element.id}>
                <button 
                onclick= agregar(${element.id})
                class="btn btn-outline-dark mt-auto" href="#">
                Agregar al Carrito
                </button> 
                </div>
            </div>
            <a style="display: contents; margin: auto"
                        href="verProducto.html" target="_BLANK">
                        <button class="btn btn-outline-dark mt-auto"
                        onclick= verProducto(${element.id})>
                        Ver Producto
                        </button></a>
        </div>
    </div>
    </div>`
        divProductos.appendChild(card)
    })
}

function suscribirseAlNewsletter() {
    const email = document.getElementById("email").value;
    console.log(email);
    swal({
        title: `${email} te suscribiste correctamente`,
        text: "MUCHAS GRACIAS!!",
        icon: "success",
        button: "Cerrar",
    })
        .then((value) => { location.reload() });
}
