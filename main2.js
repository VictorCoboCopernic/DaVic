
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
taula.appendChild(tabla);

var seccion = document.createElement("tr");
tabla.appendChild(seccion);

var seccionid = document.createElement("td");
seccion.appendChild(seccionid);

var seccionidcontent = document.createTextNode("ID");
seccionid.appendChild(seccionidcontent);

var seccionname = document.createElement("td");
seccion.appendChild(seccionname);

var seccionnamecontent = document.createTextNode("NOMBRE");
seccionname.appendChild(seccionnamecontent);

var secciontitle = document.createElement("td");
seccion.appendChild(secciontitle);

var secciontitlecontent = document.createTextNode("TITULO");
secciontitle.appendChild(secciontitlecontent);

var seccionhp = document.createElement("td");
seccion.appendChild(seccionhp);

var seccionhpcontent = document.createTextNode("HP");
seccionhp.appendChild(seccionhpcontent);

var seccionrol = document.createElement("td");
seccion.appendChild(seccionrol);

var seccionrolcontent = document.createTextNode("ROL");
seccionrol.appendChild(seccionrolcontent);

var seccionimagen = document.createElement("td");
seccion.appendChild(seccionimagen);

var seccionimagencontent = document.createTextNode("IMAGEN");
seccionimagen.appendChild(seccionimagencontent);

var ash = document.createElement("tr");
tabla.appendChild(ash);

var ashid = document.createElement("td");
ash.appendChild(ashid);

var ashidcontent = document.createTextNode("1");
ashid.appendChild(ashidcontent);

var ashname = document.createElement("td");
ash.appendChild(ashname);

var ashnamecontent = document.createTextNode("Ash");
ashname.appendChild(ashnamecontent);

var ashtitle = document.createElement("td");
ash.appendChild(ashtitle);

var ashtitlecontent = document.createTextNode("La Maquina de Guerra");
ashtitle.appendChild(ashtitlecontent);

var ashhp = document.createElement("td");
ash.appendChild(ashhp);

var ashhpcontent = document.createTextNode(4500);
ashhp.appendChild(ashhpcontent);

var ashrol = document.createElement("td");
ash.appendChild(ashrol);

var ashrolcontent = document.createTextNode("Tanque");
ashrol.appendChild(ashrolcontent);

var ashimagen = document.createElement("td");
ash.appendChild(ashimagen);

var ashimagencontent = document.createTextNode("IMAGEN");
ashimagen.appendChild(ashimagencontent);









