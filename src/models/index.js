const { chaves } = require('../schemas');
const { SHA256 } = require('crypto-js');

class Models {

    /**
     * Gera uma nova chave de criptografia.
     * @returns {string}
     */
    static genKey() {
        return SHA256(Math.random()).toString();
    }

    /**
     * Gera uma nova chave e salva no banco.
     * @param {string} id 
     * @returns 
     */
    static async saveKey(id) {
        const key = this.genKey();

        return await chaves.create({
            id,
            chave: key
        });
    }

    /**
     * Procura por uma chave.
     * @param {string} id 
     * @returns 
     */
    static async findKey(id) {
        return await chaves.findByPk(id);
    }

    /**
     * Retorna todas as chaves.
     * @returns todas as chaves
     */
    static async getAll() {
        return await chaves.findAll();
    }

    /**
     * Deleta uma chave.
     * @param {string} id 
     */
    static async deleteKey(id) {
        return await chaves.destroy({ where: { id } });
    }

    /**
     * Atualiza a chave.
     * @param {string} oldId 
     * @param {string} newId 
     */
    static async updateKey(oldId, newId) {

        // Se o id antigo for igual ao novo, retorna a chave atual
        if(oldId === newId) {
            return await this.findKey(oldId);
        }

        const key = this.genKey();

        await chaves.update(
            {
                id: newId,
                chave: key
            },
            { where: { id: oldId } }
        )
        .then(async result => {
            if(!result[0]) throw 'Chave não atualizada';

            return this.findKey(newId);
        });
    }

}

module.exports = Models;