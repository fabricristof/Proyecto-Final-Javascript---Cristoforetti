/* let cantidadDeUsuarios = parseFloat(prompt("Ingrese cantidad de personas"))


console.log (cantidadDeUsuarios)

function mostrar(mensaje) {
    alert(mensaje)
    
}


for (let i = 0; i< cantidadDeUsuarios; i++) {

    do { nombreDeUsuario = console.log (prompt("Ingrese nombre de Usuario "))

         const gastos = { 
         comida: parseInt(prompt("Ingrese lo que gasto en comida")),
          bebida: parseInt(prompt("Ingrese lo que gasto en bebida")),
         }
    
         console.log(gastos)   
         sumaGastos = parseInt(gastos.bebida + gastos.comida)
         console.log ( "En total gastó " + sumaGastos)

        if (prompt ==" " && prompt == "Esc") {
            break
        }
        
    } while (cantidadDeUsuarios< i );

    
    
   totales = sumaGastos * cantidadDeUsuarios
     
    
    
}
console.log ( "El total gastado es " + totales)
divisionTotal = parseFloat( totales / cantidadDeUsuarios)

console.log("El total por cada Usuario es: " + divisionTotal)

mostrar (" Cada uno es " + divisionTotal)
 */




/* SECCION HOMBRE */

let stockProductosHombre = [
    {nombre: "Remera básica", precio: "3999", stock:10, imgUrl: "../imagenes/camisahombre.png"},
    {nombre: "Remera polo", precio: "10999", stock:4, imgUrl: "../imagenes/camisahombre.png"},
    {nombre: "Remera estampada", precio: "5999", stock:20, imgUrl: "../imagenes/camisahombre.png"},
    {nombre: "Remera con botones", precio: "8999", stock:8, imgUrl: "../imagenes/camisahombre.png"}
]

let contenedorHombre = document.getElementById("contenedorProductosH")

 for (const producto of stockProductosHombre) {
    let tarjetaHombre = document.createElement ("div")
    tarjetaHombre.className = "productosHombre col-xl-6 col-md-6 col-sm-12 lead mt-5"
    tarjetaHombre.innerHTML = `
     <img src=${producto.imgUrl}>

    
    `
    contenedorHombre.append(tarjetaHombre)
 }





    
