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

var tabla = document.createElement("table");
taula.appendChild(tabla);

var r0_0c = document.createTextNode("ID");
var r0_1c = document.createTextNode("NOMBRE");
var r0_2c = document.createTextNode("TITULO");
var r0_3c = document.createTextNode("HP");
var r0_4c = document.createTextNode("ROL");
var r0_5c = document.createTextNode("IMAGEN");
var r0_6c = document.createTextNode("MODIFICAR");
var r0_7c = document.createTextNode("ELIMINAR");
updateTabla();

function updateTabla (){
    
    tabla.innerHTML = '';
    
    let contador = campeones.length;
    
    for (let i = 0; i < (contador+1); i++){
        eval('var r' + i + '= document.createElement("tr");');
        tabla.appendChild(eval('r'+i));
        for (let j = 0; j < 8; j++){
            eval('var r' + i + '_' + j +'= document.createElement("td");');
            eval('r'+i).appendChild(eval('r' + i +'_' + j));
        }
        
    }

    //<button onclick="partida.abandono()" class="BotonAbandona ">ABANDONA</button>

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
        eval('r' + (i+1) + '_7c').innerHTML = "Eliminar",;
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