let cantidadDeUsuarios = parseFloat(prompt("Ingrese cantidad de personas"))


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

    
