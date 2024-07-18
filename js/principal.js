/*
*PERSONAS-B
*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
*reporte al final la edad promedio y la edad mayor entre las mujeres.
*Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
*José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida
*presenta el siguiente formato:
*Edad promedio: 18.50
*Edad mayor entre las mujeres: 19
*/ 
import Cl_personas from './Cl_personas.js';
import Cl_procesa from './Cl_procesa.js';

let persona1 = new Cl_personas("Luis", 15, "M");
let persona2 = new Cl_personas("Ana", 19, "F");
let persona3 = new Cl_personas("Jose", 21, "M");
let persona4 = new Cl_personas("Carmen", 17, "F");
let persona5 = new Cl_personas("Rosa", 18, "F");
let persona6 = new Cl_personas("Jose", 22, "M");
let persona7 = new Cl_personas("Maria", 17, "F");
let persona8 = new Cl_personas("Luz", 19, "F");
let persona9 = new Cl_personas("Rafael", 23, "M");
let persona10 = new Cl_personas("Liz", 15, "F");
let persona11 = new Cl_personas("Marcos", 20, "M");
let persona12 = new Cl_personas("Leo", 16, "M");
let procesa = new Cl_procesa();
procesa.procesarPersonas(persona1);
procesa.procesarPersonas(persona2);
procesa.procesarPersonas(persona3);
procesa.procesarPersonas(persona4);
procesa.procesarPersonas(persona5);
procesa.procesarPersonas(persona6);
procesa.procesarPersonas(persona7);
procesa.procesarPersonas(persona8);
procesa.procesarPersonas(persona9);
procesa.procesarPersonas(persona10);
procesa.procesarPersonas(persona11);
procesa.procesarPersonas(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = `<br> Edad promedio: ${procesa.promedio().toFixed(2)}`;
salida.innerHTML += `<br> Edad mayor entre las mujeres: ${procesa.edadMayor()}`