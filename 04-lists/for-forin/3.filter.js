const { obterPessoas } = require('./service');


Array.prototype.meuFilter = function (callback) {
    const lista = [];
    for(index in this) {
        const item = this[index]
        const result = callback(item, index,this);
        if (!result) continue;
        lista.push(item)
    }
    return lista;
}


async function main() {
    try {
        const { results 
        } = await obterPessoas(`a`);


        // const familaLars = results.filter(function(item) {
        //     //padrão boolean 
        //     // false "remove" da lista
        //     // true mantêm 
        //     //retorna um array
        //     // não encontrou = -1;
        //    const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
        //    return result;
        // });

        const familaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf(`lars`) !== -1;       
        })


        const names = familaLars.map((pessoa) => pessoa.name);
        console.log(names);


    } catch (error) {
        console.error('deu ruim', error)
    }
}

main();