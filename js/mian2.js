// declaracion de variables globales

let accesoUser= false
let accesoPass= false
let usuarioActivo="nn"
let continuar="  "
let busquedas= true

// funciones globales

function saludar( usuarioActivos){
    console.log(" bienvenido " + usuarioActivos)
    document.write("<p>"+"hola "+ usuarioActivos +"</p>" );
    return ' Bienvenido ' +usuarioActivos
}

function despedida( usuarioActivos){

    document.write("<p>"+" adios  " + usuarioActivos +"</p>");
    console.log(" Adios " + usuarioActivos)
    return ' Adios ' + usuarioActivos
}


function grasaCorporal(peso1, altura1){
    var indiceMasa=peso1/(altura1*altura1)
    indiceMasa=parseFloat(indiceMasa)
    
    
    if(indiceMasa<16.00){

    }
     else if(indiceMasa<16.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion severa" )

         document.write( "<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write( "<p>"+" tienes un bajo peso y diagnostico de desnutricion severa"+"</p>" )
        
    }
    else if(indiceMasa<17.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion moderada" )

         document.write( "<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes un bajo peso y diagnostico de desnutricion moderada"+"</p>" )
        
    }
    else if(indiceMasa<18.50){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo peso y diagnostico de desnutricion leve" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes un bajo peso y diagnostico de desnutricion leve" +"</p>")
        
    }
    else if(indiceMasa<25.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un bajo normal" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
        document.write("<p>"+" tienes un pesp normal" +"</p>")
        
    }
    else if(indiceMasa<29.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes un sobrepeso diagnostrico de pre-obesidad" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes un peso normal"+"</p>" )
        
    }
    else if(indiceMasa<35.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 1 diagnostrico leve moderado" )

         document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
         document.write("<p>"+" tienes obesidad grado 1 diagnostrico leve moderado" +"</p>")
        
    }

    else if(indiceMasa<40.00){
        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 2 diagnostrico obesidad severa" )

        document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
        document.write("<p>"+" tienes obesidad grado 2 diagnostrico obesidad severa" +"</p>")
        
    }

    else{

        console.log(" su indice de masa corporal es de " + indiceMasa + " %")
        console.log(" tienes obesidad grado 3 diagnostrico obesidad morbida" )

        document.write("<p>"+" su indice de masa corporal es de " + indiceMasa + " %"+"</p>")
        document.write("<p>"+" tienes obesidad grado 3 diagnostrico obesidad morbida" +"</p>")

    }

}

// programas de entrenamientos Gimnasio Fajard

const programas=[
    {
        programa: "perdida",
        dudacion: " 3 semanas ",
        sede : " principal ",
        costo: 50,
        detalles:" este programa consta de alta exigencia cardio vascular y una sana alimentacion "

    },

    
    {
        programa: "tonificacion",
        dudacion: " 5 semanas ",
        sede : "principal y sede norte",
        costo: 80,
        detalles:" en este programa trabajaremos con un peso nivel medio y bastantes repeticiones "

    },

    {
        programa: "crecimiento",
        dudacion: " 10 semanas ",
        sede : "principal y sede norte",
        costo: 100,
        detalles:" en este programa trabajaremos con un peso nivel alto y pocas repeticiones "

    }


]


function escogerPrograma( posicion, detalle){
    

    return " el programa consta de " + programas[posicion]


}


// lista de usuarios

let usuarios=["maria", "jose", "jesus", "sol", "luna"]

let pass=[ "111", "222",  "333",  "444",  "555"  ]

// maria  contraseña  111         
// jose  contraseña   222     
// jesus  contraseña  333      
// adan  contraseña   444     
// eva   contraseña   555    





let usuario=prompt(" ingrese nombre de usuario ")
for( i=0; i<usuarios.length; i++){
    
    console.log(i)
    console.log(usuario)
    console.log(usuarios[i])
    console.log(usuarios.length)
    
    
    accesoUser=( usuario==usuarios[i])

    if(accesoUser== true){
        
        usuarioActivo=usuario
        
        console.log(" acceso correcto")


        // for de 3 intentos de contraña

        for(j=0; j<3;j++){

        
        let password=prompt(" ingrese contraseña ")
        if( password==pass[i]){
            console.log( " usuario y contraseña correctos")
             i=5 // fin ciclo usuario
            j=5  // fin ciclo contrasa
            let peso=prompt("ingrese peso")
            let altura=prompt("ingrese altura en metros")

            saludar( usuarioActivo)


            grasaCorporal(peso, altura)

            

            while ( busquedas==true){

                console.log( "programas ")
                console.log( "1. perdida ")
                console.log( "1. perdida y tonificacion")
                console.log( "1. tonificacion ")
                console.log( "1. crecimiento")


                continuar= prompt(" desea ver detalles de nuestros programas escriba si o no")

                if(continuar =="si" ){

                    let busqueda= prompt(" en que programa esta interesad@? perdida, tonificacion o crecimiento  ")
                    console.log(programas.find((programas)=> programas.programa==busqueda));

                }

                else if ( continuar=="no"){
                    busquedas= false
                }

                

                

            }

            






            despedida( usuarioActivo)
        }
        else{
            console.log( " contraseña erronea")
        }

    }
        

}
    
    
}
alert(" Fin programa ")