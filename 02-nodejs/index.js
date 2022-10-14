/*
    0 obter um usuário
    1 obter o numero de telefone de um usuario a partir do seu id
    2 obter o endereço do usuário pelo ID    
*/ 

function obterUsuario() {
    //quando der problema -> reject
    //quando sucesso -> resolve

    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function() {
            //return reject(new Error('BUG'))

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    });
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '999925522',
                ddd: 45
            })
        }, 2000);
    })
    
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

const usuarioPromise = obterUsuario();

usuarioPromise
    .then(function(usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario:{
                        nome: usuario.nome,
                        usuario: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function(resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id);

        return endereco.then(
            function resolverEndereco(result) {
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: result
                }
            }
        )
    })
    .then( function(resultado) {
        console.log('resultado', resultado)
    })
    .catch(function(error) {
        console.error('deu ruim', error)
    })

//sucesso -> .then
//errros  -> .catch


/*
obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
        console.error('erro no usuario', error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('erro no telefone', error1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('erro no endereco', error2);
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero}
                Telefone: ${telefone.ddd} - ${telefone.telefone}
            `)
        })
    })
});*/
//const telefone = obterTelefone(usuario.id);


//console.log('telefone', telefone);
