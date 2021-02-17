
let nocampeones = [];
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

let contador = campeones[campeones.length - 1].id + 1;

let taula = document.getElementById("taula");
let insertar = document.getElementById("insertar");
let actualizar = document.getElementById("actualizar");

var tabla = document.createElement("table");
var seccion = document.createElement("tr");
var seccionid = document.createElement("td");
var seccionidcontent = document.createTextNode("ID");
var seccionname = document.createElement("td");
var seccionnamecontent = document.createTextNode("NOMBRE");
var secciontitle = document.createElement("td");
var secciontitlecontent = document.createTextNode("TITULO");
var seccionhp = document.createElement("td");
var seccionhpcontent = document.createTextNode("HP");
var seccionrol = document.createElement("td");
var seccionrolcontent = document.createTextNode("ROL");
var seccionimagen = document.createElement("td");
var seccionimagencontent = document.createTextNode("IMAGEN");
var ash = document.createElement("tr");
var ashid = document.createElement("td");
var ashidcontent = document.createTextNode("1");
var ashname = document.createElement("td");
var ashnamecontent = document.createTextNode("Ash");
var ashtitle = document.createElement("td");
var ashtitlecontent = document.createTextNode("La Maquina de Guerra");
var ashhp = document.createElement("td");
var ashhpcontent = document.createTextNode(4500);
var ashrol = document.createElement("td");
var ashrolcontent = document.createTextNode("Tanque");
var ashimagen = document.createElement("td");
var ashimagencontent = document.createTextNode("IMAGEN");

seccionid.appendChild(seccionidcontent);
seccionname.appendChild(seccionnamecontent);
secciontitle.appendChild(secciontitlecontent);
seccionhp.appendChild(seccionhpcontent);
seccionrol.appendChild(seccionrolcontent);
seccionimagen.appendChild(seccionimagencontent);

seccion.appendChild(seccionid);
seccion.appendChild(seccionname);
seccion.appendChild(secciontitle);
seccion.appendChild(seccionhp);
seccion.appendChild(seccionrol);
seccion.appendChild(seccionimagen);

tabla.appendChild(seccion);

ashid.appendChild(ashidcontent);
ashname.appendChild(ashnamecontent);
ashtitle.appendChild(ashtitlecontent);
ashhp.appendChild(ashhpcontent);
ashrol.appendChild(ashrolcontent);
ashimagen.appendChild(ashimagencontent);

ash.appendChild(ashid);
ash.appendChild(ashname);
ash.appendChild(ashtitle);
ash.appendChild(ashhp);
ash.appendChild(ashrol);
ash.appendChild(ashimagen);

tabla.appendChild(ash);

taula.appendChild(tabla);