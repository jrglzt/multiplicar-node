//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break
    default:
        console.log('comando no reconocido');

}

//console.log(argv);


//console.log(process.argv);

//let argv2 = process.argv;
console.log(argv.limite);
//console.log(argv2);

/* let parametro = argv[2];
let base = parametro.split('=')[1];
 */ //console.log(base);

//console.log(multiplicar);