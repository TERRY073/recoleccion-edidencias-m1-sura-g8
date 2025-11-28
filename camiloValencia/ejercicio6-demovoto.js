// Ejercicio 6: Sistema de Votación 'DemoVoto'
// La Necesidad:
// Un colegio está realizando una elección para personero estudiantil y necesita un sistema de
// urna digital simple. Hay dos candidatos ("Candidato A" y "Candidato B") y la opción de "Voto
// en Blanco". El sistema debe ser a prueba de errores, impidiendo votos duplicados (simulado)
// y mostrando quién va ganando.
// Tu Tarea:
// Crear un programa de consola que simule la urna de votación. Debe permitir registrar votos y
// consultar los resultados parciales.
// Requisitos de Operación:
// ● El sistema debe llevar el conteo de votos para A, B y Blanco.
// ● El menú principal debe ofrecer:
// 1. Votar por Candidato A
// 2. Votar por Candidato B
// 3. Votar en Blanco
// 4. Consultar Resultados Parciales
// 5. Salir
// Lógica de Decisiones (Condicionales):
// ● Opciones 1, 2 y 3 (Votar):

// ○ Simulación de seguridad: Antes de sumar el voto, el sistema debe preguntar un
// "código de estudiante" (ej. un número).
// ○ Si el código es "123" (simulando que ya votó), debe mostrar "Este estudiante ya
// ejerció su voto".
// ○ Si el código es cualquier otro, debe sumar el voto al candidato correspondiente y
// mostrar "Voto registrado".
// ● Opción 4 (Consultar Resultados Parciales):
// ○ Debe mostrar el conteo (ej: A: 5 votos, B: 3 votos, Blanco: 1 voto).
// ○ Debe determinar y mostrar quién va ganando:
// ■ Si A > B: "El Candidato A va ganando".
// ■ Si B > A: "El Candidato B va ganando".
// ■ Si A == B (y ambos > 0): "Hay un empate entre A y B".
// ■ Si todos son 0: "Aún no hay votos".
// ● Opción 5 (Salir):
// ○ Debe terminar el programa.

let votosCandidatoA = 0;
let votosCandidatoB = 0;
let votosEnBlanco = 0;
let codigoEstudianteYaVoto = 0;
let opcionMenu = 0;
let codigoIngresado = 0;
let continuar = 1;

while (continuar === 1) {
  console.log("\n========== DEMOVOTO ==========");
  console.log("1. Votar por Candidato A");
  console.log("2. Votar por Candidato B");
  console.log("3. Votar en Blanco");
  console.log("4. Consultar Resultados Parciales");
  console.log("5. Salir");
  console.log("===============================");
  
  opcionMenu = parseInt(prompt("Seleccione una opción (1-5):"));
  
  switch (opcionMenu) {
    case 1:
      codigoIngresado = parseInt(prompt("Ingrese su código de estudiante:"));
      
      if (codigoIngresado === 123) {
        console.log("Este estudiante ya ejerció su voto");
      } else {
        votosCandidatoA = votosCandidatoA + 1;
        console.log("Voto registrado");
      }
      break;
      
    case 2:
      codigoIngresado = parseInt(prompt("Ingrese su código de estudiante:"));
      
      if (codigoIngresado === 123) {
        console.log("Este estudiante ya ejerció su voto");
      } else {
        votosCandidatoB = votosCandidatoB + 1;
        console.log("Voto registrado");
      }
      break;
      
    case 3:
      codigoIngresado = parseInt(prompt("Ingrese su código de estudiante:"));
      
      if (codigoIngresado === 123) {
        console.log("Este estudiante ya ejerció su voto");
      } else {
        votosEnBlanco = votosEnBlanco + 1;
        console.log("Voto registrado");
      }
      break;
      
    case 4:
      console.log("\n========== RESULTADOS PARCIALES ==========");
      console.log("A: " + votosCandidatoA + " votos");
      console.log("B: " + votosCandidatoB + " votos");
      console.log("Blanco: " + votosEnBlanco + " votos");
      console.log("==========================================");
      
      if (votosCandidatoA === 0 && votosCandidatoB === 0 && votosEnBlanco === 0) {
        console.log("Aún no hay votos");
      } else if (votosCandidatoA > votosCandidatoB) {
        console.log("El Candidato A va ganando");
      } else if (votosCandidatoB > votosCandidatoA) {
        console.log("El Candidato B va ganando");
      } else if (votosCandidatoA === votosCandidatoB && votosCandidatoA > 0) {
        console.log("Hay un empate entre A y B");
      }
      break;
      
    case 5:
      console.log("Gracias por usar DemoVoto. ¡Hasta luego!");
      continuar = 0;
      break;
      
    default:
      console.log("Opción no válida. Intente de nuevo.");
      break;
  }
}
