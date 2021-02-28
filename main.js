//Creamos nuevo array donde guardaremos todos los objetos JSON que el usuario vaya creando a traves del formulario que nosotros hemos creado 
let campeones = [
    {
        id: 1,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        rol: "Tanque",
        caracteristicas: "Fuerte",
        imagen: "img/Ash.png"
    },
    {
        id: 2,
        nombre: "Buck",
        titulo: "El Indomable",
        HP: 2300,
        rol: "Flanco",
        caracteristicas: "Agil",
        imagen: "img/Buck.png"
    },
    {
        id: 3,
        nombre: "Ying",
        titulo: "La Flor",
        HP: 2200,
        rol: "Sanador",
        caracteristicas: "Bondadoso",
        imagen: "img/Ying.png"
    },
    {
        id: 4,
        nombre: "Viktor",
        titulo: "El Lobo Solitario",
        HP: 2200,
        rol: "Daño",
        caracteristicas: "Fuerte Agil Inteligente",
        imagen: "img/Viktor.png"
    },
    {
        id: 5,
        nombre: "Sha Lin",
        titulo: "El Viento del Desierto",
        HP: 2000,
        rol: "Daño",
        caracteristicas: "Fuerte Bondadoso",
        imagen: "img/ShaLin.png"
    }, 
];

let idnum = 5//Variable; contador de la id que empieza por el 5 y se ira incrementado cada vez que se crea un nuevo personaje

var taula = document.getElementById("taula");//Variable; donde vamos a mostrar el contenido que hay dentro del "DIV TAULA"
var insertar = document.getElementById("insertar");//Variable; donde vamos a mostrar el contenido que hay dentro de "DIV INSERTAR"
var actualizar = document.getElementById("actualizar");//Variable; donde vamos a mostrar el contenido que hay dentro de "DIV INSERTAR"
var tabla = document.createElement("table");//Variable; donde mostramos la tabla que vamos a crear

/*Salto de linea entre la tabla y el boton crear nuevo personaje*/
var SaltoLinea = document.createElement("br");

/*Creacion del boton Nuevo Personaje */
var NuevoPersonajeBoton = document.createElement("button");


updateTabla();

/*------------------------------------------------------*/
                    /*Div tabla*/
/*------------------------------------------------------*/
function updateTabla (){
    
taula.appendChild(tabla);//Agregamos al "DIV TAULA" el contenido que vamos a crear en la variable tabla 

//Este bucle va borrando el ultimo hijo de la tabla hasta que no queda ninguno
  while (tabla.lastElementChild) {
    tabla.removeChild(tabla.lastElementChild);
      
  }
    
    let contador = campeones.length;//Variable; lo que estamos haciendo es contar todos los objetos JSON que tiene nuestro array
    
//Creamos las casillas de latabla que vamosa a utilizar 	
    for (let i = 0; i < (contador+1); i++){
        eval('var r' + i + '= document.createElement("tr");');
        tabla.appendChild(eval('r'+i));
        for (let j = 0; j < 9; j++){
            eval('var r' + i + '_' + j +'= document.createElement("td");');
            eval('r'+i).appendChild(eval('r' + i +'_' + j));
        }
        
    }
	
//Creamos los titulos de la tabla que vamos a mostrar en cada fila 
    var r0_0c = document.createTextNode("ID");
    var r0_1c = document.createTextNode("NOMBRE");
    var r0_2c = document.createTextNode("TITULO");
    var r0_3c = document.createTextNode("HP");
    var r0_4c = document.createTextNode("ROL");
    var r0_5c = document.createTextNode("CARACTERISTICAS");
    var r0_6c = document.createTextNode("IMAGEN");
    var r0_7c = document.createTextNode("MODIFICAR");
    var r0_8c = document.createTextNode("ELIMINAR");

    for (let i = 0; i < contador; i++){

        //Creamos el contenido que irá en las tablas a partir de los valores del array
        
        eval('var r' + (i+1) + '_0c = document.createTextNode(campeones[i].id);');
        eval('var r' + (i+1) + '_1c = document.createTextNode(campeones[i].nombre);');
        eval('var r' + (i+1) + '_2c = document.createTextNode(campeones[i].titulo);');
        eval('var r' + (i+1) + '_3c = document.createTextNode(campeones[i].HP);');
        eval('var r' + (i+1) + '_4c = document.createTextNode(campeones[i].rol);');
        eval('var r' + (i+1) + '_5c = document.createTextNode(campeones[i].caracteristicas);');
        eval('var r' + (i+1) + '_6c = document.createElement("img");');
        eval('r' + (i+1) + '_6').appendChild(eval('r' + (i+1) + '_6c'));
        eval('r' + (i+1) + '_6c').setAttribute("width", "75");
        eval('r' + (i+1) +'_6c').setAttribute("src", campeones[i].imagen);
        //En el caso de que se haga doble click en unaimagen, esta será eliminada del array y de la tabla
        eval('r' + (i+1) + '_6c').addEventListener ("dblclick", function() {
            delete campeones[i].imagen;
            eval('r' + (i+1) + '_6').removeChild(eval('r' + (i+1) + '_6c'));
            
         });
        
         /*Cuando le demos a un botón modificar, guardaremos el numero del personaje que
        estamos modificando en idTabla y generaremos un formulario correspondiente a este.*/
            
        eval('var r' + (i+1) + '_7c = document.createElement("button");');
        eval('r' + (i+1) + '_7c').innerHTML = "Modificar";
        eval('r' + (i+1) + '_7c').id=i;
        eval('r' + (i+1) + '_7c').addEventListener ("click", function() {
            let idTabla = this.id
            var CrearFormulario = document.createElement("form");
            actualizar.appendChild(CrearFormulario);
            formulario(CrearFormulario, idTabla);
        });  
        
        /*El boton eliminar eliminará el personaje correspondiente del array y volverá
        a cargar la tabla*/

        eval('var r' + (i+1) + '_8c = document.createElement("button");');
        eval('r' + (i+1) + '_8c').innerHTML = "Eliminar";
        eval('r' + (i+1) + '_8c').id=i;
        eval('r' + (i+1) + '_8c').addEventListener ("click", function() {
            campeones.splice(this.id,1);
            updateTabla();
        });
    }
	//Rellenamos la tabla con los contenidos que hemos creado 
    for (let i = 0; i < (contador+1); i++){
        for (let j = 0; j < 9; j++){
            eval('r' + i +'_' + j).appendChild(eval('r' + i + '_' + j + 'c'));
        }
    }


//Le aplicamos un salto de linea al "DIV TABLA", este salto de linea se refleja entre la tabla y el boton llamado "Nuevo Personaje"
taula.appendChild(SaltoLinea);

//Añadimos dentro del " DIV TAULA " el boton "Nuevo Personaje" que nos mostrara un formulario en el "DIV INSERTAR"
taula.appendChild(NuevoPersonajeBoton);   
NuevoPersonajeBoton.innerHTML=("Nuevo Personaje"); 
NuevoPersonajeBoton.addEventListener ("click", div_insertar);

}

//En el "DIV INSERTAR" creamos la etiqueta form , que se le va aplicar al div insertar
function div_insertar (){
    var CrearFormulario = document.createElement("form");
    insertar.appendChild(CrearFormulario);
    formulario(CrearFormulario);    
}
    
   

/*------------------------------------------------------*/
                    /*Formulario*/
/*------------------------------------------------------*/
    

    function formulario (CrearFormulario, idTabla){
        //Declaramos NewImagen para utilizarlo después
        var NewImagen="";
        
        //Borramos la tabla con un bucle que elimina sus hijos
        while (taula.lastElementChild) {
            taula.removeChild(taula.lastElementChild);
        }
		
		//Creamos la etiqueta label, donde le pondremos "nombre " que sera como se mostrara en el formulario y esto se le va aplicar a la variable "CrearFormulario y tituloNombre"			
        var tituloNombre = document.createElement("label");
        var tituloNombreContenido = document.createTextNode("Nombre");
        CrearFormulario.appendChild(tituloNombre);
        tituloNombre.appendChild(tituloNombreContenido);
		//Le asignamos los atribitus necesarios a la etiqueta label en este caso se le asignara a "nombre"		
        var inputNombre = document.createElement("input");
        inputNombre.setAttribute("type", "text");
        inputNombre.setAttribute("id", "nombre");
        CrearFormulario.appendChild(inputNombre);
		
		//Salto de linea
        var SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

		//Creamos la etiqueta label con el nombre a mostrar"titulo" y esto se lo aplicamos a la variable "CrearFormulario"
        var tituloNombre = document.createElement("label");
        var tituloNombreContenido = document.createTextNode("Titulo");
        CrearFormulario.appendChild(tituloNombre);
        tituloNombre.appendChild(tituloNombreContenido);
		//Creamos un input donde le asignamos unos atributos y todo esto se lo aplicamos a la variable "CrearFormulario"		
        var inputTitulo = document.createElement("input");
        inputTitulo.setAttribute("type", "text");
        inputTitulo.setAttribute("id", "titulo");
        CrearFormulario.appendChild(inputTitulo);

		//Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
		
        //Creamos la etiqueta label con el nombre a mostrar"Hp" y esto se lo aplicamos a la variable "CrearFormulario"
        var tituloNombre = document.createElement("label");
        var tituloNombreContenido = document.createTextNode("Hp");
        CrearFormulario.appendChild(tituloNombre);
        tituloNombre.appendChild(tituloNombreContenido);
		//Creamos un input donde le asignamos unos atributos y todo esto se lo aplicamos a la variable "CrearFormulario"		
        var inputHp = document.createElement("input");
        inputHp.setAttribute("type", "number");
        inputHp.setAttribute("id", "hp");
        CrearFormulario.appendChild(inputHp);

		//Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

		//Creamos la etiqueta label con el nombre a mostrar"Rol" y esto se lo aplicamos a la variable "CrearFormulario"
        var tituloNombre = document.createElement("label");
        var tituloNombreContenido = document.createTextNode("Rol");
        CrearFormulario.appendChild(tituloNombre);
        tituloNombre.appendChild(tituloNombreContenido);
		//Creamos un input donde le asignamos uno atributo y este se lo aplicamos a la variable "CrearFormulario"	
        var inputRol = document.createElement("select");
        inputRol.setAttribute("id", "rol");
        CrearFormulario.appendChild(inputRol);
		//Creamos un input en blanco por defecto que es como se muestra en el formulario 
        var inputRolVacio = document.createElement("option");
        inputRol.appendChild(inputRolVacio);
        var inputRolVacioContenido = document.createTextNode("");
        inputRolVacio.appendChild(inputRolVacioContenido);
		//Creamos un input menu desplegable con 4 opciones, pero hay que sumar tambien el espacio en blaco en total tenemos 5 opciones 
        var inputRolDaño = document.createElement("option");
        inputRol.appendChild(inputRolDaño);
        var inputRolDañoContenido = document.createTextNode("Daño");
        inputRolDaño.appendChild(inputRolDañoContenido);
        var inputRolFlanco = document.createElement("option");
        inputRol.appendChild(inputRolFlanco);
        var inputRolFlancoContenido = document.createTextNode("Flanco");
        inputRolFlanco.appendChild(inputRolFlancoContenido);
        var inputRolTanque = document.createElement("option");
        inputRol.appendChild(inputRolTanque);
        var inputRolTanqueContenido = document.createTextNode("Tanque");
        inputRolTanque.appendChild(inputRolTanqueContenido);
        var inputRolSanador = document.createElement("option");
        inputRol.appendChild(inputRolSanador);
        var inputRolSanadorContenido = document.createTextNode("Sanador");
        inputRolSanador.appendChild(inputRolSanadorContenido);

        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
		
        //Creamos la etiqueta label con el nombre a mostrar"Hp" y esto se lo aplicamos a la variable "CrearFormulario"		
        var tituloNombre = document.createElement("label");
        var tituloNombreContenido = document.createTextNode("Caracteristicas");
        CrearFormulario.appendChild(tituloNombre);
        tituloNombre.appendChild(tituloNombreContenido);

        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

        var inputCaracteristicas1 = document.createElement("input");
        inputCaracteristicas1.setAttribute("type", "checkbox");
        inputCaracteristicas1.setAttribute("class", "checks");
        inputCaracteristicas1.setAttribute("id", "caracteristicas1");
        inputCaracteristicas1.setAttribute("name", "caracteristicas1");
        inputCaracteristicas1.setAttribute("value", "Fuerte");
        CrearFormulario.appendChild(inputCaracteristicas1);

        var inputCaracteristicas1Name = document.createElement("label");
        inputCaracteristicas1Name.setAttribute("for", "caracteristicas1");
        CrearFormulario.appendChild(inputCaracteristicas1Name);
        var inputCaracteristicas1Contenido = document.createTextNode("Fuerte");
        inputCaracteristicas1Name.appendChild(inputCaracteristicas1Contenido);

        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

        var inputCaracteristicas2 = document.createElement("input");
        inputCaracteristicas2.setAttribute("type", "checkbox");
        inputCaracteristicas2.setAttribute("class", "checks");
        inputCaracteristicas2.setAttribute("id", "caracteristicas2");
        inputCaracteristicas2.setAttribute("name", "caracteristicas2");
        inputCaracteristicas2.setAttribute("value", "Agil");
        CrearFormulario.appendChild(inputCaracteristicas2);

        var inputCaracteristicas2Name = document.createElement("label");
        inputCaracteristicas2Name.setAttribute("for", "caracteristicas2");
        CrearFormulario.appendChild(inputCaracteristicas2Name);
        var inputCaracteristicas2Contenido = document.createTextNode("Agil");
        inputCaracteristicas2Name.appendChild(inputCaracteristicas2Contenido);

        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

        var inputCaracteristicas3 = document.createElement("input");
        inputCaracteristicas3.setAttribute("type", "checkbox");
        inputCaracteristicas3.setAttribute("class", "checks");
        inputCaracteristicas3.setAttribute("id", "caracteristicas3");
        inputCaracteristicas3.setAttribute("name", "caracteristicas3");
        inputCaracteristicas3.setAttribute("value", "Bondadoso");
        CrearFormulario.appendChild(inputCaracteristicas3);

        var inputCaracteristicas3Name = document.createElement("label");
        inputCaracteristicas3Name.setAttribute("for", "caracteristicas3");
        CrearFormulario.appendChild(inputCaracteristicas3Name);
        var inputCaracteristicas3Contenido = document.createTextNode("Bondadoso");
        inputCaracteristicas3Name.appendChild(inputCaracteristicas3Contenido);
        
        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

        var inputCaracteristicas4 = document.createElement("input");
        inputCaracteristicas4.setAttribute("type", "checkbox");
        inputCaracteristicas4.setAttribute("class", "checks");
        inputCaracteristicas4.setAttribute("id", "caracteristicas4");
        inputCaracteristicas4.setAttribute("name", "caracteristicas4");
        inputCaracteristicas4.setAttribute("value", "Inteligente");
        CrearFormulario.appendChild(inputCaracteristicas4);

        var inputCaracteristicas4Name = document.createElement("label");
        inputCaracteristicas4Name.setAttribute("for", "caracteristicas4");
        CrearFormulario.appendChild(inputCaracteristicas4Name);
        var inputCaracteristicas4Contenido = document.createTextNode("Inteligente");
        inputCaracteristicas4Name.appendChild(inputCaracteristicas4Contenido);
        
        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);

        var tituloNombre = document.createElement("label");
        var tituloNombreContenido = document.createTextNode("Imagen");
        CrearFormulario.appendChild(tituloNombre);
        tituloNombre.appendChild(tituloNombreContenido);
        var inputImagen = document.createElement("input");
        inputImagen.setAttribute("type", "file");
        inputImagen.setAttribute("id", "imagen");
        CrearFormulario.appendChild(inputImagen);

        //Salto de linea
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        SaltoLinea = document.createElement("br");
        CrearFormulario.appendChild(SaltoLinea);
        
        /*En el caso de que estemos modificando un personaje, los inputs se rellenarán
        con los valores de dicho personaje*/

        if (idTabla!=undefined){
            /*En el caso de Nombre, Titulo, HP e imagen aplica directamente los valores
            de los atributos*/
            inputNombre.setAttribute("value", campeones[idTabla].nombre);
            inputTitulo.setAttribute("value", campeones[idTabla].titulo);
            inputHp.setAttribute("value", campeones[idTabla].HP);
            NewImagen = campeones[idTabla].imagen
            /*En el caso de las caracteristicas, marcará como checked aquellas que pueda
            encontrar en el string*/
            if(campeones[idTabla].caracteristicas.includes("Fuerte")){
                inputCaracteristicas1.setAttribute("checked", "checked");
            }
            if(campeones[idTabla].caracteristicas.includes("Agil")){
                inputCaracteristicas2.setAttribute("checked", "checked");
            }
            if(campeones[idTabla].caracteristicas.includes("Bondadoso")){
                inputCaracteristicas3.setAttribute("checked", "checked");
            }
            if(campeones[idTabla].caracteristicas.includes("Inteligente")){
                inputCaracteristicas4.setAttribute("checked", "checked");
            }
            /*En el caso del rol, seleccionará aquel que pueda encontrar en el
            string*/
            if(campeones[idTabla].rol == "Daño"){
                inputRolDaño.setAttribute("selected", "selected");
            }
            if(campeones[idTabla].rol == "Flanco"){
                inputRolFlanco.setAttribute("selected", "selected");
            }
            if(campeones[idTabla].rol == "Tanque"){
                inputRolTanque.setAttribute("selected", "selected");
            }
            if(campeones[idTabla].rol == "Sanador"){
                inputRolSanador.setAttribute("selected", "selected");
            }
        }
        
    
        
    var BotonCrear = document.createElement("button");
    BotonCrear.innerHTML=("Crear Personaje"); 
    BotonCrear.addEventListener ("click", function() { 
        var NewNombre = document.getElementById("nombre").value;
        var NewTitulo = document.getElementById("titulo").value;
        var NewRol = document.getElementById("rol").value;
            /*Comprueba si alguno de de los campos obligatorios esta vacio, si se da el caso comprueba
            cada uno de ellos y le pone un borde rojo o negro depediendo de si esta relleno o no*/
        if(NewNombre=="" || NewTitulo=="" || NewRol==""){
            
            if(NewNombre==""){
                inputNombre.setAttribute("style", "border: 5px solid red");
            }else{
                inputNombre.setAttribute("style", "");
            }
            
            if(NewTitulo==""){
                inputTitulo.setAttribute("style", "border: 5px solid red");
            }else{
                inputTitulo.setAttribute("style", "");
            }
            
            if(NewRol==""){
                inputRol.setAttribute("style", "border: 5px solid red");
            }else{
                inputRol.setAttribute("style", "");
            }
            
            
        }else{
            
            //Aplica el valor de HP en NewHP, en el caso de que sea nulo lo deja vacio
            var NewHp = document.getElementById("hp").value;
            if (NewHp==null){
                NewHp="";
            }
            
            //Recorre las caracteristicas que tenemos marcadas y crea un String con ellas
            
            var checks = document.getElementsByClassName('checks');
            var NewCaracteristicas = '';

            for ( i = 0; i < 4; i++) {
                if ( checks[i].checked === true ) {
                NewCaracteristicas += checks[i].value + " ";
                }
            }
            
            //Esto es en el caso de que creemos un personaje nuevo
            
            if (idTabla==undefined){
            /*Crea una variable con la imagen que hemos creado, en el caso de que no
            encuentre ninguna, aplica la predeterminada*/
            try{
            NewImagen = document.getElementById("imagen").files[0].name;
            }catch(err){}
            if (document. getElementById("imagen"). value. length == 0){
                NewImagen="Desconocido.jpg";
            }
            
            //Crea un nuevo personaje con las caracteristicas definidas

                idnum++;
                campeones.push ({
                    id: idnum,
                    nombre: NewNombre,
                    titulo: NewTitulo,
                    HP: NewHp,
                    rol: NewRol,
                    caracteristicas: NewCaracteristicas,
                    imagen: "img/" + NewImagen
                });
            }else{

            //Si se ha modificado la imagen, la variable se queda con la nueva selección

                if (document. getElementById("imagen"). value. length != 0){
                    NewImagen = "img/" + document.getElementById("imagen").files[0].name;
                }
                    
                //Modifica el personaje con las caracteristicas definidas

                numidTabla = parseInt(idTabla);
                campeones[idTabla] = ({
                    id: (numidTabla+1),
                    nombre: NewNombre,
                    titulo: NewTitulo,
                    HP: NewHp,
                    rol: NewRol,
                    caracteristicas: NewCaracteristicas,
                    imagen: NewImagen
                });
            }

            //Vacia los divs de insertar y eliminar y genera la tabla

            while (insertar.lastElementChild) {
                insertar.removeChild(insertar.lastElementChild);
            }
            while (actualizar.lastElementChild) {
                actualizar.removeChild(actualizar.lastElementChild);
            
            }
            updateTabla();
            }
            event.preventDefault();
        
    });
    CrearFormulario.appendChild(BotonCrear);

    /*Al cancelar el formulario vaciamos los divs insertar y actualizar y volvemos a generar
    la tabla sin tener en cuenta el contenido del formulario*/
    
    var BotonCancelar = document.createElement("button");
    BotonCancelar.innerHTML=("Cancelar"); 
    CrearFormulario.appendChild(BotonCancelar);
    BotonCancelar.addEventListener ("click", function(event) {
        
        
        
        while (insertar.lastElementChild) {
            insertar.removeChild(insertar.lastElementChild);
        }
        while (actualizar.lastElementChild) {
            actualizar.removeChild(actualizar.lastElementChild);  
        }
        updateTabla();
        event.preventDefault();
        
             
    })
    }; 