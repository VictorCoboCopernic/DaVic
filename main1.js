
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

function eliminar () {
    console.log("Hola");
}

function modificar (i) {
    
}

function mostrarTaula () {
        let dibujarTabla = "<table> ";
            dibujarTabla += "<tr> <td> ID</td>";
            dibujarTabla += "<td> Nombre </td>";
            dibujarTabla += "<td> Titulo </td>";
            dibujarTabla += "<td> HP </td>";
            dibujarTabla += "<td> Rol </td>";
            dibujarTabla += "<td> Imagen </td> </tr>";
        for (let i = 0; i < campeones.length; i++){
            dibujarTabla += "<tr> <td>" + campeones[i].id + "</td>";
            dibujarTabla += "<td>" + campeones[i].nombre + "</td>";
            dibujarTabla += "<td>" + campeones[i].titulo + "</td>";
            dibujarTabla += "<td>" + campeones[i].HP + "</td>";
            dibujarTabla += "<td>" + campeones[i].rol + "</td>";
            dibujarTabla += "<td> <img src=" + campeones[i].imagen + " style='width:100px;height:100px;'> </td>";
            dibujarTabla += "<td>";
            dibujarTabla += "<button onclick='eliminar()'>Eliminar</button>";
            dibujarTabla += "</td>";
            dibujarTabla += "<td>";
            dibujarTabla += "<button onclick='modificar()'>Modificar</button>";
            dibujarTabla += "</td> </tr>";
        }
        dibujarTabla += "</table>";
        document.getElementById("taula").innerHTML = dibujarTabla;
    }
    
window.onload = function () {
    mostrarTaula();
};