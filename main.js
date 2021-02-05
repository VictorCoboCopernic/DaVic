let nocampeones = [];
let campeones = [
    {
        id: 1,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        Rol: a,
        imagen: "img/"
    },
    {
        id: 2,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        Rol: a,
        imagen: "img/"
    },
    {
        id: 3,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        Rol: a,
        imagen: "img/"
    },
    {
        id: 4,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        Rol: a,
        imagen: "img/"
    },
    {
        id: 5,
        nombre: "Ash",
        titulo: "La Maquina de Guerra",
        HP: 4500,
        Rol: a,
        imagen: "img/"
    }, 
];

let contador = campeones[campeones.length - 1].id + 1;

let taula = document.getElementById("taula");
let insertar = document.getElementById("insertar");
let actualizar = document.getElementById("actualizar");

window.onload = function () {
    mostrarTaula();
};