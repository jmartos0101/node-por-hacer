
//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];

switch (comando){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("========Por Hacer===========".green);
            console.log("Estado: ", tarea.descripcion);
            console.log("============================".green);
        }
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.c);
        console.log(actualizado);
    break;

    case 'borrar':
    let borrado = porHacer.borrar(argv.d);
    console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');
    break;

}