// variables para usuario y contraseña

// usuario1 maria contraseña 123
// usuario2 jose contraseña 123
let usuario="nombre";
let contraseña= "pass";

// funciones generales

function saludo(nom){
    console.log(" hola " + usuario);
    document.write("<p>"+"hola "+ usuario+"</p>" );
    return " hola " + usuario;

}

function despedida(nom){
    console.log(" adios  " + usuario );
    document.write("<p>"+" adios  " + usuario +"</p>");
    return " adios " + usuario;

}

function grasaCorporal(peso1, altura1){
    var indiceMasa=peso1/(altura1*altura1);
    
    
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

// inicializando peticion de datos

usuario =prompt("ingrese usuario");


// USUARIO maria en minusculas
// CONTRASEÑA 123


// ciclo while de ingresar un usuario correto donde se tendran 3 oportunidades que las da el contador i
let i=0
while(usuario==="maria" && i!=3){
    contraseña=prompt(" ingrese contraseña")
    

    
    while(contraseña==="123"){

        saludo(usuario);
        if(contraseña==123){


            // tomamos del usuario el peso y la altura para hallar el indice de grasa corporal
            
            
                let peso=prompt(" ingrese peso actual en kilogramos ");
                let altura=prompt(" ingrese altura actual en metros separados por , coma ");

                // llamamos y damos parametros a las funcioines priuncipales
                grasaCorporal(peso , altura );

                despedida(usuario);
                usuario="nn";
                contraseña="mm";

            

        }
        
        
        

    }

    i++;

    
}

// USUARIO jose en minusculas
// CONTRASEÑA 123


// ciclo while de ingresar un usuario correto donde se tendran 3 oportunidades que las da el contador i

while(usuario==="jose" && i!=3){
    contraseña=prompt(" ingrese contraseña")
    

   
    while(contraseña==="123"){

        saludo(usuario);
        if(contraseña==123){
            
            // tomamos del usuario el peso y la altura para hallar el indice de grasa corporal
                let peso=prompt(" ingrese peso actual en kilogramos ");
                let altura=prompt(" ingrese altura actual en metros separados por , coma ");


                // llamamos y damos parametros a las funcioines priuncipales
                grasaCorporal(peso , altura );

                despedida(usuario);
                usuario="nn";
                contraseña="mm";

            

        }
        
        
        

    }

    i++;

    
}


       
