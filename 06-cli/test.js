const {
    deepEqual,
    ok
} = require('assert');
const exp = require('constants');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de heróis', () => {
    it('deve pesquisar heroi buscando arquivo', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;

        const [resultado] = await database.listar(expected.id)

        deepEqual(resultado, expected);
    })
    // it('deve cadastrar um herói usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR;


    //     ok(null, expected);
    // })
})