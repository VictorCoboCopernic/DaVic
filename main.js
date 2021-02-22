let campeones = [
    {
        id: 1,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        rol: "Tanque",
        imagen: "img/Ash.png"
    },
    {
        id: 2,
        nombre: "Buck",
        titulo: "El Indomable",
        HP: 2300,
        rol: "Flanco",
        imagen: "img/Buck.png"
    },
    {
        id: 3,
        nombre: "Ying",
        titulo: "La Flor",
        HP: 2200,
        rol: "Sanador",
        imagen: "img/Ying.png"
    },
    {
        id: 4,
        nombre: "Viktor",
        titulo: "El Lobo Solitario",
        HP: 2200,
        rol: "Daño",
        imagen: "img/Viktor.png"
    },
    {
        id: 5,
        nombre: "Sha Lin",
        titulo: "El Viento del Desierto",
        HP: 2000,
        rol: "Daño",
        imagen: "img/ShaLin.png"
    }, 
];

var taula = document.getElementById("taula");
var tabla = document.createElement("table");
taula.appendChild(tabla);

updateTabla();

/*------------------------------------------------------*/
                    /*Div tabla*/
/*------------------------------------------------------*/
function updateTabla (){
    


  while (tabla.lastElementChild) {
    tabla.removeChild(tabla.lastElementChild);
  }
    
    let contador = campeones.length;
    
    for (let i = 0; i < (contador+1); i++){
        eval('var r' + i + '= document.createElement("tr");');
        tabla.appendChild(eval('r'+i));
        for (let j = 0; j < 8; j++){
            eval('var r' + i + '_' + j +'= document.createElement("td");');
            eval('r'+i).appendChild(eval('r' + i +'_' + j));
        }
        
    }

    var r0_0c = document.createTextNode("ID");
    var r0_1c = document.createTextNode("NOMBRE");
    var r0_2c = document.createTextNode("TITULO");
    var r0_3c = document.createTextNode("HP");
    var r0_4c = document.createTextNode("ROL");
    var r0_5c = document.createTextNode("IMAGEN");
    var r0_6c = document.createTextNode("MODIFICAR");
    var r0_7c = document.createTextNode("ELIMINAR");

    for (let i = 0; i < contador; i++){
        
        eval('var r' + (i+1) + '_0c = document.createTextNode(campeones[i].id);');
        eval('var r' + (i+1) + '_1c = document.createTextNode(campeones[i].nombre);');
        eval('var r' + (i+1) + '_2c = document.createTextNode(campeones[i].titulo);');
        eval('var r' + (i+1) + '_3c = document.createTextNode(campeones[i].HP);');
        eval('var r' + (i+1) + '_4c = document.createTextNode(campeones[i].rol);');
        eval('var r' + (i+1) + '_5c = document.createElement("img");');
        
        eval('r' + (i+1) + '_5').appendChild(eval('r' + (i+1) + '_5c'));
        eval('r' + (i+1) + '_5c').setAttribute("width", "75");
        eval('r' + (i+1) +'_5c').setAttribute("src", campeones[i].imagen);
        
        eval('var r' + (i+1) + '_6c = document.createElement("button");');
        eval('r' + (i+1) + '_6c').innerHTML = "Modificar";
        eval('r' + (i+1) + '_6c').id=i;
        eval('r' + (i+1) + '_6c').addEventListener ("click", function() {
        });  
        
        eval('var r' + (i+1) + '_7c = document.createElement("button");');
        eval('r' + (i+1) + '_7c').innerHTML = "Eliminar";
        eval('r' + (i+1) + '_7c').id=i;
        eval('r' + (i+1) + '_7c').addEventListener ("click", function() {
            campeones.splice(this.id,1);
            updateTabla();
        });
    }

    for (let i = 0; i < (contador+1); i++){
        for (let j = 0; j < 8; j++){
            eval('r' + i +'_' + j).appendChild(eval('r' + i + '_' + j + 'c'));
        }
    }
}

/*Salto de linea entre la tabla y el boton crear nuevo personaje*/
var SaltoLinea = document.createElement("br");
taula.appendChild(SaltoLinea);

/*Creacion del boton Nuevo Personaje */
var NuevoPersonajeBoton = document.createElement("button");
taula.appendChild(NuevoPersonajeBoton);   
NuevoPersonajeBoton.innerHTML=("Nuevo Personaje"); 
NuevoPersonajeBoton.addEventListener ("click", function() {
    while (taula.lastElementChild) {
    taula.removeChild(taula.lastElementChild);
  }
   

/*------------------------------------------------------*/
                    /*Div Insertar*/
/*------------------------------------------------------*/
    var CrearFormulario = document.createElement("form");
    insertar.appendChild(CrearFormulario);

    var tituloNombre = document.createElement("label");
    var tituloNombreContenido = document.createTextNode("Nombre");
    CrearFormulario.appendChild(tituloNombre);
    tituloNombre.appendChild(tituloNombreContenido);
    var inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("id", "nombre");
    CrearFormulario.appendChild(inputNombre);

    var SaltoLinea = document.createElement("br");
    CrearFormulario.appendChild(SaltoLinea);

    var tituloNombre = document.createElement("label");
    var tituloNombreContenido = document.createTextNode("Titulo");
    CrearFormulario.appendChild(tituloNombre);
    tituloNombre.appendChild(tituloNombreContenido);
    var inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("type", "text");
    inputTitulo.setAttribute("id", "titulo");
    CrearFormulario.appendChild(inputTitulo);

    var SaltoLinea = document.createElement("br");
    CrearFormulario.appendChild(SaltoLinea);

    var tituloNombre = document.createElement("label");
    var tituloNombreContenido = document.createTextNode("Hp");
    CrearFormulario.appendChild(tituloNombre);
    tituloNombre.appendChild(tituloNombreContenido);
    var inputHp = document.createElement("input");
    inputHp.setAttribute("type", "text");
    inputHp.setAttribute("id", "hp");
    CrearFormulario.appendChild(inputHp);

    var SaltoLinea = document.createElement("br");
    CrearFormulario.appendChild(SaltoLinea);

    var tituloNombre = document.createElement("label");
    var tituloNombreContenido = document.createTextNode("Rol");
    CrearFormulario.appendChild(tituloNombre);
    tituloNombre.appendChild(tituloNombreContenido);
    var inputRol = document.createElement("input");
    inputRol.setAttribute("type", "text");
    inputRol.setAttribute("id", "rol");
    CrearFormulario.appendChild(inputRol);

    var SaltoLinea = document.createElement("br");
    CrearFormulario.appendChild(SaltoLinea);

    var tituloNombre = document.createElement("label");
    var tituloNombreContenido = document.createTextNode("Imagen");
    CrearFormulario.appendChild(tituloNombre);
    tituloNombre.appendChild(tituloNombreContenido);
    var inputImagen = document.createElement("input");
    inputImagen.setAttribute("type", "file");
    inputImagen.setAttribute("id", "imagen");
    CrearFormulario.appendChild(inputImagen);

    var SaltoLinea = document.createElement("br");
    CrearFormulario.appendChild(SaltoLinea);

    var BotonCrear = document.createElement("button");
    BotonCrear.innerHTML=("Crear Personaje"); 
    BotonCrear.addEventListener ("click", function() {
        alert("Victor capullo");
    });  
    CrearFormulario.appendChild(BotonCrear);

    var BotonCancelar = document.createElement("button");
    BotonCancelar.innerHTML=("Cancelar"); 
    CrearFormulario.appendChild(BotonCancelar);
    BotonCancelar.addEventListener ("click", function() {
        CrearFormulario.preventDefault();
        while (insertar.lastElementChild) {
            insertar.removeChild(insertar.lastElementChild);
        }
        updateTabla();
             
    });  
});  

/*------------------------------------------------------*/
                    /*Div Actualizar*/
/*------------------------------------------------------*/