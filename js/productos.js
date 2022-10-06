class Producto {
    constructor(id,tipo,cantidad, nombre, medida, precio,img) {
      this.id=id
      this.tipo = tipo;
      this.cantidad=cantidad
      this.nombre = nombre;
      this.medida = medida;
      this.precio = precio;
      this.img=img
    }
  }
  //Array de objetos producto
  const baseDeDatos = [
    new Producto(1,"DESAYUNOS Y MERIENDAS",1, "ALMOHADITAS", "250g", 190,"./asset/aceites/aceite_de_coco.jpg"),
    new Producto(2,"DESAYUNOS Y MERIENDAS",1, "QUINOA POP", "100g", 95,"./asset/desayunos_y_meriendas/quinoa_pop.jpg"),
    new Producto(3,"DESAYUNOS Y MERIENDAS",1, "PASTA DE MANI", "500g", 90,"./Asset/desayunos_y_meriendas/mantequilla_de_mani.jpg"),
    new Producto(7,"LECHES VEGETALES",1, "LECHE DE ALMENDRAS", "1L", 320,"./asset/leche_vegetales/leche_almendras_tratenfux1lt.jpg"),
    new Producto(8,"LECHES VEGETALES",1, "LECHE DE COCO", "1L", 350,"./Asset/leche_vegetales/leche_coco_greenfood.jpg"),
    new Producto(9,"LECHES VEGETALES",1, "LECHE DE COCO", "910ml", 250,"./Asset/leche_vegetales/leche_coco_greenfood.jpg"),
    new Producto(10,"LECHES VEGETALES",1, "LECHE DE ARROZ", "1L", 350,"./Asset/leche_vegetales/leche_arroz_x1lt_tratenfu.jpg"),
    new Producto(11,"FRUTOS SECOS",1, "ALMENDRAS", "1KG", 1700,"./asset/frutos_secos/Almendras_non_pareil.jpg"),
    new Producto(12,"FRUTOS SECOS",1, "NUEZ", "100G", 200,"./asset/frutos_secos/Nuez_maripos.jpg"),
    new Producto(13,"LEGUMBRES Y SEMILLAS",1, "LENTEJAS", "500g", 160,"./asset/legumbres_y_semillas/lenteja-x-500-grs.jpg"),
    new Producto(14,"LEGUMBRES Y SEMILLAS",1, "GARBANZO", "500g", 160,"./asset/legumbres_y_semillas/garbanzo_organicos.jpg"),
    new Producto(15,"LEGUMBRES Y SEMILLAS",1, "POROTO ADUKI", "500g", 160,"./asset/legumbres_y_semillas/porotos_aduki_organicos.jpg"),
    new Producto(16,"LEGUMBRES Y SEMILLAS",1, "POROTO DE SOJA", "500g", 190,"./asset/legumbres_y_semillas/porotos_de_soja.jpg"),
    new Producto(17,"LEGUMBRES Y SEMILLAS",1, "POROTO BLANCO", "500g", 190,"./asset/legumbres_y_semillas/porotos_blancos.jpg" ),
    new Producto(18,"ACEITES Y CONDIMENTOS",1, "ACEITE DE COCO", "360ml", 450,"./asset/aceites/aceite_de_coco.jpg"),
    new Producto(19,"ACEITES Y CONDIMENTOS",1, "ACEITE DE OLIVA", "500ml", 850,"./asset/aceites/aceite_de_oliva.jpg"),
    new Producto(20,"ACEITES Y CONDIMENTOS",1, "ACETO", "250ml", 350,"./asset/aceites/aceto-balsamico.jpg" ),
    new Producto(21,"MIX",1, "MIX PREMIUM", "500g", 750,"./asset/mix/mix__almendra_nuez_arandanos.jpg"),
    new Producto(22,"MIX",1, "MIX NEMU", "500g", 850,"./asset/mix/mix_clasico.jpg"),
    new Producto(23,"MIX",1, "MIX SALADO", "500g", 400,"./asset/mix/mix_salado.jpg"),
    new Producto(24,"MIX",1, "MIX BASICO", "500g", 400,"./asset/mix/mix_clasico.jpg"),
    new Producto(25,"MIX",1, "MIX TROPICAL", "500g", 450,"./asset/mix/mix_tropical.jpg"),]

    const contenedorProductosDesaYmerie=document.getElementById("desayu_merienda")
    const contenedorProdcutoFrutosSecos=document.getElementById("frutos__secos")
    const contenedorProductoLechesVegetales=document.getElementById("Leches__vegetales")
    const contendorProductosLegumbreYSemillas=document.getElementById("Semillas__y__legumbres")
    const contendorProductoseAceitesCondimentos=document.getElementById("aceites__y__condimentos")
    const contenedorMixs=document.getElementById("Mixs")
    const contenedorCarrito=document.getElementById("contenedorCarrito")
    const botonVaciar=document.getElementById("vaciar-carrito")
    const contadorCarrito=document.getElementById("contadorCarrito")
    const precioTotal=document.getElementById("precioTotal")

    //
    /*
    document.addEventListener('DOMContentLoaded ',()=>{
      if(localStorage.getItem("carrito")){
        carrito=JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito()
      }
    })
    */


  
 botonVaciar.addEventListener("click",()=>{
  //Para vaciar logitud = 0
  carrito.length=0
  actualizarCarrito()

 })

 function cardProduct(){
  
 }
 //crear las cards
 baseDeDatos.forEach((producto)=>{
  if (producto.tipo ==="DESAYUNOS Y MERIENDAS"){
  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="nombre">${producto.nombre}</h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                  <template class="id">${producto.id}</template>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contenedorProductosDesaYmerie.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)
 
    boton.addEventListener("click",()=>{
      Swal.fire({
          title: 'Se Agrego al Carrito',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
  })

/*

  boton.addEventListener('click',addCarritoItem)

  */
 
}else if(producto.tipo==="FRUTOS SECOS"){
  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                  <img src=${producto.img} class="card-img-top" alt=>
                  <h5 class="nombre">${producto.nombre}</h5>
                  <p class="card-text">${producto.medida} </p>
                  <p class="precios">$${producto.precio} </p>
                  <template class="id">${producto.id}</template>
                 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                  
              </div>
  `
  contenedorProdcutoFrutosSecos.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)
 
    boton.addEventListener("click",()=>{
      Swal.fire({
          title: 'Se Agrego al Carrito',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
  
  })
}else if(producto.tipo === "LECHES VEGETALES"){
  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
  <img src=${producto.img} class="card-img-top" alt=>
  <h5 class="nombre">${producto.nombre}</h5>
  <p class="card-text">${producto.medida} </p>
  <p class="precios">$${producto.precio} </p>
  <template class="id">${producto.id}</template>
 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
  
</div>
  `
  contenedorProductoLechesVegetales.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)
  boton.addEventListener("click",()=>{
    Swal.fire({
        title: 'Se Agrego al Carrito',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

})
 
  

}else if (producto.tipo === "LEGUMBRES Y SEMILLAS" ){

  const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
  <img src=${producto.img} class="card-img-top" alt=>
  <h5 class="nombre">${producto.nombre}</h5>
  <p class="card-text">${producto.medida} </p>
  <p class="precios">$${producto.precio} </p>
  <template class="id">${producto.id}</template>
 <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
  
</div>
  `
  contendorProductosLegumbreYSemillas.appendChild(contenodorCard)
  const boton=document.getElementById(`agregar${producto.id}`)
  boton.addEventListener("click",()=>{
    Swal.fire({
        title: 'Se Agrego al Carrito',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

})
  //Capturar accion del boton ID
 
}else if (producto.tipo==="ACEITES Y CONDIMENTOS") { 
  const contenodorCard=document.createElement("div")
contenodorCard.classList.add("contenedor__tarjetas")
contenodorCard.innerHTML =`
<div class="card" style="width: 18rem; height:23rem;">
                <img src=${producto.img} class="card-img-top" alt=>
                <h5 class="${producto.nombre}"></h5>
                <p class="card-text">${producto.medida} </p>
                <p class="precios">$${producto.precio} </p>
               <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                
            </div>
`
contendorProductoseAceitesCondimentos.appendChild(contenodorCard)

//Capturar accion del boton ID
const boton=document.getElementById(`agregar${producto.id}`)

boton.addEventListener("click",()=>{
  Swal.fire({
      title: 'Se Agrego al Carrito',
      icon: 'success',
      confirmButtonText: 'Cool'
    })

})
  
}else if(producto.tipo==="MIX"){

 
    const contenodorCard=document.createElement("div")
  contenodorCard.classList.add("contenedor__tarjetas")
  contenodorCard.innerHTML =`
  <div class="card" style="width: 18rem; height:23rem;">
                <img src=${producto.img} class="card-img-top" alt=>
                <h5 class="${producto.nombre}"></h5>
                <p class="card-text">${producto.medida} </p>
                <p class="precios">$${producto.precio} </p>
               <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar</button>
                
            </div>
  `
  contenedorMixs.appendChild(contenodorCard)
  
  //Capturar accion del boton ID
  const boton=document.getElementById(`agregar${producto.id}`)
  
  boton.addEventListener("click",()=>{
    Swal.fire({
        title: 'Se Agrego al Carrito',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
  
  })

}
 

 })

const todosBotones=document.querySelectorAll(".boton-agregar")

todosBotones.forEach(addtoCardButton=>{
  addtoCardButton.addEventListener("click",addToCardclicked)

})
function addToCardclicked(event){
  const button = event.target;
  const item =button.closest(".contenedor__tarjetas")
 const nombre=item.querySelector(".nombre").textContent
 const precio=item.querySelector(".precios").textContent
const imagen=item.querySelector(".card-img-top").src
const cantidad=1
 
addItemtoShoppingCart(nombre,precio,imagen)

}

function addItemtoShoppingCart(nombre,precio,imagen){
  const elemtoTitulo=contenedorCarrito.getElementsByClassName("titulo")
   
  for(let i=0; i< elemtoTitulo.length; i++){
    if(elemtoTitulo[i].innerText === nombre){

    const elementoQuantity= elemtoTitulo[i].parentElement.parentElement.querySelector('.input__elemento')
    
    elementoQuantity.value++;
    updateShoppingCartTotal()
    return
  }
  
  }
 

  const shoppinCartRow= document.createElement("div")
  const shoppingCarContent= `
  
  <div class="table__productos shoppingCartItem">
  <img src=${imagen} alt="">
  <h6 class="title titulo">${nombre}</h6>
  
  <td class="table__price"><span class ="precio"> ${precio}</span></td>
  
  <td class="table__cantidad">
  <input type="number" min="1" value="1"  class="input__elemento">
  <button class="butinDelete btn btn-danget">X</button>
  </div>
  `
  
 
  shoppinCartRow.innerHTML =shoppingCarContent
  contenedorCarrito.append(shoppinCartRow)

  shoppinCartRow.querySelector('.butinDelete').addEventListener('click',removeShoppingCartItem)
  shoppinCartRow.querySelector('.input__elemento').addEventListener('change',quantityChanged)
  updateShoppingCartTotal()
  
}

function updateShoppingCartTotal(){
  let total=0
  const shoppingCartTotal=document.querySelector(".precioTotal")
  const shoppincartItems=document.querySelectorAll('.shoppingCartItem')
 
  
  
    
  shoppincartItems.forEach(shoppincartItem=>{
   const shoppingCartItemPriceElement= shoppincartItem.querySelector('.precio')
  
    
   const precio =Number( shoppingCartItemPriceElement.textContent.replace('$',''));
   
   const shoppingCartItemInput=shoppincartItem.querySelector('.input__elemento')
   const shoppingCartItemInputCantidad=Number( shoppingCartItemInput.value)
  
    total= total+precio*shoppingCartItemInputCantidad
   
  })
   shoppingCartTotal.innerHTML =`${total.toFixed(2)}`
  
}
function removeShoppingCartItem(event){

  const buttonClicked=event.target
  buttonClicked.closest('.shoppingCartItem').remove()
updateShoppingCartTotal()
  

}
function quantityChanged(event){
 const input= event.target;
 if(input.value<=0){
    input.value=1

 }
 
 updateShoppingCartTotal()


}

 /*
 function addCarritoItem(e){

  const button= e.target
  const item=button.closest("contenedor__tarjetas")
  const nombre=item.document.querySelector(".nombre").textContent
  const descripcion=item.document.querySelector(".card-text").textContent
  const precio=item.document.querySelector(".precios").textContent
  const id=item.document.querySelector(".id").textContent
  const imagen=item.document.querySelector(".card-img-top").src

  const newCarrito={
    imagen:imagen,
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    id:id,
    cantidad:1,


  }
  addItemCarrito(newCarrito)
}
function addItemCarrito(newCarrito){
  carrito.push(newCarrito)
  renderCarrito()

}
function renderCarrito(){
  contenedorCarrito.innerHTML= ""
  carrito.map(item=>{
    const div=document.createElement("div")
    div.classList.add("itemCarrito")
    const content=`  <th scope="row"></th>
    <td class="table__productos">
    <img src=${item.img} alt="">
    <h6 class="title">${item.nombre}</h6>
    </td>
    <td class="table__price"><span>$ ${item.precio}</span></td>
    
    <td class="table__cantidad">
    <input type="number" min="1" value=${item.cantidad} class="input__elemento">
    <button class="delete btn btn-danget">X</button>
    </td>`
    div.innerHTML=content;
  contenedorCarrito.appendChild(div)


  })
  console.log(carrito)
 }
 //agregar al carrito 
/*
 const agregarAlCarrito = (prodId)=>{
  
  
  const item =baseDeDatos.find((producto) =>producto.id === prodId)
    
   for(let i=0;i< carrito.length;i++){
    if(carrito[i].id === item.id ){
      carrito[i].cantidad++
      return null
    }
   }
  
   carrito.push(item)
  
   renderCarrito()
  
   

  
  
 }
 function renderCarrito(){
  contenedorCarrito.innerHTML= ""
  carrito.map(item=>{
    const div=document.createElement("div")
    div.classList.add("itemCarrito")
    const content=`  <th scope="row"></th>
    <td class="table__productos">
    <img src=${item.img} alt="">
    <h6 class="title">${item.nombre}</h6>
    </td>
    <td class="table__price"><span>$ ${item.precio}</span></td>
    
    <td class="table__cantidad">
    <input type="number" min="1" value=${item.cantidad} class="input__elemento">
    <button class="delete btn btn-danget">X</button>
    </td>`
    div.innerHTML=content;
  contenedorCarrito.appendChild(div)


  })
  console.log(carrito)
 }
 /*

//eliminar del carrito
const eliminarDelCarrito=(prodId)=>{
  

  const item=carrito.find((producto)=>producto.id === prodId)
  //Metodo indexof , busca el indice en que se encuentra
  const indice=carrito.indexOf(item)
  //se utiliza metodo slice para elminiar por parmetro indice y la cantidad de elementos 1
  carrito.splice(indice,1)
  actualizarCarrito()
}



//infor del carrito Modal
 const actualizarCarrito=()=>{
  //evitar que se duplique info del carrito
  contenedorCarrito.innerHTML=""
  carrito.forEach((producto)=>{
    const contenodorCard=document.createElement("div")
    contenodorCard.classList.add("contenedor-Carrito")
    contenodorCard.innerHTML =`
    <th scope="row"></th>
            <td class="table__productos">
            <img src=${producto.img} alt="">
            <h6 class="title">${producto.nombre}</h6>
            </td>
            <td class="table__price"><span>$ ${producto.precio}</span></td>
            
            <td class="table__cantidad">
            <input type="number" min="1" value=${producto.cantidad} class="input__elemento">
            <button class="delete btn btn-danget">X</button>
            </td>
   `
   contenedorCarrito.appendChild(contenodorCard)
  
   localStorage.setItem('carrito',JSON.stringify(carrito))
   })
   //para que cuente la cantidad de productos en el carrito igualamos a su logitud

   contadorCarrito.innerText=carrito.length
   //Calcular el precio total con metodo reduce, valor inicial de 0 
   carritoTotal()
 }
 

function carritoTotal(){
  let total=0
  const itemCarritoTotal=document.getElementById("precioTotal")
  carrito.forEach((item)=>{
    const precio=Number(item.precio.replace("$",""))
    total=total+ precio*item.cantidad
  })
}
*/
