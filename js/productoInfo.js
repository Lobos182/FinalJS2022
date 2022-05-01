

function mostrarElProducto(card) {
    const containerCard = document.getElementById("showProduct")
    containerCard.innerHTML =""
    let verProducto = document.createElement('div')
    verProducto.className = "card"
    verProducto.innerHTML = `
<div class="row gx-4 gx-lg-5 align-items-center" style="margin: auto"<div>
<div class="col-md-6"><!-- Product image-->
<!-- Carrousel de imagenes-->          
<div id="carouselExampleIndicators${card.id}" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators${card.id}" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${card.id}" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators${card.id}" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
</div>
<div class="carousel-inner card-img-top">
    <div class="carousel-item active">
        <img src="${card.imagen === '' ? 'images/productos/sinimagen.jpg' : card.imagen}"
            class="d-block w-100" alt="imagen, producto">
    </div>
    <div class="carousel-item">
        <img src="${card.imagen2 === '' ? 'images/productos/sinimagen.jpg' : card.imagen2}"
            class="d-block w-100" alt="imagen, producto">
    </div>
    <div class="carousel-item">
        <img src="${card.imagen3 === '' ? 'images/productos/sinimagen.jpg' : card.imagen3}"
            class="d-block w-100" alt="imagen, producto">
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${card.id}"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${card.id}"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>    </div>
<div class="col-md-6" style="margin: auto">
    <div class="small mb-1"></div>
    <h1 class="display-5 fw-bolder">${card.nombre}</h1>
    <div class="fs-5 mb-5">
        <span>$${card.precio}</span>
    </div>
    <h2>Descripción producto:</h2>
    <p class="lead">lorem ipsum dolor sit amet, consectetur adipis lorem, 
    sed do eiusmod tempor incididunt ut labore lorem.
    Ut enim ad minim veniam,
    lorem ipsum dolor sit amet lorem,
    consectetur adipis lorem,
    sed do eius lorem. Ut enim ad minim </p>
    <div id=stock${card.id} class="badge bg-dark text-white position-absolute" 
            style="top: 0.5rem; right: 0.5rem">
            En Stock
            </div>
    <div class="d-flex" id=btnCart${card.id}>
        <button class="btn btn-outline-dark flex-shrink-0" type="button" Onclick= agregar(${card.id})>
            <i class="bi-cart-fill me-1"></i>
            Agregar Al Carrito
        </button>
    </div>
</div>
</div>`
    containerCard.appendChild(verProducto)
}


fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
        productos = data.productos
        const verCard = JSON.parse(localStorage.getItem("productoAVer"))
        mostrarElProducto(verCard)
        const buscoArrayVacio = productosSinStock.find(( vacio ) => vacio.id == verCard.id)
        if (buscoArrayVacio) {botonDelCarritoDisabled(buscoArrayVacio.id)}

const buscarRelacion = productos.filter(( buscar )=> buscar.categoria == verCard.categoria)
const objetoRelacion = buscarRelacion.find(( objeto )=>{
    const textoRelacion = document.getElementById("relacionNombre").innerHTML = `Como estas mirando -${objeto.categoria}- podria interesarte`
    mostrarRelacion(objeto)
})
})

function mostrarRelacion(card) {
    const relatedCard = document.getElementById("ProductRelated")
    let verRelacion = document.createElement('div')
    verRelacion.className = "card"
    verRelacion.innerHTML = `
                    <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${card.imagen}" alt="Imagen,producto,${card.categoria}" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${card.nombre}</h5>
                                    <!-- Product price-->
                                    ${card.precio}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                            <a OnClick=verProducto(${card.id}) href="verProducto.html" target="_BLANK" 
                            class="btn btn-outline-dark mt-auto" href="#">ver producto</a></div>
                                </div>
                        </div>
                    </div>`
    relatedCard.appendChild(verRelacion)
}

